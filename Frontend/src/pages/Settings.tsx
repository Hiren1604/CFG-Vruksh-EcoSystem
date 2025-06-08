
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Settings = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    ngoName: 'Vruksh Learning Initiative',
    defaultLanguage: 'english',
    theme: 'light',
    emailNotifications: true,
    courseApproval: false,
    autoPublish: true,
    maxFileSize: '100',
    allowedFormats: ['mp4', 'pdf', 'jpg', 'png']
  });

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-2">
          Configure your NGO preferences and platform settings.
        </p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Organization Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ngoName">NGO Name</Label>
                  <Input
                    id="ngoName"
                    value={settings.ngoName}
                    onChange={(e) => setSettings({...settings, ngoName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="defaultLanguage">Default Language</Label>
                  <Select value={settings.defaultLanguage} onValueChange={(value) => setSettings({...settings, defaultLanguage: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="tamil">Tamil</SelectItem>
                      <SelectItem value="bengali">Bengali</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Organization Logo</Label>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <span className="text-emerald-600 font-bold text-xl">V</span>
                  </div>
                  <Button variant="outline">
                    <Upload size={16} className="mr-2" />
                    Upload New Logo
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="theme">Interface Theme</Label>
                <Select value={settings.theme} onValueChange={(value) => setSettings({...settings, theme: value})}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Content Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Require approval for new courses</Label>
                  <p className="text-sm text-muted-foreground">
                    New courses need admin approval before publishing
                  </p>
                </div>
                <Switch
                  checked={settings.courseApproval}
                  onCheckedChange={(checked) => setSettings({...settings, courseApproval: checked})}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Auto-publish approved content</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically make approved courses available to learners
                  </p>
                </div>
                <Switch
                  checked={settings.autoPublish}
                  onCheckedChange={(checked) => setSettings({...settings, autoPublish: checked})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="maxFileSize">Maximum file size (MB)</Label>
                <Input
                  id="maxFileSize"
                  type="number"
                  value={settings.maxFileSize}
                  onChange={(e) => setSettings({...settings, maxFileSize: e.target.value})}
                  className="w-32"
                />
              </div>

              <div className="space-y-2">
                <Label>Allowed file formats</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {['mp4', 'pdf', 'jpg', 'png', 'docx', 'pptx'].map(format => (
                    <div key={format} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={format}
                        checked={settings.allowedFormats.includes(format)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSettings({
                              ...settings,
                              allowedFormats: [...settings.allowedFormats, format]
                            });
                          } else {
                            setSettings({
                              ...settings,
                              allowedFormats: settings.allowedFormats.filter(f => f !== format)
                            });
                          }
                        }}
                        className="rounded"
                      />
                      <Label htmlFor={format} className="text-sm">
                        .{format}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label>Email notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive email updates about course activities
                  </p>
                </div>
                <Switch
                  checked={settings.emailNotifications}
                  onCheckedChange={(checked) => setSettings({...settings, emailNotifications: checked})}
                />
              </div>

              <div className="space-y-4">
                <Label>Notification types</Label>
                <div className="space-y-3">
                  {[
                    'New course enrollments',
                    'Course completion milestones',
                    'Content requests',
                    'System updates',
                    'Weekly analytics reports'
                  ].map((type, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input type="checkbox" id={`notif-${index}`} defaultChecked className="rounded" />
                      <Label htmlFor={`notif-${index}`} className="text-sm">
                        {type}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Two-factor authentication</Label>
                <div className="flex items-center space-x-4">
                  <Button variant="outline">Enable 2FA</Button>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security to your account
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Change Password</Label>
                <div className="space-y-2 max-w-md">
                  <Input type="password" placeholder="Current password" />
                  <Input type="password" placeholder="New password" />
                  <Input type="password" placeholder="Confirm new password" />
                  <Button variant="outline" size="sm">Update Password</Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>API Access</Label>
                <div className="flex items-center space-x-4">
                  <Button variant="outline">Generate API Key</Button>
                  <p className="text-sm text-muted-foreground">
                    Create API keys for external integrations
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end">
        <Button onClick={handleSave} className="bg-emerald-500 hover:bg-emerald-600">
          <Save size={16} className="mr-2" />
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default Settings;
