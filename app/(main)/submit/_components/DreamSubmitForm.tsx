"use client";

import { DreamFormValidator } from "@/lib/validators";
import { useForm } from "react-hook-form";
import { string, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn, yusei } from "@/lib/utils";
import { dreamSubmission } from "@/actions/dream";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useTransition } from "react";
import { Loader2 } from "lucide-react";

interface DreamSubmitFormProps {}

const DreamSubmitForm = ({}: DreamSubmitFormProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof DreamFormValidator>>({
    resolver: zodResolver(DreamFormValidator),
    defaultValues: {
      context: undefined,
      dream: "",
      title: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof DreamFormValidator>) => {
    startTransition(() => {
      dreamSubmission(values)
        .then((response) => {
          if (response.error) {
            toast.error(response.error);
          }

          if (response.data) {
            router.push(`/story/${response.data?.id}`);
          }
        })
        .catch(() => {
          toast.error("Something went wrong");
        });
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What would you like to call this story?</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  placeholder="The title will affect the story as well..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dream"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tell us about your dream</FormLabel>
              <FormControl>
                <Textarea
                  disabled={isPending}
                  rows={6}
                  placeholder="Describe what happened in the dream to the best of your abilities..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="context"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Provide some context{" "}
                <span className="text-zinc-600">(optional)</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  disabled={isPending}
                  rows={3}
                  className="resize-none"
                  placeholder="Provide some context on what may have led to this dream or whether or not this is a recurring dream..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <hr className="border-4 border-[#FFCACC]" />
        <div className="flex gap-2.5">
          <Button
            disabled={isPending}
            type="button"
            variant="outline"
            className={yusei.className}
          >
            Cancel
          </Button>
          <Button
            disabled={isPending}
            type="submit"
            className={cn("duration-300", yusei.className)}
          >
            {isPending ? (
              <p className="flex items-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating
                Story
              </p>
            ) : (
              "Generate Story"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default DreamSubmitForm;
