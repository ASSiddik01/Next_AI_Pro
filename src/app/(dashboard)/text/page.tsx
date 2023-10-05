"use client";

import Heading from "@/components/Heading";
import { TextField, Button, Stack } from '@mui/material';
import { Send } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { formValues } from "@/constants/common";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChatCompletionRequestMessage } from "openai";
import axios from "axios";

const Text = () => {
  const router = useRouter()
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])


  const form = useForm<formValues>({
    defaultValues: {
      userInput: ""
    }
  })

  const { register, handleSubmit, formState } = form
  const { errors } = formState

  const onSubmit = async (data: formValues) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content: data.userInput
      }
      const newMessages = { ...messages, userMessage }

      const response = await axios.post(`/api/conversation`, {
        messages: newMessages
      });

      setMessages((current) => [...current, userMessage, response.data])

      form.reset()

      console.log(messages);

    } catch (error) {
      // console.log(error);
    } finally {
      router.refresh()
    }
  }
  return (
    <>
      <Heading title="Text Conversation" subtitle="Using OpenAI ChatGPT Model" />
      <div className="relative h-[90%]">
        <div className="output">
          <h2 className="text-white">Out put area</h2>
        </div>
        <div className="input absolute bottom-0 w-full p-2">
          <div className="relative mt-2 rounded-md shadow-sm">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <TextField error={!!errors.userInput} helperText={errors.userInput?.message} {...register('userInput', {
                required: 'Prompt is required'
              })} sx={{ paddingRight: "60px", "& fieldset": { border: 'none' }, }} className="block text-white w-full rounded-md border-0 py-1.5 pl-2 mr-30 ring-1 ring-inset ring-[#259FD9] bg-transparent placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#259FD9] sm:text-sm sm:leading-6" type="text" />
              <div className="absolute inset-y-0 right-1 flex items-center">
                <Button type="submit"><Send className="text-[#259FD9]" /></Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Text;
