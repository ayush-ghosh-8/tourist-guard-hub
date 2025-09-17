import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, Shield, RefreshCw } from "lucide-react";

interface StateLoginPageProps {
  onBack: () => void;
  onLogin: () => void;
}

const StateLoginPage = ({ onBack, onLogin }: StateLoginPageProps) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [captcha, setCaptcha] = useState({ input: "", challenge: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Generate simple math captcha
  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const operations = ['+', '-', '*'];
    const op = operations[Math.floor(Math.random() * operations.length)];
    
    let answer;
    switch(op) {
      case '+': answer = a + b; break;
      case '-': answer = a - b; break;
      case '*': answer = a * b; break;
      default: answer = a + b;
    }
    
    setCaptcha({ 
      challenge: `${a} ${op} ${b} = ?`, 
      input: "" 
    });
    return answer.toString();
  };

  const [captchaAnswer] = useState(() => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ challenge: `${a} + ${b} = ?`, input: "" });
    return (a + b).toString();
  });

  const refreshCaptcha = () => {
    generateCaptcha();
  };

  const validCredentials = {
    username: "state_admin",
    password: "state123"
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

    if (captcha.input !== captchaAnswer) {
      setError("Incorrect captcha. Please try again.");
      refreshCaptcha();
      setLoading(false);
      return;
    }

    onLogin();
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-primary hover:text-primary/80"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard Selection
          </Button>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="shadow-xl border-primary/20">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-primary">
                State Police Dashboard
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Enter your state-level administrator credentials
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Admin Username</Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter state admin username"
                    value={credentials.username}
                    onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Admin Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter admin password"
                    value={credentials.password}
                    onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="captcha">Security Verification</Label>
                  <div className="flex gap-2 items-center">
                    <div className="bg-muted/50 px-3 py-2 rounded border text-center font-mono text-lg flex-1">
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
                    placeholder="Enter answer"
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
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Authenticating..." : "Access State Dashboard"}
                </Button>
              </form>

              <div className="pt-4 border-t border-primary/10">
                <div className="text-sm text-muted-foreground space-y-2">
                  <p className="font-medium">Demo Credentials:</p>
                  <div className="bg-muted/50 p-3 rounded space-y-1 text-xs">
                    <p><strong>Username:</strong> state_admin</p>
                    <p><strong>Password:</strong> state123</p>
                    <p className="pt-2 text-warning"><strong>Note:</strong> Solve the math captcha to proceed</p>
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

export default StateLoginPage;