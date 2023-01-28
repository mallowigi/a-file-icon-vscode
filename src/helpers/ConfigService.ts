import type { WorkspaceConfiguration } from 'vscode';
import { workspace, ConfigurationTarget } from 'vscode';
import { EXTENSION_KEY, ICON_THEME_KEY } from 'src/helpers/constants';
import type { AtomConfig } from 'src/@types/config';
import { IconPack, FolderTheme } from 'src/@types/config';
import { notificationsService } from 'src/helpers/NotificationsService';
import i18next from 'i18next';

export class ConfigService implements AtomConfig {

  // region Atom Config
  get showReloadMessage() {
    return this.getPluginConfig().get<boolean>('showReloadMessage') ?? true;
  }

  set showReloadMessage(v: boolean) {
    this.getPluginConfig().update('showReloadMessage', v);
  }

  get showUpdateMessage() {
    return this.getPluginConfig().get<boolean>('showUpdateMessage') ?? true;
  }

  set showUpdateMessage(v: boolean) {
    this.getPluginConfig().update('showUpdateMessage', v);
  }

  get showWelcomeMessage() {
    return this.getPluginConfig().get<boolean>('showWelcomeMessage') ?? true;
  }

  set showWelcomeMessage(v: boolean) {
    this.getPluginConfig().update('showWelcomeMessage', v);
  }

  get opacity() {
    return this.getPluginConfig().get<number>('opacity') ?? 1;
  }

  set opacity(v: number) {
    this.getPluginConfig().update('opacity', v);
  }

  get saturation() {
    return this.getPluginConfig().get<number>('saturation') ?? 1;
  }

  set saturation(v: number) {
    this.getPluginConfig().update('saturation', v);
  }

  get activeIconPath() {
    return this.getPluginConfig().get<IconPack>('activeIconPath') ?? IconPack.Angular;
  }

  set activeIconPath(v: IconPack) {
    this.getPluginConfig().update('activeIconPath', v);
  }

  get hidesExplorerArrows() {
    return this.getPluginConfig().get<boolean>('hidesExplorerArrows') ?? false;
  }

  set hidesExplorerArrows(v: boolean) {
    this.getPluginConfig().update('hideExplorerArrows', v);
  }

  get folderAssociations() {
    return this.getPluginConfig().get<unknown[]>('folders.associations');
  }

  get languagesAssociations() {
    return this.getPluginConfig().get<unknown[]>('languages.associations');
  }

  get filesAssociations() {
    return this.getPluginConfig().get<unknown[]>('files.associations');
  }

  get folderColor() {
    return this.getPluginConfig().get<string>('folders.color') ?? '#90a4ae';
  }

  set folderColor(v: string) {
    this.getPluginConfig().update('hideExplorerArrows', v);
  }

  get folderTheme() {
    return this.getPluginConfig().get<FolderTheme>('folders.theme') ?? FolderTheme.Specific;
  }

  set folderTheme(v: FolderTheme) {
    this.getPluginConfig().update('hideExplorerArrows', v);
  }

  // endregion

  // region Icon Theme Config
  get iconTheme() {
    return this.getConfig().get<string>(ICON_THEME_KEY) ?? '';
  }

  set iconTheme(v: string) {
    this.getConfig().update(ICON_THEME_KEY, v, ConfigurationTarget.Global);

    // local workspace
    if (this.getConfig().inspect(ICON_THEME_KEY)?.workspaceValue) {
      this.getConfig().update(ICON_THEME_KEY, v, ConfigurationTarget.Workspace);
    }

    notificationsService.showMessage(i18next.t('activated'));
  }

  /**
   * Checks if the plugin is already activated, globally or not
   * @returns {boolean}
   * @private
   */
  public isAlreadyActivated(): boolean {
    return this.isActivated();
  }

  /**
   * Activate the plugin icons by settings the icon workbench
   */
  public activateIcons(): void {
    this.iconTheme = EXTENSION_KEY;
  }

  /**
   * Checks if the plugin is activated
   * @returns {boolean}
   * @private
   */
  private isActivated(): boolean {
    return this.iconTheme === EXTENSION_KEY;
  }

  // endregion

  private getPluginConfig(): WorkspaceConfiguration {
    return this.getConfig(EXTENSION_KEY);
  }

  /**
   * Return a configuration section
   * @param {string} section the configuration section
   * @returns {WorkspaceConfiguration}
   */
  private getConfig(section?: string): WorkspaceConfiguration {
    return workspace.getConfiguration(section);
  }

}

export const configService = new ConfigService();