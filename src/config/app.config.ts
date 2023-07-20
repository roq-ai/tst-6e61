interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Content Creator', 'Team Member', 'Owner'],
  tenantName: 'Organization',
  applicationName: 'Tst',
  addOns: ['chat', 'notifications', 'file'],
};
