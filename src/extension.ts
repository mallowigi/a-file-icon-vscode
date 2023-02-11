'use strict';

import { registeredCommands } from 'src/commands/commands';
import { logger } from 'src/helpers/LoggingService';
import { notificationsService } from 'src/helpers/NotificationsService';
import { updatesService } from 'src/helpers/UpdatesService';
import { VERSION_KEY } from 'src/helpers/constants';
import { initI18next } from 'src/i18n/i18next';
import type { ExtensionContext } from 'vscode';
import { workspace } from 'vscode';
import { detectConfigChanges } from 'src/helpers/changeDetection';

/**
 * When the extension gets activated
 * @param {ExtensionContext} context
 * @returns {Promise<void>}
 */
export const activate = async (context: ExtensionContext) => {
  try {
    // Translations
    await initI18next();
    logger.debug('Translations loaded.');

    // Init for sync
    context.globalState.setKeysForSync([VERSION_KEY]);

    // checking for updates
    logger.debug('Checking for new updates...');
    const status = await updatesService.checkUpdateStatus(context.globalState);

    // Start notification
    notificationsService.showStartMessages(status);

    // Subscribe to the extension commands
    context.subscriptions.push(...registeredCommands);

    // Initially trigger the config change detection
    detectConfigChanges();

    // Observe changes in the config
    workspace.onDidChangeConfiguration(detectConfigChanges);

    // Observe if the window got focused to trigger config changes
    // window.onDidChangeWindowState((state) => {
    //   if (state.focused) {
    //     detectConfigChanges();
    //   }
    // });
  } catch (error) {
    console.error(error);
  }
};

/** This method is called when the extension is deactivated */
export const deactivate = () => {};
