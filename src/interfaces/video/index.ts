import { CommentInterface } from 'interfaces/comment';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface VideoInterface {
  id?: string;
  title: string;
  description?: string;
  tags?: string;
  user_id?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  comment?: CommentInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    comment?: number;
  };
}

export interface VideoGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  tags?: string;
  user_id?: string;
  organization_id?: string;
}
