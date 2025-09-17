import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, Shield } from "lucide-react";

interface LoginPageProps {
  onBack: () => void;
  onLogin: (role: 'state' | 'zonal') => void;
}

const LoginPage = ({ onBack, onLogin }: LoginPageProps) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Predefined credentials
  const validCredentials = {
    state: { username: "state_admin", password: "state123" },
    zonal: { username: "zonal_admin", password: "zonal123" }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const { username, password } = credentials;

    if (username === validCredentials.state.username && password === validCredentials.state.password) {
      onLogin('state');
    } else if (username === validCredentials.zonal.username && password === validCredentials.zonal.password) {
      onLogin('zonal');
    } else {
      setError("Invalid username or password");
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-government-primary/10 to-government-secondary/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-government-primary hover:text-government-primary/80"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Landing
          </Button>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="shadow-xl border-government-primary/20">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-government-primary/10 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-government-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-government-primary">
                Police Dashboard Login
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Enter your credentials to access the police dashboard
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter username"
                    value={credentials.username}
                    onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    value={credentials.password}
                    onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                    required
                  />
                </div>

                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <Button
                  type="submit"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>
              </form>

              <div className="pt-4 border-t border-government-primary/10">
                <div className="text-sm text-muted-foreground space-y-2">
                  <p className="font-medium">Demo Credentials:</p>
                  <div className="bg-muted/50 p-3 rounded space-y-1 text-xs">
                    <p><strong>State Dashboard:</strong></p>
                    <p>Username: state_admin</p>
                    <p>Password: state123</p>
                    
                    <p className="pt-2"><strong>Zonal Dashboard:</strong></p>
                    <p>Username: zonal_admin</p>
                    <p>Password: zonal123</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;