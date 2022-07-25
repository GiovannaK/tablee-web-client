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
  findAllReviewsByRestaurant: ReviewsAverage;
  findPolicyByRestaurant: CancellationPolicy;
  getAllRestaurantMenusWithItems: Array<Menu>;
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
  getRestaurantByIdWithAllRelations: Restaurant;
  getUsersFromRestaurant: UsersRestaurant;
  getUsersFromRole: UsersRestaurant;
  getWaitListWithBookings: WaitList;
  listAllRestaurants: Array<Restaurant>;
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


export type QueryGetAllRestaurantMenusWithItemsArgs = {
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


export type QueryGetRestaurantByIdWithAllRelationsArgs = {
  id: Scalars['String'];
  relations: Array<Scalars['String']>;
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
  skip: Scalars['Float'];
  take: Scalars['Float'];
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

export type ReviewsAverage = {
  __typename?: 'ReviewsAverage';
  average: Scalars['Float'];
  reviews: Array<Review>;
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
  secondaryPhone?: Maybe<Scalars['String']>;
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


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, mainPhone: string, secondaryPhone?: string | null } };

export type SigninMutationVariables = Exact<{
  data: SigninInput;
}>;


export type SigninMutation = { __typename?: 'Mutation', signin: { __typename?: 'User', loginToken?: string | null } };

export type ValidateMutationVariables = Exact<{
  data: ValidateUserInput;
}>;


export type ValidateMutation = { __typename?: 'Mutation', validateUser: { __typename?: 'AuthType', loginToken: string, user: { __typename?: 'User', firstName: string, lastName: string, email: string, role: UserRole } } };

export type ListAllRestaurantsQueryVariables = Exact<{
  skip: Scalars['Float'];
  take: Scalars['Float'];
}>;


export type ListAllRestaurantsQuery = { __typename?: 'Query', listAllRestaurants: Array<{ __typename?: 'Restaurant', id: string, category: RestaurantCategory, isOpen: boolean, thumbUrl: string, name: string, address?: { __typename?: 'Address', city: string } | null }> };

export type GetAllRestaurantMenusWithItemsQueryVariables = Exact<{
  restaurantId: Scalars['String'];
}>;


export type GetAllRestaurantMenusWithItemsQuery = { __typename?: 'Query', getAllRestaurantMenusWithItems: Array<{ __typename?: 'Menu', id: string, title: string, menuItem?: Array<{ __typename?: 'MenuItem', id: string, category: MenuItemCategoryPortuguese, name: string, description: string, url: string, price: number }> | null }> };

export type GetRestaurantByIdWithAllRelationsQueryVariables = Exact<{
  id: Scalars['String'];
  relations: Array<Scalars['String']> | Scalars['String'];
}>;


export type GetRestaurantByIdWithAllRelationsQuery = { __typename?: 'Query', getRestaurantByIdWithAllRelations: { __typename?: 'Restaurant', id: string, category: RestaurantCategory, dressCode: DressCodePortuguese, acceptedPaymentMethods: Array<PaymentTypesPortuguese>, name: string, cnpj: string, mainPhone: string, secondaryPhone?: string | null, email: string, isWifi: boolean, isParking: boolean, isOpen: boolean, start_hour: string, end_hour: string, weekend_start_hour: string, weekend_end_hour: string, lunch_start_hour: string, lunch_end_hour: string, lunch_start_hour_weekend: string, lunch_end_hour_weekend: string, brunch_end_hour: string, brunch_start_hour: string, brunch_end_hour_weekend: string, brunch_start_hour_weekend: string, dinner_end_hour: string, dinner_start_hour: string, dinner_end_hour_weekend: string, dinner_start_hour_weekend: string, capacity: number, maxGuestQuantity: number, thumbUrl: string, cancellationPolicy?: { __typename?: 'CancellationPolicy', id: string, tax: number, details: string, limitDaysToCancel: number } | null, restaurantImage?: Array<{ __typename?: 'RestaurantImage', url: string }> | null, address?: { __typename?: 'Address', id: string, state: BrazilianStates, city: string, uf: string, postalCode: string, neighborhood: string, street: string, number: number } | null } };

export type FindReviewsByRestaurantByIdQueryVariables = Exact<{
  restaurantId: Scalars['String'];
}>;


export type FindReviewsByRestaurantByIdQuery = { __typename?: 'Query', findAllReviewsByRestaurant: { __typename?: 'ReviewsAverage', average: number, reviews: Array<{ __typename?: 'Review', id: string, rating: number, comment: string, user?: { __typename?: 'User', firstName: string, lastName: string } | null }> } };


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
export const SigninDocument = gql`
    mutation Signin($data: SigninInput!) {
  signin(data: $data) {
    loginToken
  }
}
    `;
export type SigninMutationFn = Apollo.MutationFunction<SigninMutation, SigninMutationVariables>;

/**
 * __useSigninMutation__
 *
 * To run a mutation, you first call `useSigninMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSigninMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signinMutation, { data, loading, error }] = useSigninMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSigninMutation(baseOptions?: Apollo.MutationHookOptions<SigninMutation, SigninMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SigninMutation, SigninMutationVariables>(SigninDocument, options);
      }
export type SigninMutationHookResult = ReturnType<typeof useSigninMutation>;
export type SigninMutationResult = Apollo.MutationResult<SigninMutation>;
export type SigninMutationOptions = Apollo.BaseMutationOptions<SigninMutation, SigninMutationVariables>;
export const ValidateDocument = gql`
    mutation Validate($data: ValidateUserInput!) {
  validateUser(data: $data) {
    loginToken
    user {
      firstName
      lastName
      email
      role
    }
  }
}
    `;
export type ValidateMutationFn = Apollo.MutationFunction<ValidateMutation, ValidateMutationVariables>;

/**
 * __useValidateMutation__
 *
 * To run a mutation, you first call `useValidateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useValidateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [validateMutation, { data, loading, error }] = useValidateMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useValidateMutation(baseOptions?: Apollo.MutationHookOptions<ValidateMutation, ValidateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ValidateMutation, ValidateMutationVariables>(ValidateDocument, options);
      }
export type ValidateMutationHookResult = ReturnType<typeof useValidateMutation>;
export type ValidateMutationResult = Apollo.MutationResult<ValidateMutation>;
export type ValidateMutationOptions = Apollo.BaseMutationOptions<ValidateMutation, ValidateMutationVariables>;
export const ListAllRestaurantsDocument = gql`
    query ListAllRestaurants($skip: Float!, $take: Float!) {
  listAllRestaurants(skip: $skip, take: $take) {
    id
    category
    isOpen
    thumbUrl
    name
    address {
      city
    }
  }
}
    `;

/**
 * __useListAllRestaurantsQuery__
 *
 * To run a query within a React component, call `useListAllRestaurantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAllRestaurantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListAllRestaurantsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useListAllRestaurantsQuery(baseOptions: Apollo.QueryHookOptions<ListAllRestaurantsQuery, ListAllRestaurantsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListAllRestaurantsQuery, ListAllRestaurantsQueryVariables>(ListAllRestaurantsDocument, options);
      }
export function useListAllRestaurantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListAllRestaurantsQuery, ListAllRestaurantsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListAllRestaurantsQuery, ListAllRestaurantsQueryVariables>(ListAllRestaurantsDocument, options);
        }
export type ListAllRestaurantsQueryHookResult = ReturnType<typeof useListAllRestaurantsQuery>;
export type ListAllRestaurantsLazyQueryHookResult = ReturnType<typeof useListAllRestaurantsLazyQuery>;
export type ListAllRestaurantsQueryResult = Apollo.QueryResult<ListAllRestaurantsQuery, ListAllRestaurantsQueryVariables>;
export const GetAllRestaurantMenusWithItemsDocument = gql`
    query GetAllRestaurantMenusWithItems($restaurantId: String!) {
  getAllRestaurantMenusWithItems(restaurantId: $restaurantId) {
    id
    title
    menuItem {
      id
      category
      name
      description
      url
      price
    }
  }
}
    `;

/**
 * __useGetAllRestaurantMenusWithItemsQuery__
 *
 * To run a query within a React component, call `useGetAllRestaurantMenusWithItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllRestaurantMenusWithItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllRestaurantMenusWithItemsQuery({
 *   variables: {
 *      restaurantId: // value for 'restaurantId'
 *   },
 * });
 */
export function useGetAllRestaurantMenusWithItemsQuery(baseOptions: Apollo.QueryHookOptions<GetAllRestaurantMenusWithItemsQuery, GetAllRestaurantMenusWithItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllRestaurantMenusWithItemsQuery, GetAllRestaurantMenusWithItemsQueryVariables>(GetAllRestaurantMenusWithItemsDocument, options);
      }
export function useGetAllRestaurantMenusWithItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllRestaurantMenusWithItemsQuery, GetAllRestaurantMenusWithItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllRestaurantMenusWithItemsQuery, GetAllRestaurantMenusWithItemsQueryVariables>(GetAllRestaurantMenusWithItemsDocument, options);
        }
