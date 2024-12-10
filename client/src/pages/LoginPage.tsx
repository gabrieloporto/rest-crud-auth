import { Link, useNavigate } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../context/AuthContext";
import { loginSchema } from "../schemas/auth";
import { Card } from "../components/ui/Card";
import { Message } from "../components/ui/Message";
import { Label } from "../components/ui/Label";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data: FieldValues) => signin(data);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <Card>
        {loginErrors?.map((error, i) => (
          <Message message={error} key={i} />
        ))}
        <h1 className="text-2xl font-bold">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            placeholder="youremail@domain.com"
            {...register("email", { required: true })}
          />
          <p className="text-red-500">{errors.email?.message?.toString()}</p>

          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            id="password"
            placeholder="Write your password"
            {...register("password", { required: true, minLength: 6 })}
          />
          <p className="text-red-500">
            {" "}
            {errors.password?.message?.toString()}
          </p>

          <Button children="Login" onClick={handleSubmit(onSubmit)} key={1} />
        </form>

        <p className="flex gap-x-2 justify-between">
          Don't have an account?
          <Link to="/register" className="text-sky-500">
            Sign up
          </Link>
        </p>
      </Card>
    </div>
  );
}
