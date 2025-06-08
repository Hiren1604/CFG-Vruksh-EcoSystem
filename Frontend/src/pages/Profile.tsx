
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Edit, MapPin, Phone, Mail, Globe, Users, Calendar } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Vruksh Learning Initiative',
    description: 'Empowering women through education and skill development across rural communities in India.',
    email: 'contact@vrukshlearning.org',
    phone: '+91 98765 43210',
    website: 'www.vrukshlearning.org',
    address: 'Mumbai, Maharashtra, India',
    registrationNumber: 'NGO/2018/0012345',
    foundedYear: '2018',
    focusAreas: ['Women Empowerment', 'Digital Literacy', 'Skill Development', 'Rural Education'],
    beneficiaries: '2,500+',
    partnerships: '15',
    activePrograms: '8'
  });

  const handleSave = () => {
    setIsEditing(false);
    // Save logic here
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Organization Profile</h1>
          <p className="text-muted-foreground mt-2">
            Manage your NGO information and public profile.
          </p>
        </div>
        <Button 
          onClick={() => setIsEditing(!isEditing)}
          variant={isEditing ? "outline" : "default"}
        >
          <Edit size={16} className="mr-2" />
          {isEditing ? 'Cancel' : 'Edit Profile'}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Profile Info */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Organization Name</Label>
                <Input
                  id="name"
                  value={profileData.name}
                  onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                  disabled={!isEditing}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  rows={3}
                  value={profileData.description}
                  onChange={(e) => setProfileData({...profileData, description: e.target.value})}
                  disabled={!isEditing}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="registrationNumber">Registration Number</Label>
                  <Input
                    id="registrationNumber"
                    value={profileData.registrationNumber}
                    onChange={(e) => setProfileData({...profileData, registrationNumber: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="foundedYear">Founded Year</Label>
                  <Input
                    id="foundedYear"
                    value={profileData.foundedYear}
                    onChange={(e) => setProfileData({...profileData, foundedYear: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="flex items-center space-x-2">
                    <Mail size={16} className="text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <div className="flex items-center space-x-2">
                    <Phone size={16} className="text-muted-foreground" />
                    <Input
                      id="phone"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <div className="flex items-center space-x-2">
                  <Globe size={16} className="text-muted-foreground" />
                  <Input
                    id="website"
                    value={profileData.website}
                    onChange={(e) => setProfileData({...profileData, website: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} className="text-muted-foreground" />
                  <Input
                    id="address"
                    value={profileData.address}
                    onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Focus Areas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {profileData.focusAreas.map((area, index) => (
                  <Badge key={index} variant="secondary" className="bg-emerald-100 text-emerald-800">
                    {area}
                  </Badge>
                ))}
              </div>
              {isEditing && (
                <Button variant="outline" size="sm" className="mt-4">
                  Add Focus Area
                </Button>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Stats Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Impact Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center p-4 bg-emerald-50 rounded-lg">
                <div className="text-2xl font-bold text-emerald-600">{profileData.beneficiaries}</div>
                <p className="text-sm text-muted-foreground">Beneficiaries Reached</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-xl font-bold text-blue-600">{profileData.partnerships}</div>
                  <p className="text-xs text-muted-foreground">Partnerships</p>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <div className="text-xl font-bold text-orange-600">{profileData.activePrograms}</div>
                  <p className="text-xs text-muted-foreground">Active Programs</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Calendar size={16} className="mr-2" />
                View Activity Log
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users size={16} className="mr-2" />
                Manage Team Members
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Globe size={16} className="mr-2" />
                Public Profile Preview
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {isEditing && (
        <div className="flex justify-end space-x-4">
          <Button variant="outline" onClick={() => setIsEditing(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} className="bg-emerald-500 hover:bg-emerald-600">
            Save Changes
          </Button>
        </div>
      )}
    </div>
  );
};

export default Profile;