export type GetAllRestaurantMenusWithItemsQueryHookResult = ReturnType<typeof useGetAllRestaurantMenusWithItemsQuery>;
export type GetAllRestaurantMenusWithItemsLazyQueryHookResult = ReturnType<typeof useGetAllRestaurantMenusWithItemsLazyQuery>;
export type GetAllRestaurantMenusWithItemsQueryResult = Apollo.QueryResult<GetAllRestaurantMenusWithItemsQuery, GetAllRestaurantMenusWithItemsQueryVariables>;
export const GetRestaurantByIdWithAllRelationsDocument = gql`
    query GetRestaurantByIdWithAllRelations($id: String!, $relations: [String!]!) {
  getRestaurantByIdWithAllRelations(id: $id, relations: $relations) {
    id
    category
    dressCode
    acceptedPaymentMethods
    name
    cnpj
    mainPhone
    secondaryPhone
    email
    isWifi
    isParking
    isOpen
    start_hour
    end_hour
    weekend_start_hour
    weekend_end_hour
    lunch_start_hour
    lunch_end_hour
    lunch_start_hour_weekend
    lunch_end_hour_weekend
    brunch_end_hour
    brunch_start_hour
    brunch_end_hour_weekend
    brunch_start_hour_weekend
    dinner_end_hour
    dinner_start_hour
    dinner_end_hour_weekend
    dinner_start_hour_weekend
    capacity
    maxGuestQuantity
    thumbUrl
    cancellationPolicy {
      id
      tax
      details
      limitDaysToCancel
    }
    restaurantImage {
      url
    }
    address {
      id
      state
      city
      uf
      postalCode
      neighborhood
      street
      number
    }
  }
}
    `;

