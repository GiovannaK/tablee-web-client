export const enumMapper = <T extends {}>(object: T): (keyof T)[] => {
  return Object.values(object) as (keyof T)[];
}