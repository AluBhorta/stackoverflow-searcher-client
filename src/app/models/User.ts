export type ShallowUser = {
  user_id: number;
  reputation: number;
  display_name: string;
  profile_image: string;
  link: string;
  user_type: UserType;
};

export type UserType =
  | 'unregistered'
  | 'registered'
  | 'moderator'
  | 'team_admin'
  | 'does_not_exist';
