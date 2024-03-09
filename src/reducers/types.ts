export interface RootState {
    auth: AuthState;
    message: MessageState;
  }
  
  export interface AuthState {
    isLoggedIn: boolean;
    user: any; // Définissez le type approprié pour user
  }
  
  export interface MessageState {
    // Définissez la structure de votre état message
  }