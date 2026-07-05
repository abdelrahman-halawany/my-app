import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function SignupForm({ formData, handleChange, handleSubmit, ...props }) {
  return (
    <Card
      className="w-full  max-w-md rounded-3xl border border-indigo-100 bg-white/90 p-3 shadow-2xl shadow-indigo-100 backdrop-blur"
      {...props}
    >
      <CardHeader className="px-0">
        <CardTitle className="text-3xl font-bold text-slate-900 ">
          Create an account
        </CardTitle>
        <CardDescription className="text-slate-500">
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>

      <CardContent className="px-0">
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel className="text-slate-800" htmlFor="name">
                Full Name
              </FieldLabel>
              <Input
                className="h-9 rounded-xl border-slate-200 bg-white focus-visible:ring-violet-200"
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Field>

            <Field>
              <FieldLabel className="text-slate-800" htmlFor="email">
                Email
              </FieldLabel>
              <Input
                className="h-9 rounded-xl border-slate-200 bg-white focus-visible:ring-violet-200"
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <FieldDescription className="text-slate-500">
                We&apos;ll use this to contact you. We will not share your email
                with anyone else.
              </FieldDescription>
            </Field>

            <Field>
              <FieldLabel className="text-slate-800" htmlFor="mobile">
                Mobile
              </FieldLabel>
              <Input
                className="h-9 rounded-xl border-slate-200 bg-white focus-visible:ring-violet-200"
                id="mobile"
                name="mobile"
                type="tel"
                placeholder="01012345678"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </Field>

            <Field>
              <FieldLabel className="text-slate-800" htmlFor="gender">
                Gender
              </FieldLabel>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="h-9 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </Field>

            <Field>
              <FieldLabel className="text-slate-800" htmlFor="password">
                Password
              </FieldLabel>
              <Input
                className="h-9 rounded-xl border-slate-200 bg-white focus-visible:ring-violet-200"
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <FieldDescription className="text-slate-500">
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>

            <Button
              type="submit"
              className="h-9 rounded-xl from-indigo-600 to-violet-600 font-semibold text-white shadow-lg shadow-violet-200 hover:opacity-90"
            >
              Create Account
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}