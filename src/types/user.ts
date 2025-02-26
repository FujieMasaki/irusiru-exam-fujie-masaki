// 問題② 以下にAdminUser、GeneralUserという型定義があります。この2つの型を定義してそれぞれを使っていく場合の問題点を指摘し、改善案を提案してください。

// ユーザーのオプション設定
export type Option = {
  restrict: boolean;
  tutorial: "pending" | "fix";
};

// 共通のユーザーの型
export type BaseUser = {
  uid: string;
  email: string;
  option: Option;
};

// 管理者ユーザー
export type AdminUser = BaseUser & {
  type: "admin";
};

// 一般ユーザー
export type GeneralUser = BaseUser & {
  type: "general";
};

export type User = AdminUser | GeneralUser;
