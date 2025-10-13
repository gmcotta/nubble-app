export interface User {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  username: string;
  email: string;
  profileUrl: string;
  isOnline: boolean;
}

export interface UserAPI {
  id: number; //1
  first_name: string; //"Maria"
  last_name: string; //"Julia"
  username: string; //"mariajulia"
  email: string; //"mariajulia@coffstack.com"
  temp_token: string | null;
  remember_me_token: string | null;
  profile_url: string; //"https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/1-maria.png"
  is_online: boolean; //false
  temp_token_created_at: string | null;
  remember_me_token_created_at: string | null;
  full_name: string; //"Maria Julia"
}
