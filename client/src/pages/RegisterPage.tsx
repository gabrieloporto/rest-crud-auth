import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { registerSchema } from "../schemas/auth";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Card } from "../components/ui/Card";
import { Message } from "../components/ui/Message";
import { Label } from "../components/ui/Label";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

export default function Register() {
  const { signup, errors: registerErrors, isAuthenticated } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (value: FieldValues) => {
    await signup(value);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated, navigate]);

  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <Card>
        {registerErrors.map((error, i) => (
          <Message message={error} key={i} />
        ))}
        <h1 className="text-3xl font-bold mb-3">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="username">Username:</Label>
          <Input
            type="text"
            placeholder="Write your name"
            {...register("username")}
            autoFocus
          />
          {errors.username?.message && (
            <p className="text-red-500">
              {errors.username?.message?.toString()}
            </p>
          )}

          <Label htmlFor="email">Email:</Label>
          <Input placeholder="youremail@domain.com" {...register("email")} />
          {errors.email?.message && (
            <p className="text-red-500">{errors.email?.message.toString()}</p>
          )}

          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            placeholder="********"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="text-red-500">
              {errors.password?.message.toString()}
            </p>
          )}

          <Label htmlFor="confirmPassword">Confirm Password:</Label>
          <Input
            type="password"
            placeholder="********"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <p className="text-red-500">
              {errors.confirmPassword?.message.toString()}
            </p>
          )}
          <Button
            children="Register"
            onClick={handleSubmit(onSubmit)}
            key={"register"}
          />
        </form>
        <p className="flex justify-between items-center">
          Already Have an Account?
          <Link className="text-sky-500" to="/login">
            Login
          </Link>
        </p>
      </Card>
    </div>
  );
}
