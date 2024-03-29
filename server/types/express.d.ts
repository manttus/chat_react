import express, { Request, Response, NextFunction, Express } from "express";

export type RequestType = Request;
export type ResponseType = Response;
export type NextType = NextFunction;
export type AppType = Express;
export type ExpressType = typeof express;
