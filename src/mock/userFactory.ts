import { User } from "../types"
import { v4 as uuid } from "uuid"
export const userFactory = (userType: User["type"], overrides: Partial<User> = {}): User => {
    return {
        uid: uuid(),
        email: "test@×××.×××",
        option: {
            restrict: false,
            tutorial: "pending"
        },
        type: userType,
        ...overrides
    }
}