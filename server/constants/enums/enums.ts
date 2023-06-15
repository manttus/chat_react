export enum FieldsEnum {
  Email = "Email",
  Password = "Password",
  Others = "Others",
  Nullable = "Nullable",
  OTP = "OTP",
}

export enum ResponseEnum {
  Created = "Created",
  Invalid_Cred = "Invalid Credentials",
  Token_Expired = "Token Expired",
  Invalid_Token = "Invalid Token",
  Server_Error = "Server Error",
  UnAuthorized = "UnAuthorized",
  Email_Sent = "Email Sent",
  Email_Already = "Email Already Sent",
  Invalid_OTP = "Invalid OTP",
  Email_Verified = "Email Verified",
}

export enum Status {
  PENDING = "Pending",
  VERIFIED = "Verified",
  EXPIRED = "Expired",
}
