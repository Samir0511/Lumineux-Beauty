import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/shadcn/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/shadcn/card";
import { Button } from "@/components/ui/shadcn/button";
import { Input } from "@/components/ui/shadcn/input";
import { Label } from "@/components/ui/shadcn/label";
import { Separator } from "@/components/ui/shadcn/separator";
import { orders } from "@/lib/data";
import Image from "next/image";
import { Edit, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/shadcn/avatar";
import { Badge } from "@/components/ui/shadcn/badge";

export default function AccountPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold font-headline">My Account</h1>
        <p className="text-muted-foreground">Manage your account, orders, and addresses.</p>
      </header>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="profile">My Details</TabsTrigger>
          <TabsTrigger value="orders">Order History</TabsTrigger>
          <TabsTrigger value="addresses">Addresses</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>My Details</CardTitle>
              <CardDescription>Update your personal information and password.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                    <Avatar className="h-20 w-20">
                        <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBmYWNlfGVufDB8fHx8MTc1MjMwNDc5MXww&ixlib=rb-4.1.0&q=80&w=1080" alt="User avatar" data-ai-hint="person face" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                        <h2 className="text-xl font-semibold">Jane Doe</h2>
                        <p className="text-muted-foreground">jane.doe@example.com</p>
                        <Button variant="link" className="p-0 h-auto text-sm">Change Avatar</Button>
                    </div>
                </div>
                <Separator/>
              <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="Jane Doe" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="jane.doe@example.com" />
                </div>
              </div>
              <Separator />
               <div className="space-y-4">
                <h3 className="text-lg font-semibold">Change Password</h3>
                <div className="space-y-2">
                    <Label htmlFor="password">Current Password</Label>
                    <Input id="password" type="password" placeholder="••••••••" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" placeholder="••••••••" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
              <CardDescription>View your past orders and their status.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {orders.map((order) => (
                <div key={order.id} className="border p-4 rounded-lg">
                  <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                    <div>
                      <p className="font-semibold">Order ID: {order.id}</p>
                      <p className="text-sm text-muted-foreground">Date: {order.date}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-2 md:mt-0">
                      <p className="font-semibold text-lg">${order.total.toFixed(2)}</p>
                      <Badge variant={order.status === 'Delivered' ? 'default' : 'secondary'}>{order.status}</Badge>
                      <Button variant="outline" size="sm">View Order</Button>
                    </div>
                  </div>
                  <Separator />
                  <div className="mt-4 space-y-4">
                  {order.items.map(item => (
                    <div key={item.name} className="flex items-center gap-4">
                      <Image src={item.image} alt={item.name} width={64} height={64} className="rounded-md" data-ai-hint="product photo" />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="addresses">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Addresses</CardTitle>
                <CardDescription>Manage your shipping and billing addresses.</CardDescription>
              </div>
              <Button>Add New Address</Button>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2">
              <div className="border p-4 rounded-lg flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                        <p className="font-semibold">Shipping Address</p>
                        <Badge>Default</Badge>
                    </div>
                    <address className="text-muted-foreground not-italic mt-2 text-sm">
                        Jane Doe<br/>
                        123 Radiance Ave, Apt 4B<br/>
                        New York, NY 10001<br/>
                        United States
                    </address>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm"><Edit className="mr-2 h-4 w-4"/>Edit</Button>
                    <Button variant="outline" size="sm" disabled><Trash2 className="mr-2 h-4 w-4"/>Delete</Button>
                  </div>
              </div>
               <div className="border p-4 rounded-lg flex flex-col justify-between">
                  <div>
                     <p className="font-semibold">Office Address</p>
                    <address className="text-muted-foreground not-italic mt-2 text-sm">
                        Jane Doe<br/>
                        456 Business Blvd, Suite 200<br/>
                        San Francisco, CA 94105<br/>
                        United States
                    </address>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm"><Edit className="mr-2 h-4 w-4"/>Edit</Button>
                    <Button variant="outline" size="sm"><Trash2 className="mr-2 h-4 w-4"/>Delete</Button>
                    <Button variant="link" size="sm" className="p-0 h-auto ml-auto">Set as Default</Button>
                  </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
