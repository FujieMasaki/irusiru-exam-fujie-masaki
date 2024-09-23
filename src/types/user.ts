export type AdminUser = {
    uid: string;
    email: string;
    option: {
      restrict: boolean;
      tutorial: 'pending' | 'fix'
    },
    type: 'admin'
  }
export type GeneralUser = {
    uid: string;
    email: string;
    option: {
      restrict: boolean;
      tutorial: 'pending' | 'fix'
    },
    type: 'general'
  }
  
export type User = AdminUser | GeneralUser;