/**
 * __useGetRestaurantByIdWithAllRelationsQuery__
 *
 * To run a query within a React component, call `useGetRestaurantByIdWithAllRelationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRestaurantByIdWithAllRelationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRestaurantByIdWithAllRelationsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      relations: // value for 'relations'
 *   },
 * });
 */
export function useGetRestaurantByIdWithAllRelationsQuery(baseOptions: Apollo.QueryHookOptions<GetRestaurantByIdWithAllRelationsQuery, GetRestaurantByIdWithAllRelationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRestaurantByIdWithAllRelationsQuery, GetRestaurantByIdWithAllRelationsQueryVariables>(GetRestaurantByIdWithAllRelationsDocument, options);
      }
export function useGetRestaurantByIdWithAllRelationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRestaurantByIdWithAllRelationsQuery, GetRestaurantByIdWithAllRelationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRestaurantByIdWithAllRelationsQuery, GetRestaurantByIdWithAllRelationsQueryVariables>(GetRestaurantByIdWithAllRelationsDocument, options);
        }
export type GetRestaurantByIdWithAllRelationsQueryHookResult = ReturnType<typeof useGetRestaurantByIdWithAllRelationsQuery>;
export type GetRestaurantByIdWithAllRelationsLazyQueryHookResult = ReturnType<typeof useGetRestaurantByIdWithAllRelationsLazyQuery>;
export type GetRestaurantByIdWithAllRelationsQueryResult = Apollo.QueryResult<GetRestaurantByIdWithAllRelationsQuery, GetRestaurantByIdWithAllRelationsQueryVariables>;
export const FindReviewsByRestaurantByIdDocument = gql`
    query findReviewsByRestaurantById($restaurantId: String!) {
  findAllReviewsByRestaurant(restaurantId: $restaurantId) {
    reviews {
      id
      rating
      comment
      user {
        firstName
        lastName
      }
    }
    average
  }
}
    `;

/**
 * __useFindReviewsByRestaurantByIdQuery__
 *
 * To run a query within a React component, call `useFindReviewsByRestaurantByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindReviewsByRestaurantByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindReviewsByRestaurantByIdQuery({
 *   variables: {
 *      restaurantId: // value for 'restaurantId'
 *   },
 * });
 */
export function useFindReviewsByRestaurantByIdQuery(baseOptions: Apollo.QueryHookOptions<FindReviewsByRestaurantByIdQuery, FindReviewsByRestaurantByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindReviewsByRestaurantByIdQuery, FindReviewsByRestaurantByIdQueryVariables>(FindReviewsByRestaurantByIdDocument, options);
      }
export function useFindReviewsByRestaurantByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindReviewsByRestaurantByIdQuery, FindReviewsByRestaurantByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindReviewsByRestaurantByIdQuery, FindReviewsByRestaurantByIdQueryVariables>(FindReviewsByRestaurantByIdDocument, options);
        }
export type FindReviewsByRestaurantByIdQueryHookResult = ReturnType<typeof useFindReviewsByRestaurantByIdQuery>;
export type FindReviewsByRestaurantByIdLazyQueryHookResult = ReturnType<typeof useFindReviewsByRestaurantByIdLazyQuery>;
export type FindReviewsByRestaurantByIdQueryResult = Apollo.QueryResult<FindReviewsByRestaurantByIdQuery, FindReviewsByRestaurantByIdQueryVariables>;