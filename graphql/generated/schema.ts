import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Address = {
  __typename?: 'Address';
  city: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  neighborhood: Scalars['String'];
  number: Scalars['Float'];
  postalCode: Scalars['String'];
  restaurant?: Maybe<Restaurant>;
  state: BrazilianStates;
  street: Scalars['String'];
  uf: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AddressWithRestaurant = {
  __typename?: 'AddressWithRestaurant';
  city: Scalars['String'];
  neighborhood: Scalars['String'];
  number: Scalars['Float'];
  postalCode: Scalars['String'];
  restaurant: Restaurant;
  restaurantId: Scalars['String'];
  street: Scalars['String'];
  uf: Scalars['String'];
};

export type AuthType = {
  __typename?: 'AuthType';
  loginToken: Scalars['String'];
  user: User;
};

export type Booking = {
  __typename?: 'Booking';
  bookingOrderCancellation?: Maybe<BookingOrderCancellation>;
  bookingStatus: BookingStatusPortuguese;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  createdByWaitList: Scalars['Boolean'];
  date: Scalars['String'];
  extras?: Maybe<Scalars['String']>;
  hasArrived: Scalars['Boolean'];
  hour: Scalars['String'];
  id: Scalars['ID'];
  isCancelledByRestaurant: Scalars['Boolean'];
  isCancelledByUser: Scalars['Boolean'];
  isConfirmed: Scalars['Boolean'];
  partyFor: Scalars['Float'];
  restaurant?: Maybe<Restaurant>;
  review?: Maybe<Review>;
  specialDate?: Maybe<SpecialDatePortuguese>;
  table?: Maybe<Array<Table>>;
  tableCategoryPreferences: Array<TableCategoryPortuguese>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  waitList?: Maybe<WaitList>;
};

export enum BookingCancelOrder {
  AmountCapturableUpdated = 'amount_capturable_updated',
  PaymentFailed = 'payment_failed',
  Processing = 'processing',
  Succeeded = 'succeeded'
}

export type BookingOngoingInput = {
  bookingId: Scalars['String'];
  code: Scalars['String'];
};

export type BookingOrderCancellation = {
  __typename?: 'BookingOrderCancellation';
  booking?: Maybe<Booking>;
  bookingCancelStatus: BookingCancelOrder;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  price: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export enum BookingStatusPortuguese {
  Aprovada = 'APROVADA',
  Cancelada = 'CANCELADA',
  Finalizada = 'FINALIZADA',
  Pendente = 'PENDENTE',
  Rejeitada = 'REJEITADA',
  Transcorrendo = 'TRANSCORRENDO'
}

export type BookingUserRestaurant = {
  __typename?: 'BookingUserRestaurant';
  booking: Booking;
  restaurant: Restaurant;
  user: User;
};

export enum BrazilianStates {
  Ac = 'AC',
  Al = 'AL',
  Am = 'AM',
  Ap = 'AP',
  Ba = 'BA',
  Ce = 'CE',
  Df = 'DF',
  Es = 'ES',
  Go = 'GO',
  Ma = 'MA',
  Mg = 'MG',
  Ms = 'MS',
  Mt = 'MT',
  Pa = 'PA',
  Pb = 'PB',
  Pe = 'PE',
  Pi = 'PI',
  Pr = 'PR',
  Rj = 'RJ',
  Rn = 'RN',
  Ro = 'RO',
  Rr = 'RR',
  Rs = 'RS',
  Sc = 'SC',
  Se = 'SE',
  Sp = 'SP',
  To = 'TO'
}

export type CancellationPolicy = {
  __typename?: 'CancellationPolicy';
  createdAt: Scalars['DateTime'];
  details: Scalars['String'];
  id: Scalars['ID'];
  limitDaysToCancel: Scalars['Float'];
  restaurant?: Maybe<Restaurant>;
  tax: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type CreateAddressInput = {
  city: Scalars['String'];
  neighborhood: Scalars['String'];
  number: Scalars['Float'];
  postalCode: Scalars['String'];
  restaurantId: Scalars['String'];
  street: Scalars['String'];
  uf: Scalars['String'];
};

export type CreateBookingInput = {
  date: Scalars['String'];
  extras?: InputMaybe<Scalars['String']>;
  hour: Scalars['String'];
  partyFor: Scalars['Float'];
  restaurantId: Scalars['String'];
  specialDate?: InputMaybe<Scalars['String']>;
  tableCategoryPreferences?: InputMaybe<Array<TableCategoryPortuguese>>;
};

export type CreateEmployeeInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  mainPhone?: InputMaybe<Scalars['String']>;
  restaurantId: Scalars['String'];
  secondaryPhone?: InputMaybe<Scalars['String']>;
};

export type CreateManagerInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  mainPhone?: InputMaybe<Scalars['String']>;
  restaurantId: Scalars['String'];
  secondaryPhone?: InputMaybe<Scalars['String']>;
};

export type CreateMenuInput = {
  restaurantId: Scalars['String'];
  title: Scalars['String'];
};

export type CreateMenuItemInput = {
  category: Scalars['String'];
  description: Scalars['String'];
  menuId: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  restaurantId: Scalars['String'];
};

export type CreateOwnerInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  mainPhone?: InputMaybe<Scalars['String']>;
  secondaryPhone?: InputMaybe<Scalars['String']>;
};

