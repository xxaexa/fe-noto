import React, { ChangeEvent } from "react";

// Redux
export interface INoteRequest {
  title: string | undefined;
  description: string | undefined;
  _id?: string;
}

export interface INoteResponse {
  _id: string;
  user_id: string;
  title: string;
  description: string;
  __v: number;
}

export interface INotesApiResponse {
  status: string;
  message: string;
  data: INoteResponse[];
}


export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IRegisterRequest {
  email: string | undefined;
  username?: string | undefined;
  password: string | undefined;
}

export interface IUserRequest {
  _id?: number | undefined;
  email: string | undefined;
  username?: string | undefined;
  password: string | undefined;
}

export interface ILoginProps {
  email: string;
  password: string;
}

export interface User {
  _id: string;  
  username: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IUserResponse {
  status: string;
  message: string;
  data: {
    token: string;
    user: User;
  };
}


// Components

export interface BoxProps {
  id: string | undefined;
  title: string | undefined;
  content: string | undefined;
}

export interface TextProps {
  text: string | undefined;
}

export interface TextAreaProps {
  name: string;
  placeholder: string;
  value: string | undefined;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface InputProps {
  type: string;
  name: string;
  value: string | undefined;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface FormAuthState {
  _id?: string | number;
  email: string;
  username?: string;
  password: string;
}

export interface FormAuthProps {
  pageType: string;
  initialState: FormAuthState;
  handleDelete?: () => void;
  onSubmit: (values: FormAuthState) => void;
}

export interface FormNoteProps {
  pageType: string;
  initialState: INoteRequest;
  handleDelete?: () => void;
  onSubmit: (values: INoteRequest) => void;
}

export interface WrapperProps {
  children: React.ReactNode;
}

export interface NavigateButtonProps {
  icon: React.ReactNode;
  text: string;
  url: string;
}

export interface DeleteButtonProps {
  handleDelete: () => void;
}

export interface IconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
}

export interface IconSubmitProps {
  icon?: React.ReactNode;
  text: string;
}
