import { action } from 'easy-peasy';
import { IUserModel } from './user.types';

export const UserModel: IUserModel = {
    fullName: 'Adam Smith',
    email: 'adam.smith@yourdomain.com',

    setFullName: action((state, payload) => {
        state.fullName = payload;
    }),
    setEmail: action((state, payload) => {
        state.email = payload;
    }),
};