export type CreatePolicyInput = {
  details: Scalars['String'];
  limitDaysToCancel: Scalars['Float'];
  restaurantId: Scalars['String'];
  tax: Scalars['Float'];
};

export type CreateRestaurantInput = {
  capacity: Scalars['Float'];
  category: RestaurantCategory;
  cnpj: Scalars['String'];
  email: Scalars['String'];
  end_hour: Scalars['String'];
  isParking: Scalars['Boolean'];
  isWifi: Scalars['Boolean'];
  mainPhone: Scalars['String'];
  maxGuestQuantity: Scalars['Float'];
  name: Scalars['String'];
  secondaryPhone?: InputMaybe<Scalars['String']>;
  start_hour: Scalars['String'];
  weekend_end_hour: Scalars['String'];
  weekend_start_hour: Scalars['String'];
};

export type CreateReviewInput = {
  bookingId: Scalars['String'];
  comment: Scalars['String'];
  rating: Scalars['Float'];
};

export type CreateTableInput = {
  category: Scalars['String'];
  restaurantId: Scalars['String'];
  seats: Scalars['Float'];
  status?: InputMaybe<Scalars['String']>;
  tableNumber?: InputMaybe<Scalars['Float']>;
};

export type CreateUserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  mainPhone: Scalars['String'];
  secondaryPhone?: InputMaybe<Scalars['String']>;
};

export enum DressCodePortuguese {
  Business = 'BUSINESS',
  Casual = 'CASUAL',
  Formal = 'FORMAL',
  Resort = 'RESORT'
}

export type Favorite = {
  __typename?: 'Favorite';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  restaurant?: Maybe<Restaurant>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
};

export type GoogleAuthInput = {
  token: Scalars['String'];
};

