// 問題② 以下にAdminUser、GeneralUserという型定義があります。この2つの型を定義してそれぞれを使っていく場合の問題点を指摘し、改善案を提案してください。

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