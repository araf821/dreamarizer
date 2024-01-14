"use client";

import { DreamFormValidator } from "@/lib/validators";
import { useForm } from "react-hook-form";
import { z } from "zod";
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

interface DreamSubmitFormProps {}

const DreamSubmitForm = ({}: DreamSubmitFormProps) => {
  const form = useForm<z.infer<typeof DreamFormValidator>>({
    resolver: zodResolver(DreamFormValidator),
    defaultValues: {
      context: "",
      dream: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof DreamFormValidator>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 pb-4 pt-2"
      >
        <FormField
          control={form.control}
          name="dream"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tell us about your dream</FormLabel>
              <FormControl>
                <Textarea
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
          <Button type="button" variant="outline" className={yusei.className}>
            Cancel
          </Button>
          <Button type="submit" className={cn("duration-300", yusei.className)}>
            Generate Story
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default DreamSubmitForm;