export type Menu = {
  __typename?: 'Menu';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  menuItem?: Maybe<Array<MenuItem>>;
  restaurant?: Maybe<Restaurant>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type MenuItem = {
  __typename?: 'MenuItem';
  category: MenuItemCategoryPortuguese;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  key: Scalars['String'];
  menu?: Maybe<Menu>;
  name: Scalars['String'];
  price: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export enum MenuItemCategoryPortuguese {
  BebidaAlcoolica = 'BEBIDA_ALCOOLICA',
  BebidaSemAlcool = 'BEBIDA_SEM_ALCOOL',
  Entrada = 'ENTRADA',
  Pratoprincipal = 'PRATOPRINCIPAL',
  Sobremesa = 'SOBREMESA'
}

export type MenuMenuItems = {
  __typename?: 'MenuMenuItems';
  menu: Menu;
  menuItem: Array<MenuItem>;
};

export type Mutation = {
  __typename?: 'Mutation';
  approveBooking: BookingUserRestaurant;
  assignTable: Table;
  bookingOnGoing: Booking;
  createAddress: AddressWithRestaurant;
  createBooking: BookingUserRestaurant;
  createBookingByWaitList: BookingUserRestaurant;
  createEmployee: User;
  createManager: User;
  createMenu: Menu;
  createMenuItem: MenuItem;
  createMultipleTables: Array<Table>;
  createOwner: User;
  createPolicy: CancellationPolicy;
  createRestaurant: Restaurant;
  createReview: Review;
  createTable: Table;
  createUser: User;
  createWaitListForRestaurant: Scalars['Boolean'];
  createaFavorite: Favorite;
  deleteEmployee: Scalars['Boolean'];
  deleteFavorite: Scalars['Boolean'];
  deleteManager: Scalars['Boolean'];
  deleteMenu: Scalars['Boolean'];
  deleteMenuItem: Scalars['Boolean'];
  deleteTable: Scalars['Boolean'];
  deleteTablesInBulk: Scalars['Boolean'];
  finishBooking: Booking;
  rejectBooking: BookingUserRestaurant;
  signin: User;
  signinWithGoogle: AuthType;
  updateAddress: Address;
  updateEmployee: User;
  updateManager: User;
  updateMenu: Menu;
  updateMenuItem: MenuItem;
  updatePolicy: CancellationPolicy;
  updateRestaurant: Restaurant;
  updateUser: User;
  validateUser: AuthType;
};


export type MutationApproveBookingArgs = {
  bookingId: Scalars['String'];
  restaurantId: Scalars['String'];
};


export type MutationAssignTableArgs = {
  bookingId: Scalars['String'];
  tableId: Scalars['String'];
};


export type MutationBookingOnGoingArgs = {
  data: BookingOngoingInput;
};


export type MutationCreateAddressArgs = {
  data: CreateAddressInput;
};


export type MutationCreateBookingArgs = {
  data: CreateBookingInput;
};


export type MutationCreateBookingByWaitListArgs = {
  bookingInput: CreateBookingInput;
};


export type MutationCreateEmployeeArgs = {
  data: CreateEmployeeInput;
};


export type MutationCreateManagerArgs = {
  data: CreateManagerInput;
};


export type MutationCreateMenuArgs = {
  data: CreateMenuInput;
};


export type MutationCreateMenuItemArgs = {
  data: CreateMenuItemInput;
};


export type MutationCreateMultipleTablesArgs = {
  data: CreateTableInput;
  initialTableNumber: Scalars['Float'];
  quantity: Scalars['Float'];
};


export type MutationCreateOwnerArgs = {
  data: CreateOwnerInput;
};


export type MutationCreatePolicyArgs = {
  data: CreatePolicyInput;
};


export type MutationCreateRestaurantArgs = {
  data: CreateRestaurantInput;
};


export type MutationCreateReviewArgs = {
  data: CreateReviewInput;
};


export type MutationCreateTableArgs = {
  data: CreateTableInput;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationCreateWaitListForRestaurantArgs = {
  restaurantId: Scalars['String'];
};


export type MutationCreateaFavoriteArgs = {
  restaurantId: Scalars['String'];
};


export type MutationDeleteEmployeeArgs = {
  employeeId: Scalars['String'];
  restaurantId: Scalars['String'];
};


export type MutationDeleteFavoriteArgs = {
  favoriteId: Scalars['String'];
};


export type MutationDeleteManagerArgs = {
  managerId: Scalars['String'];
  restaurantId: Scalars['String'];
};


export type MutationDeleteMenuArgs = {
  id: Scalars['String'];
  restaurantId: Scalars['String'];
};


export type MutationDeleteMenuItemArgs = {
  id: Scalars['String'];
  restaurantId: Scalars['String'];
};


export type MutationDeleteTableArgs = {
  tableId: Scalars['String'];
};


export type MutationDeleteTablesInBulkArgs = {
  tableIds: Array<Scalars['String']>;
};


export type MutationFinishBookingArgs = {
  bookingId: Scalars['String'];
  restaurantId: Scalars['String'];
};


export type MutationRejectBookingArgs = {
  bookingId: Scalars['String'];
  restaurantId: Scalars['String'];
};


export type MutationSigninArgs = {
  data: SigninInput;
};


export type MutationSigninWithGoogleArgs = {
  data: GoogleAuthInput;
};


export type MutationUpdateAddressArgs = {
  data: UpdateAddressInput;
};


export type MutationUpdateEmployeeArgs = {
  data: UpdateEmployeeInput;
};


export type MutationUpdateManagerArgs = {
  data: UpdateManagerInput;
};


export type MutationUpdateMenuArgs = {
  data: UpdateMenuInput;
};


export type MutationUpdateMenuItemArgs = {
  data: UpdateMenuItemInput;
};


export type MutationUpdatePolicyArgs = {
  data: UpdatePolicyInput;
};


export type MutationUpdateRestaurantArgs = {
  data: UpdateRestaurantInput;
  restaurantId: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  data: UpdateUserInput;
};


export type MutationValidateUserArgs = {
  data: ValidateUserInput;
};

export enum PaymentTypesPortuguese {
  Amex = 'AMEX',
  Discover = 'DISCOVER',
  Mastercard = 'MASTERCARD',
  Money = 'MONEY',
  Visa = 'VISA'
}

export type Profile = {
  __typename?: 'Profile';
  avatarUrl?: Maybe<Scalars['String']>;
  avatarUrlKey?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
};

export type Query = {
  __typename?: 'Query';
  createAccountLink: StripeCreateAccountLink;
  createLoginLink: StripeCreateLoginLink;
  findAllReviews: Array<Review>;
  findAllReviewsByRestaurant: Array<Review>;
  findPolicyByRestaurant: CancellationPolicy;
  getCurrentUser: User;
  getCurrentUserBookings: Array<Booking>;
  getFavoritesByUser: Array<Favorite>;
  getMenu: Menu;
  getMenuItem: MenuItem;
  getMenuWithItems: MenuMenuItems;
  getRestaurantBookings: Array<Booking>;
  getRestaurantBookingsByStatus: Array<Booking>;
  getRestaurantBookingsByUser: Array<Booking>;
  getRestaurantById: Restaurant;
  getUsersFromRestaurant: UsersRestaurant;
  getUsersFromRole: UsersRestaurant;
  getWaitListWithBookings: WaitList;
  listAllRestaurants: RestaurantsAndCount;
  listEmployeesByRestaurant: Array<User>;
  listManagersByRestaurant: Array<User>;
  tablesByRestaurant: Array<Table>;
};


export type QueryCreateAccountLinkArgs = {
  id: Scalars['String'];
};


export type QueryCreateLoginLinkArgs = {
  id: Scalars['String'];
};


export type QueryFindAllReviewsByRestaurantArgs = {
  restaurantId: Scalars['String'];
};


export type QueryFindPolicyByRestaurantArgs = {
  restaurantId: Scalars['String'];
};


export type QueryGetMenuArgs = {
  menuId: Scalars['String'];
};


export type QueryGetMenuItemArgs = {
  menuItemId: Scalars['String'];
};


export type QueryGetMenuWithItemsArgs = {
  menuId: Scalars['String'];
};


export type QueryGetRestaurantBookingsArgs = {
  restaurantId: Scalars['String'];
};


export type QueryGetRestaurantBookingsByStatusArgs = {
  restaurantId: Scalars['String'];
  status: Scalars['String'];
};


export type QueryGetRestaurantByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetUsersFromRestaurantArgs = {
  restaurantId: Scalars['String'];
};


export type QueryGetUsersFromRoleArgs = {
  restaurantId: Scalars['String'];
  roles: Array<UserRole>;
};


export type QueryGetWaitListWithBookingsArgs = {
  restaurantId: Scalars['String'];
};


export type QueryListAllRestaurantsArgs = {
  relations: Array<Scalars['String']>;
};


export type QueryListEmployeesByRestaurantArgs = {
  restaurantId: Scalars['String'];
};


export type QueryListManagersByRestaurantArgs = {
  restaurantId: Scalars['String'];
};


export type QueryTablesByRestaurantArgs = {
  restaurantId: Scalars['String'];
};

export type Restaurant = {
  __typename?: 'Restaurant';
  acceptedPaymentMethods: Array<PaymentTypesPortuguese>;
  address?: Maybe<Address>;
  booking?: Maybe<Array<Booking>>;
  brunch_end_hour: Scalars['String'];
  brunch_end_hour_weekend: Scalars['String'];
  brunch_start_hour: Scalars['String'];
  brunch_start_hour_weekend: Scalars['String'];
  cancellationPolicy?: Maybe<CancellationPolicy>;
  capacity: Scalars['Float'];
  category: RestaurantCategory;
  cnpj: Scalars['String'];
  createdAt: Scalars['DateTime'];
  dinner_end_hour: Scalars['String'];
  dinner_end_hour_weekend: Scalars['String'];
  dinner_start_hour: Scalars['String'];
  dinner_start_hour_weekend: Scalars['String'];
  dressCode: DressCodePortuguese;
  email: Scalars['String'];
  end_hour: Scalars['String'];
  favorite?: Maybe<Array<Favorite>>;
  id: Scalars['ID'];
  isAvailableForBrunch: Scalars['Boolean'];
  isAvailableForDinner: Scalars['Boolean'];
  isAvailableForLunch: Scalars['Boolean'];
  isOpen: Scalars['Boolean'];
  isParking: Scalars['Boolean'];
  isWifi: Scalars['Boolean'];
  lunch_end_hour: Scalars['String'];
  lunch_end_hour_weekend: Scalars['String'];
  lunch_start_hour: Scalars['String'];
  lunch_start_hour_weekend: Scalars['String'];
  mainPhone: Scalars['String'];
  maxGuestQuantity: Scalars['Float'];
  menu?: Maybe<Array<Menu>>;
  name: Scalars['String'];
  restaurantImage?: Maybe<Array<RestaurantImage>>;
  secondaryPhone?: Maybe<Scalars['String']>;
  start_hour: Scalars['String'];
  stripeAccountId?: Maybe<Scalars['String']>;
  thumbKey: Scalars['String'];
  thumbUrl: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<Array<User>>;
  waitlist?: Maybe<WaitList>;
  weekend_end_hour: Scalars['String'];
  weekend_start_hour: Scalars['String'];
};

export enum RestaurantCategory {
  Argentino = 'ARGENTINO',
  Autoral = 'AUTORAL',
  Bistro = 'BISTRO',
  Brasileiro = 'BRASILEIRO',
  Buffet = 'BUFFET',
  Cafeteria = 'CAFETERIA',
  Cantina = 'CANTINA',
  Chines = 'CHINES',
  Classico = 'CLASSICO',
  Comfort = 'COMFORT',
  Espanhol = 'ESPANHOL',
  Fastfood = 'FASTFOOD',
  Frutosdomar = 'FRUTOSDOMAR',
  Grill = 'GRILL',
  Hamburgueria = 'HAMBURGUERIA',
  Ingles = 'INGLES',
  Italiano = 'ITALIANO',
  Jantarfino = 'JANTARFINO',
  Japonesa = 'JAPONESA',
  Mexicano = 'MEXICANO',
  Pizzaria = 'PIZZARIA',
  Popular = 'POPULAR',
  Popup = 'POPUP',
  Portugues = 'PORTUGUES',
  Pub = 'PUB',
  Redesderestaurante = 'REDESDERESTAURANTE',
  Steakhouse = 'STEAKHOUSE'
}

export type RestaurantImage = {
  __typename?: 'RestaurantImage';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  key: Scalars['String'];
  restaurant?: Maybe<Restaurant>;
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

export type RestaurantsAndCount = {
  __typename?: 'RestaurantsAndCount';
  count: Scalars['Float'];
  restaurants: Array<Restaurant>;
};

export type Review = {
  __typename?: 'Review';
  booking?: Maybe<Booking>;
  comment: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  rating: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
};

export type SigninInput = {
  email: Scalars['String'];
};

export enum SpecialDatePortuguese {
  Aniversario = 'ANIVERSARIO',
  Celebracao = 'CELEBRACAO',
  Encontro = 'ENCONTRO',
  RefeicaoNegocios = 'REFEICAO_NEGOCIOS'
}

export type StripeCreateAccountLink = {
  __typename?: 'StripeCreateAccountLink';
  object: Scalars['String'];
  url: Scalars['String'];
};

export type StripeCreateLoginLink = {
  __typename?: 'StripeCreateLoginLink';
  object: Scalars['String'];
  url: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  bookingAdded: BookingUserRestaurant;
  bookingApproved: BookingUserRestaurant;
  bookingReject: BookingUserRestaurant;
  waitListAdded: BookingUserRestaurant;
};


export type SubscriptionBookingAddedArgs = {
  restaurantId: Scalars['String'];
};


export type SubscriptionBookingApprovedArgs = {
  restaurantId: Scalars['String'];
};


export type SubscriptionBookingRejectArgs = {
  restaurantId: Scalars['String'];
};


export type SubscriptionWaitListAddedArgs = {
  restaurantId: Scalars['String'];
};

export type Table = {
  __typename?: 'Table';
  booking?: Maybe<Booking>;
  category: TableCategoryPortuguese;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  restaurant?: Maybe<Restaurant>;
  seats: Scalars['Float'];
  status: TableStatusPortuguese;
  tableNumber: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export enum TableCategoryPortuguese {
  Bar = 'BAR',
  Externa = 'EXTERNA',
  Interna = 'INTERNA'
}

export enum TableStatusPortuguese {
  Disponivel = 'DISPONIVEL',
  Indisponivel = 'INDISPONIVEL',
  Ocupada = 'OCUPADA'
}

export type UpdateAddressInput = {
  city?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  neighborhood?: InputMaybe<Scalars['String']>;
  number?: InputMaybe<Scalars['Float']>;
  postalCode?: InputMaybe<Scalars['String']>;
  restaurantId: Scalars['String'];
  street?: InputMaybe<Scalars['String']>;
  uf?: InputMaybe<Scalars['String']>;
};

export type UpdateEmployeeInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  lastName?: InputMaybe<Scalars['String']>;
  mainPhone?: InputMaybe<Scalars['String']>;
  restaurantId: Scalars['String'];
  secondaryPhone?: InputMaybe<Scalars['String']>;
};

export type UpdateManagerInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  lastName?: InputMaybe<Scalars['String']>;
  mainPhone?: InputMaybe<Scalars['String']>;
  restaurantId: Scalars['String'];
  secondaryPhone?: InputMaybe<Scalars['String']>;
};

export type UpdateMenuInput = {
  id: Scalars['String'];
  restaurantId: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateMenuItemInput = {
  category?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  restaurantId: Scalars['String'];
};

export type UpdatePolicyInput = {
  details?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  limitDaysToCancel?: InputMaybe<Scalars['Float']>;
  restaurantId: Scalars['String'];
  tax?: InputMaybe<Scalars['Float']>;
};

export type UpdateRestaurantInput = {
  brunch_end_hour?: InputMaybe<Scalars['String']>;
  brunch_end_hour_weekend?: InputMaybe<Scalars['String']>;
  brunch_start_hour?: InputMaybe<Scalars['String']>;
  brunch_start_hour_weekend?: InputMaybe<Scalars['String']>;
  capacity?: InputMaybe<Scalars['Float']>;
  category?: InputMaybe<RestaurantCategory>;
  cnpj?: InputMaybe<Scalars['String']>;
  dinner_end_hour?: InputMaybe<Scalars['String']>;
  dinner_end_hour_weekend?: InputMaybe<Scalars['String']>;
  dinner_start_hour?: InputMaybe<Scalars['String']>;
  dinner_start_hour_weekend?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  end_hour?: InputMaybe<Scalars['String']>;
  isAvailableForBrunch?: InputMaybe<Scalars['Boolean']>;
  isAvailableForDinner?: InputMaybe<Scalars['Boolean']>;
  isAvailableForLunch?: InputMaybe<Scalars['Boolean']>;
  isOpen?: InputMaybe<Scalars['Boolean']>;
  isParking?: InputMaybe<Scalars['Boolean']>;
  isWifi?: InputMaybe<Scalars['Boolean']>;
  lunch_end_hour?: InputMaybe<Scalars['String']>;
  lunch_end_hour_weekend?: InputMaybe<Scalars['String']>;
  lunch_start_hour?: InputMaybe<Scalars['String']>;
  lunch_start_hour_weekend?: InputMaybe<Scalars['String']>;
  mainPhone?: InputMaybe<Scalars['String']>;
  maxGuestQuantity?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  secondaryPhone?: InputMaybe<Scalars['String']>;
  start_hour?: InputMaybe<Scalars['String']>;
  weekend_end_hour?: InputMaybe<Scalars['String']>;
  weekend_start_hour?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  mainPhone?: InputMaybe<Scalars['String']>;
  secondaryPhone?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  booking?: Maybe<Array<Booking>>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  expirationLoginToken?: Maybe<Scalars['String']>;
  favorite?: Maybe<Array<Favorite>>;
  firstName: Scalars['String'];
  id: Scalars['ID'];
  isRegisteredWithGoogle: Scalars['Boolean'];
  lastAccess: Scalars['DateTime'];
  lastName: Scalars['String'];
  loginToken?: Maybe<Scalars['String']>;
  mainPhone: Scalars['String'];
  profile?: Maybe<Profile>;
  restaurant?: Maybe<Array<Restaurant>>;
  review?: Maybe<Array<Review>>;
  role: UserRole;
  secondaryPhone: Scalars['String'];
  stripeCustomerId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export enum UserRole {
  Employee = 'EMPLOYEE',
  Manager = 'MANAGER',
  Owner = 'OWNER',
  User = 'USER'
}

export type UsersRestaurant = {
  __typename?: 'UsersRestaurant';
  count: Scalars['Float'];
  users: Array<User>;
};

export type ValidateUserInput = {
  loginToken: Scalars['String'];
};

export type WaitList = {
  __typename?: 'WaitList';
  booking?: Maybe<Array<Booking>>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  restaurant?: Maybe<Restaurant>;
  updatedAt: Scalars['DateTime'];
};

export type CreateUserMutationVariables = Exact<{
  data: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, mainPhone: string, secondaryPhone: string } };


export const CreateUserDocument = gql`
    mutation CreateUser($data: CreateUserInput!) {
  createUser(data: $data) {
    id
    firstName
    lastName
    email
    mainPhone
    secondaryPhone
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;