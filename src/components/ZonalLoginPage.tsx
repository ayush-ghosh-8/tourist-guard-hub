import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, MapPin, RefreshCw } from "lucide-react";

interface ZonalLoginPageProps {
  onBack: () => void;
  onLogin: () => void;
}

const ZonalLoginPage = ({ onBack, onLogin }: ZonalLoginPageProps) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [captcha, setCaptcha] = useState({ input: "", challenge: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Generate simple image-based captcha
  const generateImageCaptcha = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    const shapes = ['circle', 'square', 'triangle', 'star'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    
    setCaptcha({ 
      challenge: `Select the ${color} ${shape}`, 
      input: "" 
    });
    return `${color}_${shape}`;
  };

  const [captchaAnswer] = useState(() => {
    const shapes = ['circle', 'square', 'triangle'];
    const colors = ['red', 'blue', 'green'];
    const selectedColor = colors[Math.floor(Math.random() * colors.length)];
    const selectedShape = shapes[Math.floor(Math.random() * shapes.length)];
    setCaptcha({ challenge: `Type: ${selectedColor} ${selectedShape}`, input: "" });
    return `${selectedColor} ${selectedShape}`;
  });

  const refreshCaptcha = () => {
    generateImageCaptcha();
  };

  const validCredentials = {
    username: "zonal_admin", 
    password: "zonal123"
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const { username, password } = credentials;

    if (username !== validCredentials.username || password !== validCredentials.password) {
      setError("Invalid username or password");
      setLoading(false);
      return;
    }

    if (captcha.input.toLowerCase() !== captchaAnswer.toLowerCase()) {
      setError("Incorrect captcha. Please try again.");
      refreshCaptcha();
      setLoading(false);
      return;
    }

    onLogin();
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/10 to-accent/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-secondary hover:text-secondary/80"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard Selection
          </Button>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="shadow-xl border-secondary/20">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-secondary" />
              </div>
              <CardTitle className="text-2xl font-bold text-secondary">
                District Police Dashboard
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Enter your district-level officer credentials
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Officer Username</Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter district officer username"
                    value={credentials.username}
                    onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Officer Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter officer password"
                    value={credentials.password}
                    onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="captcha">Security Verification</Label>
                  <div className="flex gap-2 items-center">
                    <div className="bg-muted/50 px-3 py-2 rounded border text-center font-medium flex-1">
                      {captcha.challenge}
                    </div>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="icon"
                      onClick={refreshCaptcha}
                    >
                      <RefreshCw className="w-4 h-4" />
                    </Button>
                  </div>
                  <Input
                    id="captcha"
                    type="text"
                    placeholder="Type the text exactly as shown"
                    value={captcha.input}
                    onChange={(e) => setCaptcha(prev => ({ ...prev, input: e.target.value }))}
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
                  className="w-full bg-secondary hover:bg-secondary/90"
                  disabled={loading}
                >
                  {loading ? "Authenticating..." : "Access District Dashboard"}
                </Button>
              </form>

              <div className="pt-4 border-t border-secondary/10">
                <div className="text-sm text-muted-foreground space-y-2">
                  <p className="font-medium">Demo Credentials:</p>
                  <div className="bg-muted/50 p-3 rounded space-y-1 text-xs">
                    <p><strong>Username:</strong> zonal_admin</p>
                    <p><strong>Password:</strong> zonal123</p>
                    <p className="pt-2 text-warning"><strong>Note:</strong> Type the captcha text exactly as shown</p>
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

export default ZonalLoginPage;