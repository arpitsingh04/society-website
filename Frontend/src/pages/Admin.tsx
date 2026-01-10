import { useState, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { API_BASE_URL } from '@/config/api';
import {
  Upload,
  Trash2,
  Eye,
  Mail,
  Phone,
  Calendar,
  User,
  Building,
  MessageSquare,
  LogOut,
  Plus,
  RefreshCw,
  Shield,
  Settings,
  MapPin
} from 'lucide-react';

interface GalleryImage {
  _id: string;
  filename: string;
  originalName: string;
  title: string;
  description?: string;
  category: string;
  filePath: string;
  createdAt: string;
}

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt: string;
}

interface TeamMember {
  _id: string;
  name: string;
  position: string;
  phone?: string;
  image: string;
  isActive: boolean;
  createdAt: string;
}

const Admin = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploadData, setUploadData] = useState({
    title: '',
    description: '',
    category: 'General',
    eventDate: '',
    location: '',
    file: null as File | null
  });

  const [memberData, setMemberData] = useState({
    name: '',
    position: '',
    phone: '',
    file: null as File | null
  });

  const [settings, setSettings] = useState({
    contactNumber: '',
    whatsappNumber: '',
    email: ''
  });

  const [editingMember, setEditingMember] = useState<TeamMember | null>(null);


  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      verifyToken(token);
    }
  }, []);

  const verifyToken = async (token: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/verify`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.ok) {
        setIsAuthenticated(true);
        fetchData();
      } else {
        localStorage.removeItem('adminToken');
      }
    } catch (error) {
      localStorage.removeItem('adminToken');
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('adminToken', data.token);
        setIsAuthenticated(true);
        fetchData();
        toast({ title: 'Login successful', description: 'Welcome to admin panel' });
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      toast({
        title: 'Login failed',
        description: error instanceof Error ? error.message : 'Invalid credentials',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
    setLoginData({ username: '', password: '' });
  };

  const fetchData = async () => {
    await Promise.all([fetchImages(), fetchContacts(), fetchTeamMembers(), fetchSettings()]);
  };

  const fetchImages = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/gallery`);
      if (response.ok) {
        const data = await response.json();
        setImages(data);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const fetchContacts = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setContacts(data.contacts);
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const fetchTeamMembers = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/team`);
      if (response.ok) {
        const data = await response.json();
        setTeamMembers(data);
      }
    } catch (error) {
      console.error('Error fetching team members:', error);
    }
  };

  const fetchSettings = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/settings`);
      if (response.ok) {
        const data = await response.json();
        setSettings({
          contactNumber: data.contactNumber || '',
          whatsappNumber: data.whatsappNumber || '',
          email: data.email || ''
        });
      }
    } catch (error) {
      console.error('Error fetching settings:', error);
    }
  };

  const handleSettingsUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_BASE_URL}/api/settings`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(settings)
      });

      if (response.ok) {
        toast({ title: 'Success', description: 'Settings updated successfully' });
        queryClient.invalidateQueries({ queryKey: ['settings'] });
      } else {
        throw new Error('Failed to update settings');
      }
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to update settings', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadData.file || !uploadData.title) {
      toast({ title: 'Error', description: 'Please fill all required fields', variant: 'destructive' });
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('image', uploadData.file);
    formData.append('title', uploadData.title);
    formData.append('category', uploadData.category);
    if (uploadData.description) formData.append('description', uploadData.description);
    if (uploadData.eventDate) formData.append('eventDate', uploadData.eventDate);
    if (uploadData.location) formData.append('location', uploadData.location);

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_BASE_URL}/api/gallery`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData
      });

      if (response.ok) {
        toast({ title: 'Success', description: 'Event uploaded successfully' });
        setUploadData({ title: '', description: '', category: 'Industrial Projects', eventDate: '', location: '', file: null });
        fetchImages();
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to upload event', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const deleteImage = async (id: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_BASE_URL}/api/gallery/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.ok) {
        toast({ title: 'Success', description: 'Event deleted successfully' });
        fetchImages();
      } else {
        throw new Error('Delete failed');
      }
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to delete event', variant: 'destructive' });
    }
  };

  const updateContactStatus = async (id: string, status: string) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_BASE_URL}/api/contact/${id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ status })
      });

      if (response.ok) {
        fetchContacts();
      }
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to update status', variant: 'destructive' });
    }
  };

  const handleMemberSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!memberData.name || !memberData.position || !memberData.file) {
      toast({ title: 'Error', description: 'Please fill all required fields', variant: 'destructive' });
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('image', memberData.file);
    formData.append('name', memberData.name);
    formData.append('position', memberData.position);
    if (memberData.phone) formData.append('phone', memberData.phone);

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_BASE_URL}/api/team`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData
      });

      if (response.ok) {
        toast({ title: 'Success', description: 'Team member added successfully' });
        setMemberData({ name: '', position: '', phone: '', file: null });
        fetchTeamMembers();
      } else {
        throw new Error('Failed to add member');
      }
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to add team member', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const handleMemberUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingMember || !memberData.name || !memberData.position) {
      toast({ title: 'Error', description: 'Please fill all required fields', variant: 'destructive' });
      return;
    }

    setLoading(true);
    const formData = new FormData();
    if (memberData.file) formData.append('image', memberData.file);
    formData.append('name', memberData.name);
    formData.append('position', memberData.position);
    if (memberData.phone) formData.append('phone', memberData.phone);

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_BASE_URL}/api/team/${editingMember._id}`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` },
        body: formData
      });

      if (response.ok) {
        toast({ title: 'Success', description: 'Team member updated successfully' });
        setEditingMember(null);
        setMemberData({ name: '', position: '', phone: '', file: null });
        fetchTeamMembers();
      } else {
        throw new Error('Failed to update member');
      }
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to update team member', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const deleteMember = async (id: string) => {
    if (!confirm('Are you sure you want to delete this team member?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`${API_BASE_URL}/api/team/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.ok) {
        toast({ title: 'Success', description: 'Team member deleted successfully' });
        fetchTeamMembers();
      } else {
        throw new Error('Delete failed');
      }
    } catch (error) {
      toast({ title: 'Error', description: 'Failed to delete team member', variant: 'destructive' });
    }
  };

  const startEditMember = (member: TeamMember) => {
    setEditingMember(member);
    setMemberData({
      name: member.name,
      position: member.position,
      phone: member.phone || '',
      file: null
    });
  };

  const cancelEdit = () => {
    setEditingMember(null);
    setMemberData({ name: '', position: '', phone: '', file: null });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center flex items-center justify-center gap-2">
              <Shield className="h-5 w-5" />
              Admin Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <User className="h-4 w-4 text-gray-400" />
                  </div>
                  <Input
                    id="username"
                    type="text"
                    value={loginData.username}
                    onChange={(e) => setLoginData(prev => ({ ...prev, username: e.target.value }))}
                    className="pl-10"
                    placeholder="Enter your username"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Shield className="h-4 w-4 text-gray-400" />
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                    className="pl-10"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 lg:pt-36 pb-8">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-brand-cyan to-brand-blue rounded-xl p-4 sm:p-6 mb-6 text-white">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">Admin Dashboard</h1>
              <p className="text-white/80 text-sm sm:text-base hidden sm:block">Manage your events and contact messages</p>
            </div>
            <Button onClick={handleLogout} variant="outline" className="border-white text-black hover:bg-white/10 text-sm px-3 py-2">
              <LogOut className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline ">Logout</span>
              <span className="sm:hidden">Exit</span>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mt-4 sm:mt-6">
            <div className="bg-white/10 rounded-lg p-2 sm:p-4 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-center sm:gap-3 text-center sm:text-left">
                <div className="w-6 h-6 sm:w-10 sm:h-10 bg-white/20 rounded-lg flex items-center justify-center mb-1 sm:mb-0">
                  <Calendar className="h-3 w-3 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <p className="text-white/80 text-xs sm:text-sm">Events</p>
                  <p className="text-lg sm:text-2xl font-bold">{images.length}</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-2 sm:p-4 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-center sm:gap-3 text-center sm:text-left">
                <div className="w-6 h-6 sm:w-10 sm:h-10 bg-white/20 rounded-lg flex items-center justify-center mb-1 sm:mb-0">
                  <Mail className="h-3 w-3 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <p className="text-white/80 text-xs sm:text-sm">Messages</p>
                  <p className="text-lg sm:text-2xl font-bold">{contacts.filter(c => c.status === 'new').length}</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-2 sm:p-4 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row items-center sm:gap-3 text-center sm:text-left">
                <div className="w-6 h-6 sm:w-10 sm:h-10 bg-white/20 rounded-lg flex items-center justify-center mb-1 sm:mb-0">
                  <User className="h-3 w-3 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <p className="text-white/80 text-xs sm:text-sm">Members</p>
                  <p className="text-lg sm:text-2xl font-bold">{teamMembers.length}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="gallery" className="space-y-4 sm:space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-muted/50 p-1 rounded-xl">
            <TabsTrigger value="gallery" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg text-xs sm:text-sm px-2 py-2">
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Events</span>
              <span className="sm:hidden">Events</span>
            </TabsTrigger>
            <TabsTrigger value="team" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg text-xs sm:text-sm px-2 py-2">
              <User className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Team</span>
              <span className="sm:hidden">Team</span>
            </TabsTrigger>
            <TabsTrigger value="contacts" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg text-xs sm:text-sm px-1 sm:px-2 py-2">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Contacts ({contacts.filter(c => c.status === 'new').length})</span>
              <span className="sm:hidden">Msgs ({contacts.filter(c => c.status === 'new').length})</span>
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg text-xs sm:text-sm px-2 py-2">
              <Settings className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Settings</span>
              <span className="sm:hidden">Settings</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="gallery" className="space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                  Upload New Event
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <form onSubmit={handleImageUpload} className="space-y-3 sm:space-y-4">
                  <div className="space-y-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0">
                    <div>
                      <Label htmlFor="title" className="text-sm">Event Title *</Label>
                      <Input
                        id="title"
                        value={uploadData.title}
                        onChange={(e) => setUploadData(prev => ({ ...prev, title: e.target.value }))}
                        className="text-sm"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="category" className="text-sm">Category *</Label>
                      <select
                        id="category"
                        value={uploadData.category}
                        onChange={(e) => setUploadData(prev => ({ ...prev, category: e.target.value }))}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      >
                        <option value="General">General</option>
                        <option value="Society Meeting">Society Meeting</option>
                        <option value="Cultural Event">Cultural Event</option>
                        <option value="Sports">Sports</option>
                        <option value="Workshop">Workshop</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0">
                    <div>
                      <Label htmlFor="eventDate" className="text-sm">Event Date</Label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={uploadData.eventDate}
                        onChange={(e) => setUploadData(prev => ({ ...prev, eventDate: e.target.value }))}
                        className="text-sm"
                      />
                    </div>
                    <div>
                      <Label htmlFor="location" className="text-sm">Location</Label>
                      <Input
                        id="location"
                        value={uploadData.location}
                        onChange={(e) => setUploadData(prev => ({ ...prev, location: e.target.value }))}
                        className="text-sm"
                        placeholder="e.g. Surat, Gujarat"
                      />
                    </div>
                  </div>
                  <div className="space-y-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0">
                    <div className="col-span-2">
                      <Label htmlFor="file" className="text-sm">Event Image *</Label>
                      <Input
                        id="file"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setUploadData(prev => ({ ...prev, file: e.target.files?.[0] || null }))}
                        className="text-sm"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="description" className="text-sm">Description</Label>
                    <Textarea
                      id="description"
                      value={uploadData.description}
                      onChange={(e) => setUploadData(prev => ({ ...prev, description: e.target.value }))}
                      rows={2}
                      className="text-sm"
                    />
                  </div>
                  <Button type="submit" disabled={loading} className="w-full sm:w-auto text-sm">
                    <Upload className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    {loading ? 'Uploading...' : 'Upload Event'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-lg sm:text-xl">
                  <span>Events ({images.length})</span>
                  <Button onClick={fetchImages} variant="outline" size="sm" className="text-xs px-2 py-1">
                    <RefreshCw className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {images.map((image) => (
                    <Card key={image._id} className="overflow-hidden">
                      <div className="aspect-video relative">
                        <img
                          src={`${API_BASE_URL}/uploads/${image.filePath}`}
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-3 sm:p-4">
                        <h3 className="font-semibold mb-1 text-sm sm:text-base line-clamp-1">{image.title}</h3>
                        <Badge variant="secondary" className="mb-2 text-[10px] px-1.5 py-0 h-5">{image.category}</Badge>
                        {image.description && (
                          <p className="text-xs sm:text-sm text-muted-foreground mb-2 line-clamp-2">{image.description}</p>
                        )}
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-muted-foreground">
                            {new Date(image.createdAt).toLocaleDateString()}
                          </span>
                          <Button
                            onClick={() => deleteImage(image._id)}
                            variant="destructive"
                            size="sm"
                            className="px-2 py-1"
                          >
                            <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                  {editingMember ? 'Edit Team Member' : 'Add New Team Member'}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <form onSubmit={editingMember ? handleMemberUpdate : handleMemberSubmit} className="space-y-3 sm:space-y-4">
                  <div className="space-y-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0">
                    <div>
                      <Label htmlFor="memberName" className="text-sm">Name *</Label>
                      <Input
                        id="memberName"
                        value={memberData.name}
                        onChange={(e) => setMemberData(prev => ({ ...prev, name: e.target.value }))}
                        className="text-sm"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="position" className="text-sm">Position *</Label>
                      <Input
                        id="position"
                        value={memberData.position}
                        onChange={(e) => setMemberData(prev => ({ ...prev, position: e.target.value }))}
                        className="text-sm"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0">

                    <div>
                      <Label htmlFor="memberPhone" className="text-sm">Phone</Label>
                      <Input
                        id="memberPhone"
                        value={memberData.phone}
                        onChange={(e) => setMemberData(prev => ({ ...prev, phone: e.target.value }))}
                        className="text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="memberImage" className="text-sm">Profile Image {!editingMember && '*'}</Label>
                    <Input
                      id="memberImage"
                      type="file"
                      accept="image/*"
                      onChange={(e) => setMemberData(prev => ({ ...prev, file: e.target.files?.[0] || null }))}
                      className="text-sm"
                      required={!editingMember}
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button type="submit" disabled={loading} className="text-sm">
                      <Upload className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                      {loading ? (editingMember ? 'Updating...' : 'Adding...') : (editingMember ? 'Update Member' : 'Add Member')}
                    </Button>
                    {editingMember && (
                      <Button type="button" onClick={cancelEdit} variant="outline" className="text-sm">
                        Cancel
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-lg sm:text-xl">
                  <span>Team Members ({teamMembers.length})</span>
                  <Button onClick={fetchTeamMembers} variant="outline" size="sm" className="text-xs px-2 py-1">
                    <RefreshCw className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {teamMembers.map((member) => (
                    <Card key={member._id} className="overflow-hidden">
                      <div className="aspect-square relative">
                        <img
                          src={`${API_BASE_URL}/uploads/${member.image}`}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-3 sm:p-4">
                        <h3 className="font-semibold mb-1 text-sm sm:text-base line-clamp-1">{member.name}</h3>
                        <p className="text-xs sm:text-sm text-brand-orange font-medium mb-2">{member.position}</p>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs text-muted-foreground">
                            {new Date(member.createdAt).toLocaleDateString()}
                          </span>
                          <Badge variant={member.isActive ? 'default' : 'secondary'} className="text-[10px] px-1.5 py-0 h-5">
                            {member.isActive ? 'Active' : 'Inactive'}
                          </Badge>
                        </div>
                        <div className="flex gap-1">
                          <Button
                            onClick={() => startEditMember(member)}
                            variant="outline"
                            size="sm"
                            className="px-2 py-1 flex-1"
                          >
                            Edit
                          </Button>
                          <Button
                            onClick={() => deleteMember(member._id)}
                            variant="destructive"
                            size="sm"
                            className="px-2 py-1"
                          >
                            <Trash2 className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>



          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                  <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
                  General Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <form onSubmit={handleSettingsUpdate} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contactNumber">Contact Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="contactNumber"
                          placeholder="+91 98765 43210"
                          className="pl-9"
                          value={settings.contactNumber}
                          onChange={(e) => setSettings(prev => ({ ...prev, contactNumber: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="whatsappNumber">WhatsApp Number</Label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="whatsappNumber"
                          placeholder="+91 98765 43210"
                          className="pl-9"
                          value={settings.whatsappNumber}
                          onChange={(e) => setSettings(prev => ({ ...prev, whatsappNumber: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2 space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="info@example.com"
                          className="pl-9"
                          value={settings.email}
                          onChange={(e) => setSettings(prev => ({ ...prev, email: e.target.value }))}
                        />
                      </div>
                    </div>


                  </div>

                  <div className="flex justify-end pt-4">
                    <Button type="submit" disabled={loading}>
                      {loading ? (
                        <>
                          <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                          Saving...
                        </>
                      ) : (
                        'Save Changes'
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contacts" className="space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-lg sm:text-xl">
                  <span>Messages ({contacts.length})</span>
                  <Button onClick={fetchContacts} variant="outline" size="sm" className="text-xs px-2 py-1">
                    <RefreshCw className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 sm:space-y-4">
                  {contacts.map((contact) => (
                    <Card key={contact._id} className="p-3 sm:p-4">
                      <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <User className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="font-semibold text-sm sm:text-base">{contact.name}</span>
                          <Badge variant={contact.status === 'new' ? 'destructive' : contact.status === 'read' ? 'secondary' : 'default'} className="text-xs px-2 py-1">
                            {contact.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {new Date(contact.createdAt).toLocaleDateString()}
                        </div>
                      </div>

                      <div className="space-y-2 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0 mb-3">
                        <div className="flex items-center gap-2">
                          <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                          <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline text-xs sm:text-sm break-all">
                            {contact.email}
                          </a>
                        </div>
                        {contact.phone && (
                          <div className="flex items-center gap-2">
                            <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                            <a href={`tel:${contact.phone}`} className="text-blue-600 hover:underline text-xs sm:text-sm">
                              {contact.phone}
                            </a>
                          </div>
                        )}
                        {contact.company && (
                          <div className="flex items-center gap-2 sm:col-span-2">
                            <Building className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span className="text-xs sm:text-sm">{contact.company}</span>
                          </div>
                        )}
                      </div>

                      <div className="mb-3">
                        <div className="flex items-center gap-2 mb-2">
                          <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="font-medium text-sm">Message:</span>
                        </div>
                        <p className="text-xs sm:text-sm bg-muted p-2 sm:p-3 rounded">{contact.message}</p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button
                          onClick={() => updateContactStatus(contact._id, 'read')}
                          variant="outline"
                          size="sm"
                          disabled={contact.status === 'read'}
                          className="text-xs px-3 py-2"
                        >
                          Mark as Read
                        </Button>
                        <Button
                          onClick={() => updateContactStatus(contact._id, 'replied')}
                          variant="outline"
                          size="sm"
                          disabled={contact.status === 'replied'}
                          className="text-xs px-3 py-2"
                        >
                          Mark as Replied
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div >
    </div >
  );
};

export default Admin;