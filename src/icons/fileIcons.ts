import { FileIcons, IconPack } from '../models/index';

/**
 * Defines file icons
 */
export const fileIcons: FileIcons = {
  defaultIcon: { name: 'file' },
  icons: [
    // region [Custom]
    {
      name: 'indexhtml',
      fileNames: [
        'index.html',
        'index.htm',
        'index.phtml',
        'index.pug',
        'index.jade',
        'index.hbs',
        'index.handlebars',
        'index.twig',
        'index.php',
        'index.jsp',
        'index.ejs',
      ],
    },
    {
      name: 'index',
      fileNames: [
        'index.js',
        'index.cjs',
        'index.mjs',
        'index.ts',
        'index.jsx',
        'index.tsx',
        'index.coffee',
        'index.es6',
        'index.dart',
        'index.svelte',
        'index.vue',
        'index.css',
        'index.scss',
      ],
    },
    {
      name: 'githubActions',
      fileNames: [
        '.github/build.yaml',
        '.github/build.yml',
        '.github/ci.yaml',
        '.github/ci.yml',
        '.github/config.yaml',
        '.github/config.yml',
        '.github/main.yaml',
        '.github/main.yml',
        '.github/release.yaml',
        '.github/release.yml',
        '.github/workflow.yaml',
        '.github/workflow.yml',
      ],
    },
    {
      name: 'githubCode',
      fileNames: ['CODE_OF_CONDUCT.md', 'CODE_OF_CONDUCT.txt'],
    },
    {
      name: 'githubContributing',
      fileNames: ['CONTRIBUTING.md', 'CONTRIBUTING.txt'],
    },
    {
      name: 'github',
      fileNames: [
        'COMMIT_MESSAGE_TEMPLATE.md',
        'COMMIT_MESSAGE_TEMPLATE.txt',
        'PULL_REQUEST_TEMPLATE.md',
        'PULL_REQUEST_TEMPLATE.txt',
        'TEMPLATE.md',
        'TEMPLATE.txt',
      ],
      light: true,
    },
    {
      name: 'readme',
      fileNames: [
        'README',
        'README.md',
        'README.txt',
        'readme',
        'readme.md',
        'readme.txt',
      ],
      light: true,
    },
    {
      name: 'gitcommit',
      fileNames: ['COMMIT_EDITMSG', 'ATOM_COMMIT_EDITMSG'],
    },
    {
      name: 'githubCommit',
      fileNames: [
        'COMMIT_MESSAGE_CONVENTION.md',
        'COMMIT_MESSAGE_CONVENTION.txt',
      ],
    },
    {
      name: 'gitmerge',
      fileNames: ['MERGE_HEAD', 'MERGE_MODE', 'MERGE_MSG'],
    },
    {
      name: 'install',
      fileNames: [
        'INSTALL',
        'INSTALL.md',
        'INSTALL.sh',
        'INSTALL.txt',
        'INSTALL.yaml',
        'INSTALL.yml',
        'install',
        'install.md',
        'install.sh',
        'install.txt',
        'install.yaml',
        'install.yml',
      ],
    },
    {
      name: 'funding',
      fileNames: [
        'FUNDING',
        'FUNDING.md',
        'FUNDING.sh',
        'FUNDING.txt',
        'FUNDING.yaml',
        'FUNDING.yml',
        'funding',
        'funding.md',
        'funding.sh',
        'funding.txt',
        'funding.yaml',
        'funding.yml',
      ],
    },
    {
      name: 'stalebot',
      fileNames: ['stale.yml', 'stale.yaml'],
    },
    {
      name: 'plugin',
      fileNames: ['META-INF/plugin.xml'],
    },
    {
      name: 'i18nProperties',
      fileExtensions: ['bundle.properties', 'messages/properties'],
    },
    {
      name: 'i18nJava',
      fileExtensions: ['bundle.java', 'messages/java'],
    },
    {
      name: 'i18nKotlin',
      fileExtensions: ['bundle.kt', 'messages/kt'],
    },
    {
      name: 'spray',
      fileNames: ['spray.conf', 'reference.conf', 'application.conf'],
    },
    // endregion [Custom]

    // region [Tests]
    {
      name: 'testcoffee',
      fileExtensions: [
        'test.coffee',
        'test.litcoffee',
        'spec.coffee',
        'spec.litcoffee',
        'test/coffee',
        'test/litcoffee',
        'spec/coffee',
        'spec/litcoffee',
        'tests/coffee',
        'tests/litcoffee',
        'specs/coffee',
        'specs/litcoffee',
      ],
    },
    {
      name: 'testdart',
      fileExtensions: [
        'test.dart',
        'spec.dart',
        'test/dart',
        'spec/dart',
        'tests/dart',
        'specs/dart',
      ],
    },
    {
      name: 'testgo',
      fileExtensions: [
        'test.go',
        'spec.go',
        'test/go',
        'spec/go',
        'tests/go',
        'specs/go',
      ],
    },
    {
      name: 'testhaskell',
      fileExtensions: [
        'test.hs',
        'spec.hs',
        'test/hs',
        'tests/hs',
        'spec/hs',
        'specs/hs',
      ],
    },
    {
      name: 'testjava',
      fileExtensions: ['test/java', 'tests/java', 'unit/java', 'junit/java'],
    },
    {
      name: 'testkotlin',
      fileExtensions: ['test/kt', 'tests/kt', 'unit/kt', 'junit/kt'],
    },
    {
      name: 'testjs',
      fileExtensions: [
        'test.js',
        'spec.js',
        'test/js',
        'tests/js',
        'spec/js',
        'specs/js',
        'test.cjs',
        'spec.cjs',
        'test/cjs',
        'tests/cjs',
        'spec/cjs',
        'specs/cjs',
        'test.mjs',
        'spec.mjs',
        'test/mjs',
        'tests/mjs',
        'spec/mjs',
        'specs/mjs',
        'test.es6',
        'spec.es6',
        'test/es6',
        'tests/es6',
        'spec/es6',
        'specs/es6',
      ],
      light: true,
    },
    {
      name: 'testperl',
      fileExtensions: [
        'test.pl',
        'spec.pl',
        'test/pl',
        'tests/pl',
        'spec/pl',
        'specs/pl',
        'test.pl6',
        'spec.pl6',
        'test/pl6',
        'tests/pl6',
        'spec/pl6',
        'specs/pl6',
        'test.perl',
        'spec.perl',
        'test/perl',
        'tests/perl',
        'spec/perl',
        'specs/perl',
        'test.pm6',
        'spec.pm6',
        'test/pm6',
        'tests/pm6',
        'spec/pm6',
        'specs/pm6',
        'test.ph',
        'spec.ph',
        'test/ph',
        'tests/ph',
        'spec/ph',
        'specs/ph',
      ],
    },
    {
      name: 'testreact',
      fileExtensions: [
        'test.jsx',
        'spec.jsx',
        'test/jsx',
        'tests/jsx',
        'spec/jsx',
        'specs/jsx',
        'test.tsx',
        'spec.tsx',
        'test/tsx',
        'tests/tsx',
        'spec/tsx',
        'specs/tsx',
      ],
    },
    {
      name: 'testpy',
      fileExtensions: [
        'test.py',
        'spec.py',
        'test/py',
        'tests/py',
        'spec/py',
        'specs/py',
        'test.ipy',
        'spec.ipy',
        'test/ipy',
        'tests/ipy',
        'spec/ipy',
        'specs/ipy',
        'test.py3',
        'spec.py3',
        'test/py3',
        'tests/py3',
        'spec/py3',
        'specs/py3',
        'test.python',
        'spec.python',
        'test/python',
        'tests/python',
        'spec/python',
        'specs/python',
        'test.whl',
        'spec.whl',
        'test/whl',
        'tests/whl',
        'spec/whl',
        'specs/whl',
        'test.pep',
        'spec.pep',
        'test/pep',
        'tests/pep',
        'spec/pep',
        'specs/pep',
      ],
    },
    {
      name: 'testruby',
      fileExtensions: [
        'test.rb',
        'spec.rb',
        'test/rb',
        'tests/rb',
        'spec/rb',
        'specs/rb',
        'test.rbs',
        'spec.rbs',
        'test/rbs',
        'tests/rbs',
        'spec/rbs',
        'specs/rbs',
        'test.ruby',
        'spec.ruby',
        'test/ruby',
        'tests/ruby',
        'spec/ruby',
        'specs/ruby',
      ],
    },
    {
      name: 'testrust',
      fileExtensions: [
        'test.rs',
        'spec.rs',
        'test/rs',
        'tests/rs',
        'spec/rs',
        'specs/rs',
      ],
    },
    {
      name: 'testscala',
      fileExtensions: [
        'test.scala',
        'spec.scala',
        'test/scala',
        'tests/scala',
        'spec/scala',
        'specs/scala',
      ],
    },
    {
      name: 'testts',
      fileExtensions: [
        'test.ts',
        'spec.ts',
        'test/ts',
        'tests/ts',
        'spec/ts',
        'specs/ts',
      ],
    },
    {
      name: 'phpunit',
      fileNames: ['phpunit.xml', 'phpunit.xml.dist'],
      fileExtensions: [
        'test.php',
        'unit.php',
        'spec.php',
        'test/php',
        'tests/php',
        'unit/php',
        'units/php',
        'spec/php',
        'specs/php',
      ],
    },
    // endregion [Tests]

    // region [0-9]
    {
      name: '11ty',
      fileNames: [
        '.11ty.cjs',
        '.11ty.js',
        '.11ty.mjs',
        '.11ty.ts',
        '.11tyignore',
        '.eleventy.cjs',
        '.eleventy.js',
        '.eleventy.mjs',
        '.eleventy.ts',
        '.eleventyignore',
      ],
      light: true,
    },
    {
      name: '1c',
      fileExtensions: ['bsl', 'mdo', 'sdbl', 'os'],
    },
    {
      name: '3d',
      fileExtensions: [
        'ac',
        'c4d',
        'cginc',
        'dxf',
        'geo',
        'obj',
        'shader',
        'stl',
        'tesc',
        'tese',
        'x',
      ],
    },
    {
      name: '3dsmax',
      fileExtensions: ['osl', 'dwg', '3ds'],
    },
    {
      name: '4d',
      fileExtensions: ['4dm', '4db'],
    },

    // endregion [0-9]

    // region [A]
    {
      name: 'aplus',
      fileExtensions: ['a+'],
    },
    {
      name: 'access',
      fileExtensions: [
        'accda',
        'accdb',
        'accde',
        'accdr',
        'accdt',
        'adn',
        'laccdb',
        'maf',
        'mam',
        'maq',
        'mar',
        'mdw',
      ],
    },
    {
      name: 'abap',
      fileExtensions: ['abap', 'abp'],
    },
    {
      name: 'abc',
      fileExtensions: ['abc'],
    },
    {
      name: 'abif',
      fileExtensions: ['ab1', 'abif', 'fsa'],
    },
    {
      name: 'acre',
      fileNames: ['acre.config'],
    },
    {
      name: 'act',
      fileNames: ['.actrc'],
    },
    {
      name: 'actionscript',
      fileExtensions: ['as', 'as3', 'jsfl'],
    },
    {
      name: 'ada',
      fileExtensions: ['ada', 'adb', 'ads'],
    },
    {
      name: 'animate',
      fileExtensions: ['fla', 'xfl'],
    },
    {
      name: 'ae',
      fileExtensions: ['aep', 'aet'],
    },
    {
      name: 'ai',
      fileExtensions: ['ai', 'aia', 'ait'],
    },
    {
      name: 'indesign',
      fileExtensions: ['id', 'idml', 'indb', 'indd', 'indl', 'indt'],
    },
    {
      name: 'psd',
      fileExtensions: ['atn', 'psb', 'psd'],
    },
    {
      name: 'premiere',
      fileExtensions: ['prel', 'prproj', 'psq'],
    },
    {
      name: 'advpl',
      fileExtensions: ['ahu', 'aph', 'prw', 'tlpp'],
    },
    {
      name: 'affectscript',
      fileExtensions: ['affect'],
    },
    {
      name: 'affinity',
      fileExtensions: ['afdesign', 'afphoto', 'afpub'],
    },
    {
      name: 'agda',
      fileExtensions: ['agda', 'lagda'],
    },
    {
      name: 'akka',
      fileExtensions: ['akka'],
    },
    {
      name: 'al',
      fileExtensions: ['al'],
    },
    {
      name: 'alacritty',
      fileNames: ['alacritty.yml', '.alacritty.yml'],
    },
    {
      name: 'alex',
      fileNames: ['alexrc', '.alexrc'],
    },
    {
      name: 'alexignore',
      fileNames: ['.alexignore'],
    },
    {
      name: 'allcontributors',
      fileNames: [
        'all-contributorsrc',
        '.all-contributorsrc',
        'allcontributorsrc',
        '.allcontributorsrc',
      ],
    },
    {
      name: 'alloy',
      fileExtensions: ['als'],
    },
    {
      name: 'alpine',
      fileNames: ['APKBUILD', '.APKBUILD'],
    },
    {
      name: 'amigaos',
      fileExtensions: ['arexx'],
    },
    {
      name: 'ampl',
      fileExtensions: ['ampl'],
    },
    {
      name: 'amplication',
      fileNames: ['ampconfig.json'],
    },
    {
      name: 'amplify',
      fileNames: ['amplify.yml', 'amplify.yaml'],
    },
    {
      name: 'amusewiki',
      fileExtensions: ['muse'],
    },
    {
      name: 'analytica',
      fileExtensions: ['ana'],
    },
    {
      name: 'androidManifest',
      fileNames: ['AndroidManifest.xml'],
    },
    {
      name: 'android',
      fileNames: ['MainActivity.java', 'MainActivity.kt'],
    },
    {
      name: 'androidSmali',
      fileExtensions: ['smali', 'rsh', 'webarchivexml'],
    },
    {
      name: 'angelscript',
      fileExtensions: ['acs', 'angelscript'],
    },
    {
      name: 'angularCli',
      fileNames: [
        'angular.json',
        'angular-cli.json',
        '.angular-cli.json',
        '.angular.json',
      ],
    },
    {
      name: 'angularjs',
      fileNames: ['angular.js', 'angular.min.js'],
    },
    {
      name: 'angular',
      fileExtensions: [
        'ng.html',
        'ng.js',
        'ng.ts',
        'ng-template',
        'ngtemplate',
      ],
    },
    {
      name: 'ngrxjs',
      fileExtensions: ['container.js', 'container.ts', 'container.dart'],
    },
    {
      name: 'angularcomponent',
      fileExtensions: [
        'component.js',
        'component.ts',
        'component.dart',
        'comp.js',
        'comp.ts',
        'comp.dart',
      ],
      enabledFor: [IconPack.Angular, IconPack.Ngrx],
    },
    {
      name: 'angularcontroller',
      fileExtensions: [
        'controller.js',
        'controller.ts',
        'controller.dart',
        'ctrl.js',
        'ctrl.ts',
        'ctrl.dart',
      ],
      enabledFor: [IconPack.Angular, IconPack.Ngrx],
    },
    {
      name: 'angulardirective',
      fileExtensions: ['directive.js', 'directive.ts', 'directive.dart'],
      enabledFor: [IconPack.Angular, IconPack.Ngrx],
    },
    {
      name: 'angularguard',
      fileExtensions: ['guard.js', 'guard.ts', 'guard.dart'],
      enabledFor: [IconPack.Angular, IconPack.Ngrx],
    },
    {
      name: 'angularinterceptor',
      fileExtensions: ['interceptor.js', 'interceptor.ts', 'interceptor.dart'],
      enabledFor: [IconPack.Angular, IconPack.Ngrx],
    },
    {
      name: 'angularrouting',
      fileNames: [
        'angular-routing.js',
        'angular-routing.ts',
        'angular-routing.dart',
        'angular_routing.js',
        'angular_routing.ts',
        'angular_routing.dart',
      ],
      fileExtensions: ['routing.js', 'routing.ts', 'routing.dart'],
      enabledFor: [IconPack.Angular, IconPack.Ngrx],
    },
    {
      name: 'angularapprouting',
      fileNames: [
        'app-routing.module.js',
        'app-routing.module.ts',
        'app-routing.module.dart',
      ],
      enabledFor: [IconPack.Angular, IconPack.Ngrx],
    },
    {
      name: 'angularmodule',
      fileExtensions: ['module.js', 'module.ts', 'module.dart'],
      enabledFor: [IconPack.Angular, IconPack.Ngrx],
    },
    {
      name: 'angularservice',
      fileExtensions: ['service.js', 'service.ts', 'service.dart'],
      enabledFor: [IconPack.Angular, IconPack.Ngrx],
    },
    {
      name: 'ionic',
      fileExtensions: ['page.js', 'page.ts', 'page.dart'],
      enabledFor: [IconPack.Angular, IconPack.Ngrx],
    },
    {
      name: 'angularpipe',
      fileExtensions: ['pipe.js', 'pipe.ts', 'pipe.dart'],
      enabledFor: [IconPack.Angular, IconPack.Ngrx],
    },
    {
      name: 'angularresolver',
      fileExtensions: ['resolver.js', 'resolver.ts', 'resolver.dart'],
      enabledFor: [IconPack.Angular, IconPack.Ngrx],
    },
    {
      name: 'angulartailwind',
      fileNames: ['ng-tailwind.js', 'ng-tailwind.ts', 'ng-tailwind.dart'],
      enabledFor: [IconPack.Angular, IconPack.Ngrx],
    },
    {
      name: 'animestudio',
      fileExtensions: ['anime', 'animestudio'],
    },
    {
      name: 'ansible',
      fileNames: [
        'ansible.yml',
        'ansible.yaml',
        'ansible.cfg',
        'ansible_inventory.yml',
        'site.yml',
        'site.yaml',
        'playbook.yml',
        'playbook.yaml',
        'playbook.cfg',
        'inventory.yml',
        'inventory.yaml',
        'webservers.yml',
        'webservers.yaml',
        'dbservers.yml',
        'dbservers.yaml',
        'galaxy.yml',
        'galaxy.yaml',
      ],
    },
    {
      name: 'ant',
      fileNames: ['ant.xml', '.ant'],
    },
    {
      name: 'antlers',
      fileExtensions: ['antlers.html'],
    },
    {
      name: 'antlr',
      fileExtensions: ['g', 'g4'],
    },
    {
      name: 'antwar',
      fileNames: [
        'antwar.conf.js',
        'antwar.conf.cjs',
        'antwar.conf.mjs',
        'antwar.config.js',
        'antwar.config.cjs',
        'antwar.config.mjs',
        '.antwar.conf.js',
        '.antwar.conf.cjs',
        '.antwar.conf.mjs',
        '.antwar.config.js',
        '.antwar.config.cjs',
        '.antwar.config.mjs',
      ],
    },
    {
      name: 'any',
      fileExtensions: ['any'],
    },
    {
      name: 'apacheconf',
      fileNames: [
        'apache.conf',
        'apache2.conf',
        'apache.dev.conf',
        'apache2.dev.conf',
        'apache.prod.conf',
        'apache2.prod.conf',
        'apache.vhost.conf',
        'apache2.vhost.conf',
        'httpd.conf',
        'httpd.dev.conf',
        'httpd.prod.conf',
        'httpd.vhost.conf',
        '.apacheconf',
        '.apache.conf',
        '.apache2.conf',
      ],
    },
    {
      name: 'apache',
      fileExtensions: ['vhost', 'thrift'],
    },
    {
      name: 'apex',
      fileExtensions: ['cls', 'apex'],
    },
    {
      name: 'apib',
      fileExtensions: ['apib'],
    },
    {
      name: 'apiextractor',
      fileNames: [
        'api-extractor.json',
        'api-extractor.common.json',
        'api-extractor-base.json',
      ],
    },
    {
      name: 'apk',
      fileExtensions: ['apk'],
    },
    {
      name: 'apl',
      fileExtensions: ['apl', 'apla', 'aplc', 'aplf', 'apli', 'apln', 'aplo'],
    },
    {
      name: 'apollo',
      fileNames: [
        'apollo.config.js',
        'apollo.config.cjs',
        'apollo.config.mjs',
        'apollo.config.ts',
      ],
    },
    {
      name: 'appcelerator',
      fileNames: [
        'appcelerator.js',
        'appcelerator.cjs',
        'appcelerator.mjs',
        'appcelerator.ts',
      ],
    },
    {
      name: 'appsemble',
      fileNames: [
        '.appsemblerc',
        '.appsemblerc.yml',
        '.appsemblerc.yaml',
        'app-definition.yml',
        'app-definition.yaml',
      ],
    },
    {
      name: 'appveyor',
      fileNames: [
        '.appveyor.yml',
        '.appveyor.yaml',
        'appveyor.yml',
        'appveyor.yaml',
      ],
    },
    {
      name: 'applescript',
      fileExtensions: ['applescript', 'scpt'],
    },
    {
      name: 'arc',
      fileExtensions: ['arc'],
    },
    {
      name: 'archlinux',
      fileNames: ['.install', '.SRCINFO', 'PKGBUILD', '.yaourtrc'],
    },
    {
      name: 'pacman',
      fileNames: ['pacman.conf', 'pamac.conf', 'makepkg.conf'],
    },
    {
      name: 'arduino',
      fileExtensions: ['ino'],
    },
    {
      name: 'arend',
      fileNames: ['arend.yml', 'arend.yaml'],
      fileExtensions: ['arc', 'ard', 'arend'],
    },
    {
      name: 'arm',
      fileExtensions: ['arm'],
    },
    {
      name: 'arttext',
      fileExtensions: ['art3', 'art4'],
    },
    {
      name: 'asciidoc',
      fileExtensions: ['adoc', 'asciidoc', 'asc', 'ad'],
    },
    {
      name: 'aspectj',
      fileExtensions: ['aj', 'aspectj'],
    },
    {
      name: 'asmpure',
      fileExtensions: ['a', 'i', 's'],
    },
    {
      name: 'asm',
      fileExtensions: [
        'asm',
        'inc',
        'ms',
        'agc',
        'lst',
        'aea',
        'argus',
        'mitigus',
      ],
    },
    {
      name: 'hitachi',
      fileExtensions: ['h8', 'h8S', 'h8SX', 'h8000', 'h8300'],
    },
    {
      name: 'intel',
      fileExtensions: ['x32', 'x64', 'x86', 'i386', '80386'],
    },
    {
      name: 'vax',
      fileExtensions: ['vax', 'vmasm'],
    },
    {
      name: 'asp',
      fileExtensions: [
        'asp',
        'asa',
        'asax',
        'ascx',
        'ashx',
        'asmx',
        'aspx',
        'axd',
      ],
    },
    {
      name: 'astro',
      fileExtensions: ['astro'],
    },
    {
      name: 'astroconfig',
      fileNames: [
        'astro.config.mjs',
        'astro.config.cjs',
        'astro.config.js',
        'astro.config.ts',
      ],
    },
    {
      name: 'artisan',
      fileNames: ['artisan', 'artisan.php'],
    },
    {
      name: 'astyle',
      fileNames: ['.astylerc'],
    },
    {
      name: 'asymptote',
      fileExtensions: ['asy'],
    },
    {
      name: 'atom',
      fileExtensions: ['atomproject.json', 'atomproject.cson'],
      light: true,
    },
    {
      name: 'apm',
      fileNames: ['.apmrc'],
      light: true,
    },
    {
      name: 'atoum',
      fileExtensions: ['atoum.php'],
      fileNames: ['atoum.config.php'],
    },
    {
      name: 'ats',
      fileExtensions: ['ats', 'dats', 'hats', 'sats'],
    },
    {
      name: 'audacity',
      fileExtensions: ['aup', 'audacity'],
    },
    {
      name: 'augeas',
      fileExtensions: ['aug', 'augeas'],
    },
    {
      name: 'aurelia',
      fileNames: [
        'aurelia.json',
        'aurelia.js',
        'aurelia.cjs',
        'aurelia.mjs',
        'aurelia.ts',
        'aureliafile.json',
        'aureliafile.js',
        'aureliafile.cjs',
        'aureliafile.mjs',
        'aureliafile.ts',
      ],
    },
    {
      name: 'authors',
      fileNames: ['authors', 'authors.txt', 'authors.md', 'authors.rst'],
    },
    {
      name: 'auto',
      fileNames: [
        '.autorc',
        '.autorc.json',
        '.autorc.yml',
        '.autorc.yaml',
        '.autorc.js',
        '.autorc.cjs',
        '.autorc.mjs',
        'auto.config.js',
        'auto.config.cjs',
        'auto.config.mjs',
        'auto.config.ts',
        'auto.config.yaml',
        'auto.config.yml',
        'auto.config.json',
      ],
    },
    {
      name: 'ahk',
      fileExtensions: ['ahk', 'ahkl'],
    },
    {
      name: 'autoit',
      fileExtensions: ['au3', 'autoit'],
    },
    {
      name: 'ava',
      fileNames: [
        '.avarc',
        '.avarc.json',
        '.avarc.yml',
        '.avarc.yaml',
        '.avarc.js',
        '.avarc.ts',
        '.avarc.cjs',
        '.avarc.mjs',
        'ava.config.js',
        'ava.config.cjs',
        'ava.config.mjs',
        'ava.config.ts',
        'ava.config.yaml',
        'ava.config.yml',
        'ava.config.json',
      ],
    },
    {
      name: 'avif',
      fileExtensions: ['avif'],
    },
    {
      name: 'avr',
      fileExtensions: ['avr', 'avrasm'],
    },
    {
      name: 'avro',
      fileExtensions: ['avsc', 'avpr', 'avdl', 'avcs'],
    },
    {
      name: 'awk',
      fileExtensions: ['awk', 'gawk', 'mawk', 'nawk', 'pawk', 'tawk'],
    },
    {
      name: 'azure',
      fileExtensions: ['azcli'],
    },
    {
      name: 'azurepipelines',
      fileNames: [
        'azure-pipelines.yml',
        'azure-pipelines.yaml',
        'azure-pipelines.ci.yml',
        'azure-pipelines.ci.yaml',
        'azure-pipelines.release.yml',
        'azure-pipelines.release.yaml',
      ],
    },

    // endregion

    // region [B]
    {
      name: 'babel',
      fileExtensions: [
        'babel',
        'babelrc',
        'babelrc.js',
        'babelrc.cjs',
        'babelrc.mjs',
        'languagebabel',
      ],
    },
    {
      name: 'babelconfig',
      fileNames: [
        'babel.config.js',
        'babel.config.cjs',
        'babel.config.mjs',
        'babel.json',
        'babel.config.json',
      ],
    },
    {
      name: 'baboon',
      fileNames: [
        'baboon.config.js',
        'baboon.config.cjs',
        'baboon.config.mjs',
        'baboon.json',
        'baboon.config.json',
      ],
    },
    {
      name: 'backbone',
      fileNames: [
        'backbone.js',
        'backbone.cjs',
        'backbone.mjs',
        'backbone.min.js',
        'backbone-min.js',
      ],
    },
    {
      name: 'backup',
      fileExtensions: ['backup', 'bak', 'old', 'orig'],
    },
    {
      name: 'ballerina',
      fileExtensions: ['bal', 'balx'],
    },
    {
      name: 'bandit',
      fileNames: ['bandit.yml', 'bandit.yaml'],
      fileExtensions: ['bandit', 'bandit.yml', 'bandit.yaml'],
    },
    {
      name: 'basic',
      fileExtensions: [
        'bas',
        'bi',
        'bb',
        'bmx',
        'bms',
        'bm',
        'bml',
        'bmx',
        'vb',
        'vbx',
        'vbs',
      ],
    },
    {
      name: 'bats',
      fileExtensions: ['bats'],
      light: true,
    },
    {
      name: 'bazaar',
      fileExtensions: ['bzrignore'],
    },
    {
      name: 'bazel',
      fileExtensions: ['bzl', 'bazel'],
    },
    {
      name: 'bazelignore',
      fileExtensions: ['bzlignore', 'bazelignore'],
    },
    {
      name: 'bazelconfig',
      fileNames: ['bazel.rc'],
      fileExtensions: ['bazelrc'],
    },
    {
      name: 'bc',
      fileExtensions: ['bc', 'dc', 'dcrc'],
    },
    {
      name: 'bean',
      fileExtensions: ['bean/java', 'bean/kt', 'beans/java', 'beans/kt'],
    },
    {
      name: 'behat',
      fileExtensions: ['feature.php'],
    },
    {
      name: 'behatconfig',
      fileNames: [
        'behat.yml',
        'behat.yaml',
        'behat.config.yml',
        'behat.config.yaml',
      ],
    },
    {
      name: 'bem',
      fileExtensions: ['bemjson', 'bemjson.js', 'bemjson.cjs', 'bemjson.mjs'],
    },
    {
      name: 'bibtex',
      fileExtensions: ['cbx', 'bbx', 'bbl', 'bib', 'bst'],
    },
    {
      name: 'bicep',
      fileExtensions: ['bicep'],
    },
    {
      name: 'biml',
      fileExtensions: ['biml'],
    },
    {
      name: 'binder',
      fileNames: [
        'binder-requirements.in',
        'binder_requirements.in',
        'binder-requirements.txt',
        'binder_requirements.txt',
      ],
    },
    {
      name: 'bintray',
      fileExtensions: ['bintray.json'],
    },
    {
      name: 'bison',
      fileExtensions: ['bison', 'y', 'yacc', 'yy', 'ypp'],
    },
    {
      name: 'bitcoin',
      fileNames: ['bitcoin.conf'],
    },
    {
      name: 'bithound',
      fileExtensions: ['bithoundrc'],
    },
    {
      name: 'bitbucket',
      fileNames: ['bitbucket-pipelines.yml', 'bitbucket-pipelines.yaml'],
    },
    {
      name: 'blade',
      fileExtensions: ['blade', 'blade.php'],
    },
    {
      name: 'blender',
      fileExtensions: ['blend', 'bphys'],
    },
    {
      name: 'blitzbasic',
      fileExtensions: ['bb', 'decls'],
    },
    {
      name: 'blitz',
      fileNames: [
        'blitz.config.js',
        'blitz.config.cjs',
        'blitz.config.mjs',
        'blitz.config.ts',
        'blitz.config.compiled.js',
        'blitz.config.compiled.ts',
      ],
    },
    {
      name: 'bloc',
      fileNames: [
        'bloc.dart',
        'flutter_bloc.dart',
        'AppBloc.dart',
        'habit_event.dart',
        'AppEvent.dart',
        'habit_state.dart',
        'AppState.dart',
        'bloc/dart',
        'blocs/dart',
        'state/dart',
        'states/dart',
        'event/dart',
        'events/dart',
      ],
    },
    {
      name: 'bluespec',
      fileExtensions: ['bsv', 'bspec'],
    },
    {
      name: 'blink',
      fileExtensions: ['blink'],
    },
    {
      name: 'bnf',
      fileExtensions: ['bnf', 'ebnf', 'abnf', 'lbnf', 'grammar'],
    },
    {
      name: 'boo',
      fileExtensions: ['boo', 'boo.unity'],
    },
    {
      name: 'bors',
      fileNames: ['bors.toml'],
    },
    {
      name: 'boot',
      fileExtensions: ['boot'],
    },
    {
      name: 'bun',
      fileNames: ['bunfig.toml'],
      fileExtensions: ['bunfig.toml'],
      light: true,
    },
    {
      name: 'bunlock',
      fileNames: ['bun.lockb'],
    },
    {
      name: 'bootstrap',
      fileNames: [
        'bootstrap.js',
        'bootstrap.cjs',
        'bootstrap.mjs',
        'bootstrap.ts',
        'bootstrap.css',
        'bootstrap.scss',
        'bootstrap.min.js',
        'bootstrap.min.css',
        'custom.bootstrap.js',
        'custom.bootstrap.cjs',
        'custom.bootstrap.mjs',
        'custom.bootstrap.ts',
        'custom.bootstrap.css',
      ],
    },
    {
      name: 'bootstraprc',
      fileExtensions: ['bootstraprc'],
    },
    {
      name: 'bosque',
      fileExtensions: ['bsq'],
    },
    {
      name: 'bower',
      fileNames: ['bower.json', 'bowerfile'],
      fileExtensions: ['bowerrc'],
    },
    {
      name: 'brainfuck',
      fileExtensions: ['bf', 'brainfuck', 'b'],
    },
    {
      name: 'brakeman',
      fileNames: ['brakeman.yml', 'brakeman.yaml'],
    },
    {
      name: 'brew',
      fileNames: ['brewfile'],
    },
    {
      name: 'bro',
      fileExtensions: ['bro'],
    },
    {
      name: 'broccoli',
      fileNames: ['brocfile'],
    },
    {
      name: 'brotli',
      fileExtensions: ['br'],
    },
    {
      name: 'browserslist',
      fileExtensions: ['browserslist', 'browserslistrc'],
    },
    {
      name: 'browsersync',
      fileNames: [
        'bs-config.js',
        'bs-config.json',
        'browser-sync.js',
        'browser-sync.json',
        'browsersync.js',
        'browsersync.json',
      ],
    },
    {
      name: 'brunch',
      fileNames: [
        'brunch-config.js',
        'brunch-config.ts',
        'brunch-config.coffee',
      ],
    },
    {
      name: 'buck',
      fileExtensions: ['buck', 'buckconfig'],
    },
    {
      name: 'bucklescript',
      fileExtensions: ['cmj'],
    },
    {
      name: 'buildkite',
      fileNames: ['buildkite.yml', 'buildkite.yaml'],
      fileExtensions: ['buildkite'],
    },
    {
      name: 'bundle',
      fileNames: ['gemfile'],
      fileExtensions: ['gemfile'],
    },
    {
      name: 'byond',
      fileExtensions: ['dm'],
    },
    // endregion

    // region [C]
    {
      name: 'c',
      fileExtensions: [
        'c',
        'cats',
        'idc',
        'objc',
        'w',
        'nc',
        'wbm',
        'xpm',
        'upc',
      ],
    },
    {
      name: 'cabal',
      fileExtensions: ['cabal'],
    },
    {
      name: 'cabalProject',
      fileNames: ['cabal.project', 'cabal.config'],
    },
    {
      name: 'caddy',
      fileNames: ['caddyfile'],
    },
    {
      name: 'cadence',
      fileExtensions: ['cdc', 'cadence'],
    },
    {
      name: 'caffe',
      fileExtensions: ['caffemodel', 'solverstate'],
    },
    {
      name: 'caffe2',
      fileExtensions: ['caffe2model', 'prototxt'],
    },
    {
      name: 'cairo',
      fileExtensions: ['cairo'],
    },
    {
      name: 'cakefile',
      fileNames: ['cakefile'],
    },
    {
      name: 'cakephp',
      fileExtensions: ['cake', 'ctp'],
    },
    {
      name: 'calva',
      fileExtensions: ['calva', 'calva-repl'],
    },
    {
      name: 'cap',
      fileExtensions: ['cds', 'cap'],
    },
    {
      name: 'capacitor',
      fileNames: [
        'capacitor.config.json',
        'capacitor.config.js',
        'capacitor.config.ts',
        'capacitor.config.cjs',
        'capacitor.config.mjs',
      ],
    },
    {
      name: 'carbon',
      fileExtensions: ['carbon'],
    },
    {
      name: 'cargo',
      fileNames: ['cargo.toml', 'cargo.lock'],
    },
    {
      name: 'carthage',
      fileNames: ['cartfile', 'cartfile.private', 'cartfile.resolved'],
    },
    {
      name: 'casc',
      fileExtensions: ['casc', 'cas'],
    },
    {
      name: 'catala',
      fileExtensions: [
        'catala',
        'catala_en',
        'catala_fr',
        'catala_it',
        'catala_es',
        'catala_pt',
        'catala_jp',
        'catala_ru',
        'catala_de',
        'catala_zh',
      ],
    },
    {
      name: 'cddl',
      fileExtensions: ['cddl'],
    },
    {
      name: 'certificate',
      fileExtensions: ['crt', 'cert', 'pfx', 'p12', 'csr', 'pks', 'x509'],
    },
    {
      name: 'ceylon',
      fileExtensions: ['ceylon'],
    },
    {
      name: 'cfc',
      fileExtensions: ['cfc', 'cfm', 'cfml', 'lucee'],
    },
    {
      name: 'chai',
      fileNames: [
        'chai.js',
        'chai.min.js',
        'chai.ts',
        'chai.cjs',
        'chai.mjs',
        'chai.es6',
        'chai.coffee',
      ],
    },
    {
      name: 'chameleon',
      fileExtensions: ['pt'],
    },
    {
      name: 'changelog',
      fileExtensions: ['changelog', 'changes'],
      fileNames: [
        'changelog',
        'changelog.md',
        'changelog.txt',
        'changelog.rst',
        'changes',
        'changes.md',
        'changes.txt',
        'changes.rst',
      ],
    },
    {
      name: 'chapel',
      fileExtensions: ['chpl', 'chapel'],
    },
    {
      name: 'chartjs',
      fileNames: [
        'chart.js',
        'chart.min.js',
        'chart.ts',
        'chart.cjs',
        'chart.mjs',
        'chart.bundle.js',
        'chart.bundle.cjs',
        'chart.bundle.mjs',
        'chart.bundle.min.js',
        'chart.bundle.ts',
      ],
    },
    {
      name: 'cheetah',
      fileExtensions: ['jas'],
    },
    {
      name: 'chef',
      fileNames: ['knife.rb'],
    },
    {
      name: 'berksfile',
      fileNames: ['berksfile', 'berksfile.lock', 'policyfile'],
    },
    {
      name: 'chocolatey',
      fileNames: [
        'chocolateyinstall.ps1',
        'chocolateyuninstall.ps1',
        'chocolatey.ps1',
      ],
    },
    {
      name: 'chrome',
      fileExtensions: ['crx', 'crdownload'],
    },
    {
      name: 'chuck',
      fileExtensions: ['ck'],
    },
    {
      name: 'circleci',
      fileNames: ['circle.yml', 'circle.yaml'],
      fileExtensions: ['circleci'],
    },
    {
      name: 'circuit',
      fileExtensions: [
        'brd',
        'sch',
        'cir',
        'pcb',
        'dsn',
        'gbr',
        'gbl',
        'gbs',
        'gbo',
        'gbp',
        'gto',
        'gtl',
        'gtp',
        'gts',
        'gko',
        'gpt',
        'gpb',
        'fab',
        'pho',
        'ckt',
        'g0',
        'g1',
        'g2',
        'g3',
        'g4',
        'g5',
        'g6',
        'g7',
        'g8',
        'g9',
        'gm1',
        'g90',
      ],
    },
    {
      name: 'cirru',
      fileExtensions: ['cirru'],
    },
    {
      name: 'ckeditor',
      fileNames: ['ckeditor5-metadata.json'],
    },
    {
      name: 'clarion',
      fileExtensions: ['clw', 'clwx', 'clwn', 'clwz', 'clm', 'clmx', 'clmn'],
    },
    {
      name: 'clean',
      fileExtensions: ['icl', 'dcl', 'abc'],
    },
    {
      name: 'click',
      fileExtensions: ['click'],
    },
    {
      name: 'clio',
      fileExtensions: ['clio'],
    },
    {
      name: 'clips',
      fileExtensions: ['clp'],
    },
    {
      name: 'closuretpl',
      fileExtensions: ['soy'],
    },
    {
      name: 'cloudfoundry',
      fileExtensions: ['cfignore'],
    },
    {
      name: 'cmake',
      fileExtensions: ['cmake', 'cmake.in'],
    },
    {
      name: 'cmakelists',
      fileNames: ['cmakelists.txt', 'cmakelists'],
    },
    {
      name: 'cname',
      fileNames: ['cname'],
    },
    {
      name: 'cnab',
      fileNames: ['bundle.json'],
    },
    {
      name: 'coala',
      fileExtensions: ['coafile', 'coarc'],
    },
    {
      name: 'cobol',
      fileExtensions: ['cob', 'cbl', 'ccp', 'cobol', 'cpy'],
    },
    {
      name: 'cocoapods',
      fileNames: ['podfile', 'podfile.lock', 'podspec'],
    },
    {
      name: 'coconut',
      fileExtensions: ['coco'],
    },
    {
      name: 'codacy',
      fileExtensions: ['codacy.yml', 'codacy.yaml'],
    },
    {
      name: 'codeclimate',
      fileExtensions: ['codeclimate.yml', 'codeclimate.yaml'],
    },
    {
      name: 'codecov',
      fileNames: ['codecov.yml', 'codecov.yaml'],
      fileExtensions: ['codecov.yml', 'codecov.yaml'],
    },
    {
      name: 'codekit',
      fileNames: ['codekit-config.json'],
      fileExtensions: ['codekit', 'codekit2', 'codekit3'],
    },
    {
      name: 'codemeta',
      fileNames: ['codemeta.json', 'codemeta.jsonld'],
    },
    {
      name: 'codemirror',
      fileNames: [
        'codemirror.js',
        'codemirror.ts',
        'codemirror.min.js',
        'codemirror.css',
        'codemirror.min.css',
        'codemirror.cjs',
        'codemirror.mjs',
      ],
    },
    {
      name: 'codeowners',
      fileNames: ['codeowners'],
    },
    {
      name: 'codeship',
      fileNames: ['codeship-services.yml', 'codeship-steps.yml'],
    },
    {
      name: 'codeql',
      fileExtensions: ['ql'],
    },
    {
      name: 'coffeelint',
      fileNames: ['coffeelint.json'],
    },
    {
      name: 'coffeelintignore',
      fileExtensions: ['coffeelintignore'],
    },
    {
      name: 'cf',
      fileExtensions: ['cf'],
    },
    {
      name: 'khronos',
      fileExtensions: ['dae', 'collada'],
    },
    {
      name: 'commitizen',
      fileNames: [
        'cz.yml',
        'cz.yaml',
        'cz.toml',
        'cz.json',
        'commitizen.json',
        'commitizen.yml',
        'commitizen.yaml',
        'commitizen.toml',
      ],
      fileExtensions: ['cz', 'czrc', 'cz.json', 'cz.yaml', 'cz.yml', 'cz.toml'],
    },
    {
      name: 'commitlint',
      fileNames: [
        'commitlint.config',
        'commitlint.config.js',
        'commitlint.config.json',
        'commitlint.config.yaml',
        'commitlint.config.yml',
        'commitlint.config.cjs',
        'commitlint.config.mjs',
      ],
      fileExtensions: [
        'commitlintrc',
        'commitlintrc.js',
        'commitlintrc.json',
        'commitlintrc.yaml',
        'commitlintrc.yml',
        'commitlintrc.cjs',
        'commitlintrc.mjs',
      ],
    },
    {
      name: 'compassConfig',
      fileNames: ['config.rb'],
    },
    {
      name: 'compass',
      fileNames: [
        'compass.rb',
        'compass.scss',
        'compass.sass',
        '_compass.scss',
        '_compass.sass',
        'lemonade.scss',
        'lemonade.sass',
      ],
    },
    {
      name: 'cp',
      fileExtensions: ['cp', 'cps'],
    },
    {
      name: 'composer',
      fileNames: ['composer.json'],
    },
    {
      name: 'composerlock',
      fileNames: ['composer.lock'],
    },
    {
      name: 'composerphar',
      fileNames: ['composer.phar'],
    },
    {
      name: 'cdf',
      fileExtensions: ['cdf'],
    },
    {
      name: 'conan',
      fileNames: ['conanfile.py', 'conanfile.txt', 'conanfile', 'conan.conf'],
    },
    {
      name: 'conda',
      fileExtensions: ['condarc'],
    },
    {
      name: 'confluence',
      fileExtensions: ['confluence'],
    },
    {
      name: 'conll',
      fileExtensions: ['conll', 'conllu'],
    },
    {
      name: 'cml',
      fileExtensions: ['cml'],
    },
    {
      name: 'contributors',
      fileExtensions: ['contributors', 'all-contributorsrc'],
    },
    {
      name: 'cordova',
      fileNames: [
        'config.xml',
        'cordova.js',
        'cordova_plugins.js',
        'cordova-config.js',
        'cordova-2.js',
      ],
    },
    {
      name: 'coq',
      fileExtensions: ['coq'],
    },
    {
      name: 'corel',
      fileExtensions: ['cdr', 'cdt', 'cmx', 'ccx', 'cdrx'],
    },
    {
      name: 'coveralls',
      fileExtensions: ['coveralls.yml', 'coveralls.yaml'],
    },
    {
      name: 'cpan',
      fileNames: ['cpanfile', 'meta.yml', 'meta.yaml', 'meta.json'],
    },
    {
      name: 'credits',
      fileNames: ['credits', 'credits.txt', 'credits.md', 'credits.rst'],
    },
    {
      name: 'cpcdocs',
      fileExtensions: ['cpc'],
    },
    {
      name: 'creole',
      fileExtensions: ['creole'],
    },
    {
      name: 'crowdin',
      fileNames: ['crowdin.yml', 'crowdin.yaml'],
    },
    {
      name: 'crystal',
      fileExtensions: ['cr', 'ecr'],
    },
    {
      name: 'csound',
      fileExtensions: ['orc', 'udo', 'sco', 'csc', 'ins'],
      light: true,
    },
    {
      name: 'cspell',
      fileNames: [
        'cspell.config.json',
        'cspell.config.js',
        'cspell.config.cjs',
        'cspell.config.mjs',
        'cspell.config.yaml',
        'cspell.config.yml',
      ],
      fileExtensions: ['cspell', 'cspell.json', 'cspell.yaml', 'cspell.yml'],
    },
    {
      name: 'csscomb',
      fileExtensions: [
        'csscomb.json',
        'csscomb.js',
        'csscomb.yaml',
        'csscomb.yml',
      ],
    },
    {
      name: 'csslint',
      fileExtensions: ['csslintrc'],
    },
    {
      name: 'cssmap',
      fileExtensions: ['css.map'],
    },
    {
      name: 'csv',
      fileExtensions: ['csv', 'tsv'],
    },
    {
      name: 'cucumber',
      fileNames: [
        'cucumber.js',
        'cucumber.ts',
        'cucumber.json',
        'cucumber.cjs',
        'cucumber.mjs',
        'cucumber.yml',
        'cucumber.yaml',
      ],
      fileExtensions: ['feature'],
    },
    {
      name: 'nvidia',
      fileExtensions: ['cu'],
    },
    {
      name: 'cuh',
      fileExtensions: ['cuh'],
    },
    {
      name: 'cue',
      fileExtensions: ['cue'],
    },
    {
      name: 'cuneiform',
      fileExtensions: ['cfl'],
    },
    {
      name: 'curl',
      fileExtensions: ['curlrc'],
    },
    {
      name: 'curry',
      fileExtensions: ['curry'],
    },
    {
      name: 'cwl',
      fileExtensions: ['cwl'],
    },
    {
      name: 'cython',
      fileExtensions: ['pyx', 'pxd', 'pxi'],
    },
    {
      name: 'cypress',
      fileNames: ['cypress.json', 'cypress.env.json'],
    },
    {
      name: 'cpp',
      fileExtensions: [
        'cpp',
        'c++',
        'cc',
        'cxx',
        'ii',
        'mii',
        'ipp',
        'tcc',
        'inl',
      ],
    },
    {
      name: 'csharp',
      fileExtensions: ['cs', 'csx'],
    },
    {
      name: 'csproj',
      fileExtensions: ['csproj'],
    },
    {
      name: 'vcxproj',
      fileExtensions: ['vcxproj', 'vcxproj.filters'],
    },
    // endregion

    // region [D]
    {
      name: 'd3',
      fileNames: [
        'd3.json',
        'd3.js',
        'd3.min.js',
        'd3.v2.js',
        'd3.v3.js',
        'd3.v4.js',
        'd3.v2.min.js',
        'd3.v3.min.js',
        'd3.v4.min.js',
        'd3.v2-min.js',
        'd3.v3-min.js',
        'd3.v4-min.js',
        'd3.cjs',
        'd3.v2.cjs',
        'd3.v3.cjs',
        'd3.v4.cjs',
        'd3.mjs',
        'd3.v2.mjs',
        'd3.v3.mjs',
        'd3.v4.mjs',
      ],
    },
    {
      name: 'dafny',
      fileExtensions: ['dfy', 'dafny'],
    },
    {
      name: 'danmakufu',
      fileExtensions: ['dnh'],
    },
    {
      name: 'dal',
      fileExtensions: ['dal'],
    },
    {
      name: 'dartignore',
      fileExtensions: ['dartignore', 'pubignore'],
    },
    {
      name: 'darcs',
      fileExtensions: ['darcspatch', 'dpatch'],
    },
    {
      name: 'boringignore',
      fileExtensions: ['boringignore'],
    },
    {
      name: 'dashboard',
      fileExtensions: ['cpuprofile', 'heapprofile', 'cloc'],
    },
    {
      name: 'dataweave',
      fileExtensions: ['dwl', 'dfl', 'dw'],
    },
    {
      name: 'dbproj',
      fileExtensions: ['dbproj', 'sqlproj'],
    },
    {
      name: 'dbase',
      fileExtensions: ['dbf'],
    },
    {
      name: 'debian',
      fileExtensions: ['deb', 'udeb', 'control'],
    },
    {
      name: 'deepsource',
      fileExtensions: ['deepsource.toml'],
      light: true,
    },
    {
      name: 'delphi',
      fileExtensions: [
        'int',
        'dfm',
        'nfm',
        'dof',
        'dpk',
        'dpr',
        'dproj',
        'delphi',
      ],
    },
    {
      name: 'denizen',
      fileExtensions: ['dsc'],
    },
    {
      name: 'denorc',
      fileNames: ['deno.json'],
      fileExtensions: ['denorc'],
    },
    {
      name: 'denoignore',
      fileExtensions: ['denoignore'],
    },
    {
      name: 'deno',
      fileNames: ['mod.ts', 'import_map.json'],
      light: true,
    },
    {
      name: 'deps',
      fileNames: [
        'deps.edn',
        'deps.json',
        'deps.yaml',
        'deps.yml',
        'deps.ts',
        'deps.js',
        'DEPS',
        'Dependencies',
      ],
      fileExtensions: ['deps', 'dependencies', 'pydeps'],
    },
    {
      name: 'dependabot',
      fileNames: ['dependabot.yml', 'dependabot.yaml'],
    },
    {
      name: 'detekt',
      fileNames: [
        'detekt.yml',
        'detekt.yaml',
        'detekt-config.yml',
        'detekt-config.yaml',
      ],
    },
    {
      name: 'devcontainer',
      fileExtensions: ['devcontainer.json'],
      fileNames: ['devcontainer.json'],
    },
    {
      name: 'devicetree',
      fileExtensions: ['dts', 'dtsi'],
    },
    {
      name: 'dhall',
      fileExtensions: ['dhall'],
      light: true,
    },
    {
      name: 'dia',
      fileExtensions: ['dia'],
    },
    {
      name: 'digdag',
      fileExtensions: ['dig'],
    },
    {
      name: 'dinophp',
      fileExtensions: ['dino', 'bubble'],
    },
    {
      name: 'dns',
      fileExtensions: ['zone', 'arpa'],
    },
    {
      name: 'diff',
      fileExtensions: ['diff', 'patch', 'diffs'],
    },
    {
      name: 'denorc',
      fileExtensions: ['denorc'],
      light: true,
    },
    {
      name: 'djangoconfig',
      fileNames: ['manage.py', 'wsgi.py', 'settings.py', 'urls.py', 'asgi.py'],
    },
    {
      name: 'django',
      fileExtensions: ['djt', 'django'],
    },
    {
      name: 'dll',
      fileExtensions: ['dll', 'dlc'],
    },
    {
      name: 'do',
      fileExtensions: ['do'],
    },
    {
      name: 'docbook',
      fileExtensions: ['docbook', 'docbkx', 'docb', 'dbk'],
    },
    {
      name: 'doclets',
      fileExtensions: ['doclets', 'doclets.yml', 'doclets.yaml'],
    },
    {
      name: 'docker',
      fileNames: [
        'dockerfile',
        'dockerfile.dev',
        'dockerfile.prod',
        'dockerfile.test',
        'docker/dockerfile',
        'dockerfiles/dockerfile',
      ],
      fileExtensions: ['dockerfile'],
    },
    {
      name: 'dockercompose',
      fileExtensions: [
        'docker-compose.yml',
        'docker-compose.yaml',
        'docker/yml',
        'docker/yaml',
        'dockerfiles/yml',
        'dockerfiles/yaml',
      ],
      fileNames: [
        'compose.yml',
        'compose.yaml',
        'docker-compose.yml',
        'docker-compose.yaml',
        'docker-compose.dev.yml',
        'docker-compose.dev.yaml',
        'docker-compose.prod.yml',
        'docker-compose.prod.yaml',
        'docker-compose.test.yml',
        'docker-compose.test.yaml',
      ],
    },
    {
      name: 'dockerignore',
      fileExtensions: ['dockerignore'],
    },
    {
      name: 'docpad',
      fileExtensions: ['eco'],
    },
    {
      name: 'doczconfig',
      fileExtensions: [
        'doczrc',
        'doczrc.json',
        'doczrc.js',
        'doczrc.ts',
        'doczrc.mjs',
        'doczrc.cjs',
      ],
      fileNames: [
        'docz.config.js',
        'docz.config.ts',
        'docz.config.mjs',
        'docz.config.cjs',
      ],
    },
    {
      name: 'docz',
      fileExtensions: ['docz'],
    },
    {
      name: 'dogescript',
      fileExtensions: ['djs', 'doge'],
    },
    {
      name: 'dojo',
      fileExtensions: ['dojo', 'dojorc'],
      fileNames: ['dojo.js', 'dojo.mjs', 'dojo.cjs'],
    },
    {
      name: 'donejs',
      fileExtensions: ['component'],
    },
    {
      name: 'dosbox',
      fileNames: ['dosbox.conf', 'dosbox.conf.default', 'dosbox-0.74.conf'],
    },
    {
      name: 'dotjs',
      fileExtensions: ['dot', 'def', 'jst'],
    },
    {
      name: 'dotnet',
      fileExtensions: ['net', 'netcore', 'netstandard', 'netframework'],
    },
    {
      name: 'doxyfile',
      fileExtensions: ['doxyfile', 'doxygen'],
      fileNames: ['doxyfile', 'doxygen'],
    },
    {
      name: 'doxygen',
      fileExtensions: ['dox'],
    },
    {
      name: 'dragula',
      fileNames: [
        'dragula.css',
        'dragula.min.css',
        'dragula.js',
        'dragula.min.js',
        'dragula.min.cjs',
        'dragula.min.mjs',
        'dragula.mjs',
        'dragula.cjs',
      ],
    },
    {
      name: 'dragonflybsd',
      fileExtensions: ['dflybsd', 'dragonfly', 'dfly'],
    },
    {
      name: 'drawio',
      fileExtensions: [
        'drawio',
        'dio',
        'dio.svg',
        'dio.png',
        'drawio.svg',
        'drawio.png',
      ],
    },
    {
      name: 'drone',
      fileExtensions: ['drone.yml', 'drone.yaml'],
    },
    {
      name: 'drools',
      fileExtensions: ['drl'],
    },
    {
      name: 'drupal',
      fileExtensions: ['drools'],
    },
    {
      name: 'dub',
      fileNames: ['dub.json', 'dub.sdl', 'dub.selections.json'],
    },
    {
      name: 'dune',
      fileNames: ['dune', 'dune-project', 'dune-workspace'],
    },
    {
      name: 'dustjs',
      fileExtensions: ['dust'],
    },
    {
      name: 'dvc',
      fileExtensions: ['dvc'],
    },
    {
      name: 'dyalog',
      fileExtensions: ['dyalog', 'dyapp', 'mipage'],
    },
    {
      name: 'dylan',
      fileExtensions: ['dylan', 'dyl', 'intr', 'lid'],
    },
    {
      name: 'dylib',
      fileExtensions: ['dylib', 'bundle', 'pkg'],
    },
    // endregion

    // region [E]
    {
      name: 'e',
      fileExtensions: ['e'],
    },
    {
      name: 'eagle',
      fileExtensions: ['eup'],
    },
    {
      name: 'earthly',
      fileNames: ['Earthfile'],
      fileExtensions: ['earth', 'earthfile'],
    },
    {
      name: 'earthlyignore',
      fileExtensions: ['earthignore', 'earthlyignore'],
    },
    {
      name: 'eas',
      fileNames: ['store.config.json'],
    },
    {
      name: 'easybuild',
      fileExtensions: ['eb'],
    },
    {
      name: 'ec',
      fileExtensions: ['ec', 'eh'],
    },
    {
      name: 'ecere',
      fileExtensions: ['epj'],
    },
    {
      name: 'clipse',
      fileExtensions: ['ecl', 'ecl.txt'],
    },
    {
      name: 'eclipse',
      fileExtensions: ['eclipse', 'classpath', 'project', 'cproject'],
    },
    {
      name: 'edge',
      fileExtensions: ['edge'],
    },
    {
      name: 'editorconfig',
      fileNames: ['.editorconfig.json'],
      fileExtensions: ['editorconfig', 'ecrc'],
    },
    {
      name: 'egg',
      fileNames: [
        'config.default.js',
        'config.prod.js',
        'config.test.js',
        'config.local.js',
        'config.unittest.js',
      ],
    },
    {
      name: 'electron',
      fileNames: ['electron-builder.yml', 'electron-builder.json'],
      fileExtensions: ['compilerc', 'compilerc.json'],
    },
    {
      name: 'electronasar',
      fileExtensions: ['asar'],
    },
    {
      name: 'electronforge',
      fileNames: [
        'forge.config.js',
        'forge.config.cjs',
        'forge.config.mjs',
        'forge.config.ts',
        '.forge.config.js',
        '.forge.config.cjs',
        '.forge.config.mjs',
        '.forge.config.ts',
      ],
      fileExtensions: ['electronforge'],
    },
    {
      name: 'elementaryos',
      fileNames: ['.appdata.xml'],
    },
    {
      name: 'eiffel',
      fileExtensions: ['eif', 'ecf', 'eiffel'],
    },
    {
      name: 'ejs',
      fileExtensions: ['ejs'],
    },
    {
      name: 'elastic',
      fileExtensions: ['es', 'edql'],
    },
    {
      name: 'elasticconf',
      fileNames: ['elasticsearch.yml', 'elasticsearch.yaml'],
    },
    {
      name: 'ex',
      fileExtensions: ['ex', 'exs', 'eex', 'leex', 'heex', 'elixir'],
    },
    {
      name: 'elm',
      fileExtensions: ['elm'],
    },
    {
      name: 'emacs',
      fileExtensions: ['emacs', 'emacs.conf', 'emacsconfig', 'emacsrc'],
    },
    {
      name: 'emacslisp',
      fileExtensions: [
        'el',
        'elc',
        'eld',
        'elisp',
        'gnus',
        'emacs-lisp',
        'ede',
        'viper',
      ],
    },
    {
      name: 'emacscask',
      fileExtensions: ['cask'],
      fileNames: ['cask', 'Caskfile'],
    },
    {
      name: 'email',
      fileExtensions: ['eml', 'email', 'mbox', 'mail', 'mailmap'],
    },
    {
      name: 'embercli',
      fileExtensions: ['ember-cli', 'ember-cli-build'],
    },
    {
      name: 'ember',
      fileExtensions: ['ember', 'ember.json'],
    },
    {
      name: 'emberscript',
      fileExtensions: ['em', 'emberscript'],
    },
    {
      name: 'ensime',
      fileExtensions: ['ensime'],
    },
    {
      name: 'eq',
      fileExtensions: ['eq'],
    },
    {
      name: 'esdoc',
      fileExtensions: [
        'esdoc',
        'esdoc.json',
        'esdoc.js',
        'esdoc.cjs',
        'esdoc.mjs',
        'esdoc.yaml',
        'esdoc.yml',
      ],
    },
    {
      name: 'eslint',
      fileExtensions: [
        'eslintrc',
        'eslintrc.js',
        'eslintrc.cjs',
        'eslintrc.mjs',
        'eslintrc.yaml',
        'eslintrc.yml',
        'eslintrc.json',
        'eslintrc.ts',
      ],
    },
    {
      name: 'eslintignore',
      fileExtensions: ['eslintcache', 'eslintignore'],
    },
    {
      name: 'erb',
      fileExtensions: ['erb', 'erb.deface', 'erb.deface.orig', 'ru'],
    },
    {
      name: 'erlang',
      fileExtensions: [
        'erc',
        'erl',
        'erlang',
        'hrl',
        'beam',
        'escript',
        'yaws',
        'xrl',
        'yrl',
      ],
    },
    {
      name: 'makefile',
      fileExtensions: ['emakerfile', 'emakefile', 'emake'],
      fileNames: ['emakefile', 'emake'],
    },
    {
      name: 'excel',
      fileExtensions: [
        'xls',
        'xlsx',
        'xlsm',
        'xlsb',
        'xlm',
        'xltm',
        'xltx',
        'xlt',
        'xla',
        'xlam',
        'odx',
      ],
    },
    {
      name: 'expo',
      fileNames: [
        'app.json',
        'app.config.js',
        'app.config.json',
        'app.config.ts',
        'app.config.cjs',
        'app.config.mjs',
      ],
    },
    {
      name: 'extjs',
      fileNames: [
        'extjs.js',
        'extjs.cjs',
        'extjs.mjs',
        'extjs-ext.js',
        'extjs-ext.cjs',
        'extjs-ext.mjs',
        'extjs-build.js',
      ],
    },
    // endregion

    // region [F]
    {
      name: 'fabric',
      fileNames: ['fabric.mod.json'],
    },
    {
      name: 'fabfile',
      fileNames: ['fabfile.py'],
    },
    {
      name: 'factor',
      fileExtensions: ['factor', 'factor-rc', 'factor-boot-rc'],
    },
    {
      name: 'falcon',
      fileExtensions: ['fal', 'falcon'],
    },
    {
      name: 'fancy',
      fileExtensions: ['fy', 'fancypack'],
    },
    {
      name: 'fakefile',
      fileNames: ['fakefile'],
    },
    {
      name: 'fantom',
      fileExtensions: ['fan', 'fantom'],
    },
    {
      name: 'fasta',
      fileExtensions: [
        'fasta',
        'fa',
        'faa',
        'mpfa',
        'fna',
        'faa',
        'frn',
        'fsa',
        'fas',
        'fastq',
        'fq',
        'fqs',
        'seq',
        'ffn',
      ],
    },
    {
      name: 'fastlane',
      fileNames: [
        'fastfile',
        'appfile',
        'snapshotfile',
        'matchfile',
        'pluginfile',
        'gymfile',
      ],
    },
    {
      name: 'fauna',
      fileExtensions: ['fql', 'fauna', 'faunaql', 'faunarc'],
    },
    {
      name: 'faust',
      fileExtensions: ['dsp', 'faust'],
    },
    {
      name: 'favicon',
      fileNames: [
        'favicon.ico',
        'favicon.png',
        'favicon.gif',
        'favicon.jpg',
        'favicon.jpeg',
        'favicon.svg',
      ],
    },
    {
      name: 'fbx',
      fileExtensions: ['fbx'],
    },
    {
      name: 'fexl',
      fileExtensions: ['fexl', 'fxl'],
    },
    {
      name: 'figma',
      fileExtensions: ['fig', 'figma'],
    },
    {
      name: 'finaldraft',
      fileExtensions: ['fdx', 'fdxtpl'],
    },
    {
      name: 'finder',
      fileExtensions: ['_MACOSX', 'DS_Store', '__MACOSX'],
    },
    {
      name: 'firebaserc',
      fileExtensions: ['firebaserc'],
    },
    {
      name: 'firestore',
      fileNames: ['firestore.rules', 'firestore.indexes.json'],
    },
    {
      name: 'firebase',
      fileNames: ['firebase.json'],
    },
    {
      name: 'fitbit',
      fileExtensions: ['fba'],
    },
    {
      name: 'firebasebolt',
      fileExtensions: ['bolt'],
    },
    {
      name: 'firefox',
      fileExtensions: ['xpi', 'webapp'],
    },
    {
      name: 'fiddle',
      fileNames: [
        'electron-fiddle',
        'electron-fiddle.json',
        'electron-fiddle.zip',
        'electron-fiddle.rpm',
      ],
    },
    {
      name: 'flash',
      fileExtensions: ['swf', 'swc', 'flash'],
    },
    {
      name: 'flask',
      fileNames: ['flask', 'flask.py', 'flaskapp.py'],
    },
    {
      name: 'floobits',
      fileExtensions: ['flooignore', 'floorc.json'],
    },
    {
      name: 'flow',
      fileExtensions: ['flowconfig', 'flow'],
      light: true,
    },
    {
      name: 'flutter',
      fileExtensions: [
        'flutter-plugins',
        'flutter-plugins-dependencies',
        'packages',
        'metadata',
      ],
    },
    {
      name: 'flutterlock',
      fileNames: ['pubspec.yaml', 'pubspec.lock'],
    },
    {
      name: 'flux',
      fileExtensions: ['flux', 'fluxc', 'fx'],
    },
    {
      name: 'fontbitmap',
      fileExtensions: [
        'bdf',
        'pcf',
        'psf',
        'fnt',
        'fon',
        'snf',
        'flf',
        'tlf',
        'psftx',
        'dwf',
        'bmf',
      ],
    },
    {
      name: 'fontforge',
      fileExtensions: ['ff', 'sfd', 'pe'],
    },
    {
      name: 'fossil',
      fileExtensions: [
        'fossil',
        'fossil-settings',
        'fossil-ignore',
        'fossil-wiki',
      ],
      fileNames: ['.fslckout', '_FOSSIL_', 'fossil.exe'],
    },
    {
      name: 'ftr',
      fileExtensions: ['ftr', 'trm'],
    },
    {
      name: 'fork',
      fileExtensions: ['issuetracker', 'fork'],
    },
    {
      name: 'forth',
      fileExtensions: ['4th', 'forth', 'frt', 'fth'],
    },
    {
      name: 'fortran',
      fileExtensions: ['f77', 'f90', 'f95', 'f03', 'f08', 'f15', 'for', 'fpp'],
    },
    {
      name: 'fossa',
      fileExtensions: ['fossa.yml', 'fossa.yaml', 'fossa.local.yml'],
    },
    {
      name: 'fossaignore',
      fileExtensions: ['fossaignore'],
    },
    {
      name: 'fountain',
      fileExtensions: ['fountain', 'ftn'],
    },
    {
      name: 'foxpro',
      fileExtensions: ['fxp'],
    },
    {
      name: 'franca',
      fileExtensions: ['fidl', 'franca', 'fdl', 'fdepl'],
    },
    {
      name: 'freedesktop',
      fileExtensions: [
        'desktop',
        'desktop.in',
        'menu',
        'mime',
        'mimeapps',
        'fd.o',
      ],
    },
    {
      name: 'freedos',
      fileExtensions: ['sys', 'dos', 'dxelib'],
    },
    {
      name: 'freemarker',
      fileExtensions: ['ftl', 'freemarker'],
    },
    {
      name: 'freemat',
      fileExtensions: ['mat'],
    },
    {
      name: 'frege',
      fileExtensions: ['fr', 'frege'],
    },
    {
      name: 'fsharp',
      fileExtensions: ['fs', 'fsi', 'fsx', 'fsscript', 'fsproj'],
    },
    {
      name: 'fthtml',
      fileExtensions: ['fthtml'],
    },
    {
      name: 'fuelux',
      fileNames: ['fuelux.css', 'fuelux.js', 'fuelux.min.css', 'fuelux.min.js'],
    },
    {
      name: 'fusebox',
      fileNames: [
        'fuse.js',
        'fusebox.js',
        'fusebox.ts',
        'fusebox.mjs',
        'fuse.mjs',
        'fuse.ts',
      ],
    },
    {
      name: 'futhark',
      fileExtensions: ['fut', 'futhark'],
    },
    // endregion

    // region [G]
    {
      name: 'galaxy',
      fileNames: ['galaxy.yml', 'galaxy.yaml', 'galaxy.ini'],
    },
    {
      name: 'galen',
      fileExtensions: ['gspec', 'gtest'],
    },
    {
      name: 'gamemaker',
      fileExtensions: ['gml'],
    },
    {
      name: 'gams',
      fileExtensions: ['gms', 'gmsx', 'gmsi', 'gmsinc', 'gmsincx'],
    },
    {
      name: 'gap',
      fileExtensions: ['gi', 'gap'],
    },
    {
      name: 'gss',
      fileExtensions: ['gss'],
    },
    {
      name: 'gatsby',
      fileNames: [
        'gatsby.js',
        'gatsby.cjs',
        'gatsby.mjs',
        'gatsby.ts',
        'gatsby-config.js',
        'gatsby-config.ts',
        'gatsby-config.cjs',
        'gatsby-config.mjs',
        'gatsby-node.js',
        'gatsby-node.ts',
        'gatsby-node.cjs',
        'gatsby-node.mjs',
        'gatsby-ssr.js',
        'gatsby-ssr.cjs',
        'gatsby-ssr.mjs',
        'gatsby-ssr.ts',
        'gatsby-browser.js',
        'gatsby-browser.cjs',
        'gatsby-browser.mjs',
        'gatsby-browser.ts',
        'gatsby.config.js',
        'gatsby.config.cjs',
        'gatsby.config.mjs',
        'gatsby.config.ts',
      ],
    },
    {
      name: 'gauge',
      fileExtensions: ['spec'],
      light: true,
    },
    {
      name: 'gcp',
      fileExtensions: ['gcloud', 'gcloudignore'],
    },
    {
      name: 'gcode',
      fileExtensions: [
        'gcode',
        'nc',
        'tap',
        'cnc',
        'apt',
        'fnc',
        'gc',
        'dnc',
        'ncf',
        'ncc',
        'maz',
        'hnc',
        'knc',
        'g00',
      ],
    },
    {
      name: 'gdb',
      fileExtensions: ['gdb'],
    },
    {
      name: 'gemfile',
      fileNames: ['gemfile.lock'],
    },
    {
      name: 'gemini',
      fileExtensions: ['gmi', 'gemini'],
    },
    {
      name: 'genshi',
      fileExtensions: ['kid'],
    },
    {
      name: 'genstat',
      fileExtensions: ['gen', 'gpi'],
    },
    {
      name: 'gentoo',
      fileExtensions: ['ebuild', 'eclass', 'ekeyword', 'euse'],
    },
    {
      name: 'geojson',
      fileExtensions: ['geojson', 'geo.json', 'topojson', 'topo.json'],
    },
    {
      name: 'ghostscript',
      fileExtensions: ['ghostscript'],
    },
    {
      name: 'gimp',
      fileExtensions: ['xcf', 'gbr', 'ggr', 'gih', 'vbr'],
    },
    {
      name: 'gitlab',
      fileExtensions: ['gitlab-ci.yml', 'gitlab-ci.yaml'],
    },
    {
      name: 'gitignore',
      fileExtensions: ['gitignore', 'keep', 'gitkeep', 'lfsconfig'],
    },
    {
      name: 'gitpod',
      fileExtensions: ['gitpod.yml', 'gitpod.yaml'],
    },
    {
      name: 'glade',
      fileExtensions: ['glade'],
    },
    {
      name: 'gleam',
      fileExtensions: ['gleam'],
    },
    {
      name: 'glide',
      fileNames: ['glide.lock', 'glide.yaml', 'glide.yml'],
    },
    {
      name: 'glitter',
      fileExtensions: ['glitter', 'glitterrc'],
    },
    {
      name: 'gltf',
      fileExtensions: ['gltf', 'glb'],
    },
    {
      name: 'pointwise',
      fileExtensions: ['glf'],
    },
    {
      name: 'glyphs',
      fileExtensions: ['glyphs'],
    },
    {
      name: 'gn',
      fileExtensions: ['gni', 'gn', 'gnl'],
    },
    {
      name: 'gnome',
      fileExtensions: ['gnome', 'gtk'],
    },
    {
      name: 'gnu',
      fileNames: [
        'AGPL',
        'GPL',
        'LGPL',
        'COPYING',
        'COPYING.LESSER',
        'ALGPL',
        'GFDL',
      ],
      fileExtensions: [
        'gnu',
        'gpl',
        'gplv2',
        'gplv3',
        'lgpl',
        'lgplv2',
        'lgplv3',
      ],
    },
    {
      name: 'gnuplot',
      fileExtensions: ['gp', 'gnuplot', 'plot', 'plt'],
    },
    {
      name: 'goconfig',
      fileNames: ['go.mod', 'go.sum', 'go.sub', 'go.work'],
    },
    {
      name: 'goTemplate',
      fileExtensions: ['gotmpl', 'tmpl', 'gohtml'],
    },
    {
      name: 'godot',
      fileExtensions: ['gd', 'godot', 'tres', 'tscn', 'scn'],
    },
    {
      name: 'golo',
      fileExtensions: ['golo'],
    },
    {
      name: 'gosu',
      fileExtensions: ['gs', 'gsx', 'gst', 'gsp', 'vark'],
    },
    {
      name: 'goctl',
      fileExtensions: ['api'],
    },
    {
      name: 'goreleaser',
      fileExtensions: ['goreleaser', 'goreleaser.yml', 'goreleaser.yaml'],
    },
    {
      name: 'gradle',
      fileExtensions: ['gradle'],
    },
    {
      name: 'gradlekts',
      fileExtensions: ['gradle.kts'],
    },
    {
      name: 'gradlew',
      fileNames: ['gradlew', 'gradlew.bat'],
    },
    {
      name: 'grain',
      fileExtensions: ['grain'],
    },
    {
      name: 'gf',
      fileExtensions: ['gf'],
    },
    {
      name: 'graphcool',
      fileExtensions: ['graphcool'],
    },
    {
      name: 'grapher',
      fileExtensions: ['grapher', 'gcx'],
    },
    {
      name: 'graphql',
      fileExtensions: ['graphql', 'gql', 'graphqls', 'gqls'],
    },
    {
      name: 'graphqlconfig',
      fileExtensions: [
        'gqlconfig',
        'graphqlconfig',
        'graphql.config.js',
        'graphql.config.cjs',
        'graphql.config.mjs',
        'graphql.config.ts',
        'graphql.config.json',
        'graphql.config.yaml',
        'graphql.config.yml',
        'graphqlrc',
        'graphqlrc.js',
        'graphqlrc.cjs',
        'graphqlrc.mjs',
        'graphqlrc.ts',
        'graphqlrc.json',
      ],
    },
    {
      name: 'graphviz',
      fileExtensions: ['gv', 'dot', 'graphviz'],
    },
    {
      name: 'gql-codegen',
      fileNames: ['codegen.yml', 'codegen.yaml', 'codegen.json'],
    },
    {
      name: 'gravit',
      fileExtensions: ['gravit', 'gravitdesign', 'gvdesign'],
    },
    {
      name: 'greenkeeper',
      fileNames: ['greenkeeper.json'],
    },
    {
      name: 'gridsome',
      fileNames: [
        'gridsome.config.js',
        'gridsome.config.cjs',
        'gridsome.config.mjs',
        'gridsome.config.ts',
        'gridsome.client.js',
        'gridsome.client.cjs',
        'gridsome.client.mjs',
        'gridsome.client.ts',
        'gridsome.server.js',
        'gridsome.server.cjs',
        'gridsome.server.mjs',
        'gridsome.server.ts',
      ],
    },
    {
      name: 'groovy',
      fileExtensions: ['groovy', 'grt', 'gtpl', 'gpp', 'gy', 'gvy', 'gdsl'],
    },
    {
      name: 'groovyfile',
      fileNames: ['groovyfile', 'groovyfile.groovy'],
    },
    {
      name: 'gruntfile',
      fileNames: [
        'gruntfile',
        'gruntfile.js',
        'gruntfile.cjs',
        'gruntfile.mjs',
        'gruntfile.ts',
        'grunt/ts',
        'grunt/js',
        'grunt/cjs',
        'grunt/mjs',
        'gruntfiles/ts',
        'gruntfiles/js',
        'gruntfiles/cjs',
        'gruntfiles/mjs',
      ],
    },
    {
      name: 'gulpfile',
      fileNames: [
        'gulpfile',
        'gulpfile.js',
        'gulpfile.cjs',
        'gulpfile.mjs',
        'gulpfile.ts',
        'gulp/ts',
        'gulp/js',
        'gulp/cjs',
        'gulp/mjs',
        'gulpfiles/ts',
        'gulpfiles/js',
        'gulpfiles/cjs',
        'gulpfiles/mjs',
      ],
    },
    // endregion

    // region [H]
    {
      name: 'hh',
      fileExtensions: ['objh', 'h', 'hpp', 'tcc', 'hxx', 'h++', 'hm'],
    },
    {
      name: 'hack',
      fileExtensions: ['hack', 'hh', 'hhi', 'hhconfig'],
    },
    {
      name: 'haml',
      fileExtensions: ['haml', 'haml.deface', 'hamlcoffee', 'hamlc'],
    },
    {
      name: 'hardhat',
      fileNames: [
        'hardhat.config.js',
        'hardhat.config.cjs',
        'hardhat.config.mjs',
        'hardhat.config.ts',
      ],
    },
    {
      name: 'hasura',
      fileNames: [
        'hasura.yml',
        'hasura.yaml',
        'hasura.config.yml',
        'hasura.config.yaml',
      ],
    },
    {
      name: 'harbour',
      fileExtensions: ['prg', 'ch', 'hrb', 'hb'],
    },
    {
      name: 'hcl',
      fileExtensions: ['hcl', 'workflow'],
    },
    {
      name: 'haskell',
      fileExtensions: [
        'hs',
        'lhs',
        'hsc',
        'c2hs',
        'hsig',
        'haskell',
        'hs-boot',
      ],
    },
    {
      name: 'haskellconfig',
      fileNames: [
        'haskellconfig.json',
        'haskellconfig.yaml',
        'haskellconfig.yml',
      ],
    },
    {
      name: 'haxedevelop',
      fileExtensions: ['hxproj'],
    },
    {
      name: 'haxe',
      fileExtensions: ['hx', 'hxml', 'hxs', 'hxsl', 'hxp', 'haxe'],
    },
    {
      name: 'haxelib',
      fileNames: ['haxelib.json'],
    },
    {
      name: 'helm',
      fileExtensions: ['helm', 'helmrc', 'helmfile'],
    },
    {
      name: 'helmignore',
      fileExtensions: ['helmignore'],
    },
    {
      name: 'helmcharts',
      fileNames: [
        'chart.yaml',
        'chart.yml',
        'values.yaml',
        'values.yml',
        'helmfile.yml',
        'helmfile.yaml',
      ],
    },
    {
      name: 'question',
      fileExtensions: ['help', 'hlp', 'chm'],
    },
    {
      name: 'heroku',
      fileNames: ['.buildpacks', 'Procfile', 'Procfile.windows'],
    },
    {
      name: 'herokuignore',
      fileExtensions: ['herokuignore', 'slugignore'],
    },
    {
      name: 'hex',
      fileExtensions: [
        'hex',
        'hxl',
        'hxh',
        'obl',
        'obh',
        'ihex',
        'hexfile',
        'ihe',
        'ihx',
      ],
    },
    {
      name: 'hie',
      fileNames: ['hie.yaml', 'hie.yml'],
    },
    {
      name: 'histoire',
      fileNames: [
        'histoire.config.js',
        'histoire.config.jsx',
        'histoire.config.cjs',
        'histoire.config.mjs',
        'histoire.config.ts',
        'histoire.config.tsx',
      ],
      fileExtensions: [
        'histoire',
        'histoire.js',
        'histoire.jsx',
        'histoire.cjs',
        'histoire.mjs',
        'histoire.ts',
        'histoire.tsx',
        'histoireconfig',
      ],
    },
    {
      name: 'histoirestories',
      fileExtensions: ['story.vue', 'stories.vue'],
    },
    {
      name: 'history',
      fileNames: ['history', 'history.txt', 'history.md', 'historyfile'],
      fileExtensions: [
        'history',
        'bash_history',
        'fish_history',
        'zsh_history',
      ],
    },
    {
      name: 'hjson',
      fileExtensions: ['hjson'],
    },
    {
      name: 'hlsl',
      fileExtensions: ['hlsl', 'hlsli'],
    },
    {
      name: 'hc',
      fileExtensions: ['hc', 'hc.z'],
    },
    {
      name: 'homeassistant',
      fileExtensions: ['homeassistant'],
    },
    {
      name: 'hoplon',
      fileExtensions: ['hl', 'hoplon'],
    },
    {
      name: 'horusec',
      fileNames: ['horusec-config.json'],
      fileExtensions: ['horusec', 'horusecrc', 'horusecignore'],
    },
    {
      name: 'hosts',
      fileExtensions: ['hosts', 'host'],
      fileNames: ['hosts', 'host'],
    },
    {
      name: 'houdini',
      fileExtensions: [
        'hda',
        'houdini',
        'houdinicomp',
        'houdiniparm',
        'vfl',
        'hip',
        'i3d',
        'picnc',
      ],
    },
    {
      name: 'houndci',
      fileExtensions: ['hound.yml', 'hound.yaml'],
    },
    {
      name: 'hp',
      fileExtensions: ['hp', 'hpgl', 'hpg'],
    },
    {
      name: 'http',
      fileExtensions: ['http', 'rest'],
    },
    {
      name: 'htmlhint',
      fileExtensions: ['htmlhintrc'],
    },
    {
      name: 'hugo',
      fileNames: ['config.toml'],
    },
    {
      name: 'hunspell',
      fileExtensions: ['aff', 'dic'],
    },
    {
      name: 'husky',
      fileExtensions: [
        'huskyrc',
        'huskyrc.json',
        'huskyrc.yaml',
        'huskyrc.yml',
        'huskyrc.js',
        'huskyrc.cjs',
        'huskyrc.mjs',
        'huskyrc.ts',
      ],
    },
    {
      name: 'hy',
      fileExtensions: ['hy'],
    },
    {
      name: 'hygen',
      fileExtensions: [
        'hygen.js',
        'hygen.ts',
        'hygen.cjs',
        'hygen.mjs',
        'ejs.t',
      ],
    },
    {
      name: 'hyper',
      fileExtensions: ['hyper.js', 'hyper.ts', 'hyper.cjs', 'hyper.mjs'],
    },
    {
      name: 'hypestyle',
      fileNames: [
        'hypestyle.json',
        'hypestyle.config.js',
        'hypestyle.config.cjs',
        'hypestyle.config.mjs',
        'hypestyle.config.ts',
      ],
    },
    {
      name: 'hypr',
      fileExtensions: ['hypr', 'hyprlive', 'hypr.live'],
    },
    // endregion

    // region [I]
    {
      name: 'i18n',
      fileExtensions: ['po', 'pot', 'mo', 'strings'],
    },
    {
      name: 'i18nlang',
      fileExtensions: [
        'translation/js',
        'translation/json',
        'translation/yaml',
        'translation/yml',
        'translation/ts',
        'translation/rst',
        'translation/md',
        'translations/js',
        'translations/json',
        'translations/yaml',
        'translations/yml',
        'translations/ts',
        'translations/rst',
        'translations/md',
        'lang/js',
        'lang/json',
        'lang/yaml',
        'lang/yml',
        'lang/ts',
        'lang/rst',
        'lang/md',
        'locale/js',
        'locale/json',
        'locale/yaml',
        'locale/yml',
        'locale/ts',
        'locale/rst',
        'locale/md',
        'locales/js',
        'locales/json',
        'locales/yaml',
        'locales/yml',
        'locales/ts',
        'locales/rst',
        'locales/md',
      ],
    },
    {
      name: 'icl',
      fileExtensions: ['icl'],
    },
    {
      name: 'icomoon',
      fileNames: ['icomoon.json', 'icomoon.dev.json', 'icomoon.prod.json'],
    },
    {
      name: 'icu',
      fileExtensions: ['icu', 'nrm'],
    },
    {
      name: 'idea',
      fileExtensions: ['iml', 'icls'],
    },
    {
      name: 'idris',
      fileExtensions: ['idr', 'lidr', 'ipkg', 'ibc', 'idris'],
    },
    {
      name: 'idl',
      fileExtensions: ['dlm', 'idl'],
    },
    {
      name: 'igor',
      fileExtensions: ['ipf'],
    },
    {
      name: 'imba',
      fileExtensions: ['imba', 'imba2'],
    },
    {
      name: 'imgbot',
      fileExtensions: ['imgbotconfig'],
    },
    {
      name: 'informix',
      fileExtensions: ['4gl'],
    },
    {
      name: 'indexpy',
      fileNames: ['__init__.py'],
    },
    {
      name: 'infopath',
      fileExtensions: ['xsn', 'xsf', 'xtp2', 'infopathxml'],
    },
    {
      name: 'inform',
      fileExtensions: ['ni', 'i7x'],
    },
    {
      name: 'ink',
      fileExtensions: ['ink', 'ink2'],
    },
    {
      name: 'inkscape',
      fileExtensions: ['inx'],
      light: true,
    },
    {
      name: 'inno',
      fileExtensions: ['iss', 'isl'],
    },
    {
      name: 'iso',
      fileExtensions: ['iso', 'udf', 'img', 'nrg', 'cda', 'cdr'],
    },
    {
      name: 'istanbul',
      fileExtensions: ['nycrc.json', 'nycrc.yml', 'nycrc.yaml', 'nycrc'],
    },
    {
      name: 'istanbulconf',
      fileNames: [
        'nyc.config.js',
        'nyc.config.cjs',
        'nyc.config.mjs',
        'nyc.config.ts',
        'nyc.config.json',
        'nyc.config.yaml',
        'nyc.config.yml',
      ],
    },
    {
      name: 'io',
      fileExtensions: ['io'],
    },
    {
      name: 'iodine',
      fileExtensions: ['iodine'],
    },
    {
      name: 'ioke',
      fileExtensions: ['ik'],
    },
    {
      name: 'ionic',
      fileNames: [
        'ionic.config.json',
        'ionic.config.js',
        'ionic.config',
        'ionic.project',
        'ionic.project.json',
        'ionic.project.js',
      ],
    },
    {
      name: 'isabelle',
      fileExtensions: ['thy'],
      light: true,
    },

    // endregion

    // region [J]
    {
      name: 'j',
      fileExtensions: ['ij', 'ijs'],
    },
    {
      name: 'pug',
      fileExtensions: ['pug', 'jade'],
    },
    {
      name: 'puglint',
      fileExtensions: [
        'jade-lintrc',
        'jade-lintrc.js',
        'jade-lintrc.cjs',
        'jade-lintrc.mjs',
        'jade-lintrc.json',
        'pug-lintrc',
        'pug-lintrc.js',
        'pug-lintrc.cjs',
        'pug-lintrc.mjs',
        'pug-lintrc.json',
      ],
    },
    {
      name: 'jake',
      fileExtensions: ['jake'],
    },
    {
      name: 'jakefile',
      fileNames: ['Jakefile', 'jakefile.js', 'jakefile.cjs', 'jakefile.mjs'],
    },
    {
      name: 'jakt',
      fileExtensions: ['jakt'],
    },
    {
      name: 'janet',
      fileExtensions: ['janet', 'jpm'],
    },
    {
      name: 'jasmine',
      fileNames: [
        'jasmine.json',
        'jasmine.js',
        'jasmine.cjs',
        'jasmine.mjs',
        'jasmine.ts',
        'jasmine.config.js',
        'jasmine.config.ts',
        'jasmine.dev.coffee',
      ],
    },
    {
      name: 'js',
      fileExtensions: [
        'jsb',
        'jsm',
        'jspre',
        'jscript',
        'jslib',
        'htc',
        'pjs',
        'ssjs',
      ],
    },
    {
      name: 'jbuilder',
      fileExtensions: ['jbuilder'],
    },
    {
      name: 'jekyll',
      fileNames: ['_config.yml', '_config.yaml'],
      fileExtensions: ['jekyll'],
    },
    {
      name: 'jellycut',
      fileExtensions: ['jellycut', 'jelly'],
    },
    {
      name: 'jenkins',
      fileNames: ['Jenkinsfile', 'jenkinsfile.groovy', 'jenkinsfile.kt'],
      fileExtensions: ['jenkinsfile', 'jenkins'],
    },
    {
      name: 'jest',
      fileNames: [
        'jest.config.json',
        'jest.config.js',
        'jest.config.cjs',
        'jest.config.mjs',
        'jest.config.ts',
        'jest.setup.json',
        'jest.setup.js',
        'jest.setup.cjs',
        'jest.setup.mjs',
        'jest.setup.ts',
        'jest.teardown.js',
        'jest.teardown.json',
        'jest.teardown.cjs',
        'jest.teardown.mjs',
        'jest.teardown.ts',
        'jest.babel.json',
        'jest.babel.js',
        'jest.babel.cjs',
        'jest.babel.mjs',
        'jest.babel.ts',
        'jest.config.tsx',
        'jest.config.jsx',
      ],
      fileExtensions: ['jest/js', 'jest/ts', 'jest/cjs', 'jest/mjs'],
    },
    {
      name: 'jestrc',
      fileNames: [
        '.jestrc',
        '.jestrc.js',
        '.jestrc.cjs',
        '.jestrc.mjs',
        '.jestrc.json',
        '.jestrc.ts',
      ],
    },
    {
      name: 'theme',
      fileExtensions: ['theme', 'theme.json'],
    },
    {
      name: 'jfd',
      fileExtensions: ['jfd', 'form'],
    },
    {
      name: 'jinja',
      fileExtensions: ['jinja', 'jinja2', 'j2', 'jinja-html', 'jnj2', 'jnj'],
    },
    {
      name: 'jison',
      fileExtensions: ['jison', 'jisonlex'],
    },
    {
      name: 'jolie',
      fileExtensions: ['ol', 'iol', 'jolie'],
    },
    {
      name: 'joomla',
      fileExtensions: ['joomla', 'smarty'],
    },
    {
      name: 'jquery',
      fileNames: [
        'jquery.js',
        'jquery.min.js',
        'jquery.slim.js',
        'jquery.slim.min.js',
        'jquery.latest.js',
        'jquery.latest.min.js',
        'jquery.es6',
        'jquery.slim.es6',
        'jquery.coffee',
        'jquery.slim.coffee',
      ],
    },
    {
      name: 'jsbeautify',
      fileExtensions: ['jsbeautify', 'jsbeautifyrc', 'jsbeautifyrc.json'],
    },
    {
      name: 'jscs',
      fileExtensions: [
        'jscsrc',
        'jscs.json',
        'jscs.js',
        'jscs.cjs',
        'jscs.mjs',
      ],
    },
    {
      name: 'jshint',
      fileExtensions: ['jshintrc'],
    },
    {
      name: 'jshintignore',
      fileExtensions: ['jshintignore'],
    },
    {
      name: 'jsmap',
      fileExtensions: ['js.map', 'cjs.map', 'mjs.map'],
    },
    {
      name: 'jsconfig',
      fileNames: [
        'jsconfig.json',
        'jsconfig.js',
        'jsconfig.cjs',
        'jsconfig.mjs',
      ],
      fileExtensions: [
        'jsconfig.json',
        'jsconfig.js',
        'jsconfig.cjs',
        'jsconfig.mjs',
      ],
    },
    {
      name: 'jscpd',
      fileExtensions: ['jscpd', 'jscpd.json', 'jscpd.html', 'jscpd.xml'],
    },
    {
      name: 'json5',
      fileExtensions: ['json5'],
    },
    {
      name: 'jsonld',
      fileExtensions: ['jsonld', 'ldjson', 'json-ld', 'jsonl'],
    },
    {
      name: 'jsonnet',
      fileExtensions: ['jsonnet', 'libsonnet', 'jsonn'],
    },
    {
      name: 'jsp',
      fileExtensions: ['jsp', 'jspf', 'jsf', 'jspx', 'jhtm', 'jhtml'],
    },
    {
      name: 'jss',
      fileExtensions: ['jss'],
    },
    {
      name: 'julia',
      fileExtensions: ['jl', 'julia'],
    },
    {
      name: 'jupyter',
      fileNames: ['Notebook'],
      fileExtensions: ['ipynb'],
    },
    {
      name: 'junos',
      fileExtensions: ['jos', 'junos', 'slax'],
    },
    {
      name: 'jwt',
      fileExtensions: ['jwt'],
    },
    // endregion

    // region [M]
    {
      name: 'macaulay',
      fileExtensions: ['m2'],
    },
    {
      name: 'magento',
      fileExtensions: ['mage'],
    },
    {
      name: 'magit',
      fileExtensions: ['magit'],
    },
    {
      name: 'make',
      fileExtensions: ['mak', 'mk', 'mms', 'make', 'am'],
    },
    {
      name: 'makefile',
      fileNames: [
        'makefile',
        'Makefile',
        'BSDmakefile',
        'GNUmakefile',
        'Kbuild',
        'Makefile.boot',
        'Makefile.in',
        'Makefile.inc',
        'Makefile.wat',
        'Makefile.win',
        'Makefile.watcom',
        'Makefile.vc',
        'Makefile.unx',
        'Makefile.unix',
        'mkfile',
      ],
    },
    {
      name: 'mako',
      fileExtensions: ['mako', 'mao'],
    },
    {
      name: 'manpage',
      fileExtensions: [
        'man',
        'man1',
        'man2',
        'man3',
        'man4',
        'man5',
        'man6',
        'man7',
        'man8',
        'man9',
        'ron',
        'mdoc',
        'rnh',
        'rno',
        'runoff',
        'roff',
      ],
    },
    {
      name: 'manifest',
      fileExtensions: ['manifest', 'mf', 'webmanifest'],
      fileNames: [
        'manifest.json',
        'manifest.bak',
        'manifest',
        'manifest.skip',
        'manifest.webapp',
        'manifest.yml',
        'manifest.yaml',
        'manifest.txt',
        'manifest.xml',
      ],
    },
    {
      name: 'manjaro',
      fileExtensions: [
        'pkg.tar.xz',
        'pkg.tar.zst',
        'pkg.tar.gz',
        'pkg.tar.bz2',
      ],
    },
    {
      name: 'mapbox',
      fileExtensions: ['mss'],
    },
    {
      name: 'markdownlint',
      fileNames: [
        '.markdownlint',
        '.markdownlintrc',
        '.mdlrc',
        '.markdownlint.json',
        '.markdownlint.yml',
        '.markdownlint.yaml',
        '.markdownlint.jsonc',
      ],
    },
    {
      name: 'markdownlintignore',
      fileExtensions: ['markdownlintignore', 'mdlignore'],
    },
    {
      name: 'marko',
      fileExtensions: ['marko', 'marko.js', 'marko.cjs', 'marko.mjs'],
    },
    {
      name: 'markup',
      fileExtensions: ['xhtml', 'xht', 'shtml', 'shtm', 'dhtml', 'dhtm', 'dtd'],
    },
    {
      name: 'master',
      fileNames: [
        'master.json',
        'master.js',
        'master.ts',
        'master.cjs',
        'master.mjs',
      ],
    },
    {
      name: 'materialize',
      fileNames: [
        'materialize.js',
        'materialize.min.js',
        'materialize.css',
        'materialize.min.css',
        'materialize.scss',
        'materialize.cjs',
        'materialize.mjs',
      ],
    },
    {
      name: 'mathematica',
      fileExtensions: ['ma', 'mb', 'mt', 'cdf', 'nb', 'wl', 'wlt', 'nbp'],
    },
    {
      name: 'matlab',
      fileExtensions: [
        'mlx',
        'matlab',
        'mdlp',
        'mn',
        'sldd',
        'slx',
        'slxp',
        'mlappinstall',
        'mlpkginstall',
        'mltbx',
        'fig',
        'mex',
        'mexn',
        'mexw',
        'mexa',
        'mexmaci',
        'mexmaci64',
        'mexw32',
        'mexw64',
        'mexglx',
        'mexrs6',
        'mum',
        'mx',
        'mx3',
        'rwd',
        'slxc',
        'smv',
        'xvc',
      ],
    },
    {
      name: 'mathjax',
      fileNames: [
        'MathJax.js',
        'MathJax.cjs',
        'MathJax.mjs',
        'MathJax.js.map',
        'MathJax.js.gz',
        'MathJax-config.js',
        'MathJax-config.cjs',
        'MathJax-config.mjs',
        'MathJax-config.js.map',
        'MathJax-config.js.gz',
        'TeX-MML-AM_CHTML.js',
        'TeX-MML-AM_CHTML.cjs',
        'TeX-MML-AM_CHTML.mjs',
        'TeX-MML-AM_CHTML.js.map',
        'TeX-MML-AM_CHTML.js.gz',
      ],
    },
    {
      name: 'maven',
      fileNames: ['pom.xml', '.flattened-pom.xml'],
    },
    {
      name: 'max',
      fileExtensions: [
        'maxpat',
        'maxhelp',
        'maxproj',
        'maxref',
        'maxobj',
        'pat',
        'mxt',
      ],
    },
    {
      name: 'maya',
      fileExtensions: ['maya', 'mel', 'mcfi', 'mcfp'],
    },
    {
      name: 'mdx',
      fileExtensions: ['mdx'],
    },
    {
      name: 'mediawiki',
      fileExtensions: ['mediawiki', 'wiki', 'wikitext'],
    },
    {
      name: 'mercurial',
      fileExtensions: ['hg', 'hgsub', 'hgsubstate', 'hgrc', 'hgtags'],
    },
    {
      name: 'mercurialignore',
      fileExtensions: ['hgignore'],
    },
    {
      name: 'mercury',
      fileExtensions: ['moo'],
    },
    {
      name: 'merlin',
      fileExtensions: ['merlin'],
    },
    {
      name: 'mermaid',
      fileExtensions: ['mmd', 'mermaid', 'mmdc'],
    },
    {
      name: 'meson',
      fileNames: ['meson.build', 'meson_options.txt'],
    },
    {
      name: 'metal',
      fileExtensions: ['metal', 'metallib', 'air'],
    },
    {
      name: 'metapost',
      fileExtensions: ['mp', 'mpost', 'mpx', 'mpy', 'mf'],
    },
    {
      name: 'meteor',
      fileExtensions: ['meteor'],
    },
    {
      name: 'minecraft',
      fileExtensions: [
        'mcfunction',
        'mcmeta',
        'mcpack',
        'mcrcon',
        'mcreator',
        'mclevel',
        'mcworld',
        'mcmod',
      ],
    },
    {
      name: 'minizinc',
      fileExtensions: ['mzn', 'fzn', 'dzn'],
    },
    {
      name: 'mint',
      fileExtensions: ['mint'],
    },
    {
      name: 'mirah',
      fileExtensions: ['mirah', 'mir', 'druby', 'duby'],
    },
    {
      name: 'mixin',
      fileExtensions: ['mixin', 'mixin.json', 'mixins', 'mixins.json'],
    },
    {
      name: 'mirc',
      fileExtensions: ['mrc', 'mirc', 'mircscript'],
    },
    {
      name: 'mjml',
      fileExtensions: ['mjml', 'mjmlslim'],
    },
    {
      name: 'mkdocs',
      fileNames: ['mkdocs.yml', 'mkdocs.yaml', '.mkdocs.yml', '.mkdocs.yaml'],
    },
    {
      name: 'mlang',
      fileExtensions: ['mlang', 'pq'],
    },
    {
      name: 'mobx',
      fileExtensions: [
        'mobx',
        'mobx.js',
        'mobx.ts',
        'mobx.cjs',
        'mobx.mjs',
        'observable.js',
        'observable.ts',
        'observable.cjs',
        'observable.mjs',
      ],
    },
    {
      name: 'mocha',
      fileNames: ['mocha.opts', '.mocharc', '.mocharc.js', '.mocharc.json'],
      fileExtensions: [
        'mocha.js',
        'mocha.ts',
        'mocha.cjs',
        'mocha.mjs',
        'mocha.json',
        'mocha.yml',
        'mocha.yaml',
      ],
    },
    {
      name: 'mock',
      fileExtensions: [
        'mocks/js',
        'mocks/ts',
        'mocks/cjs',
        'mocks/mjs',
        'mocks/json',
        'mocks/dart',
        'mocks/java',
        'mocks/swift',
        'mocks/go',
        'mocks/py',
        'mocks/rb',
        'mocks/php',
        'mocks/cs',
        'mocks/pl',

        'mock.js',
        'mock.ts',
        'mock.cjs',
        'mock.mjs',
        'mock.json',
        'mock.dart',
        'mock.java',
        'mock.swift',
        'mock.go',
        'mock.py',
        'mock.rb',
        'mock.php',
        'mock.cs',
        'mock.pl',

        'spy',
        'spy.js',
        'spy.ts',
        'spy.cjs',
        'spy.mjs',
        'spy.json',
        'spy.dart',
        'spy.java',
        'spy.swift',
        'spy.go',
        'spy.py',
        'spy.rb',
        'spy.php',
        'spy.cs',
        'spy.pl',

        'stub.js',
        'stub.ts',
        'stub.cjs',
        'stub.mjs',
        'stub.json',
        'stub.dart',
        'stub.java',
        'stub.swift',
        'stub.go',
        'stub.py',
        'stub.rb',
        'stub.php',
        'stub.cs',
        'stub.pl',
      ],
    },
    {
      name: 'modelica',
      fileExtensions: ['mo', 'mos'],
    },
    {
      name: 'modernizr',
      fileNames: [
        '.modernizrrc',
        '.modernizrrc.js',
        '.modernizrrc.ts',
        '.modernizrrc.mjs',
        '.modernizrrc.cjs',
        '.modernizrrc.json',
        'modernizr.js',
        'modernizr.ts',
        'modernizr.cjs',
        'modernizr.mjs',
        'modernizr.json',
        'modernizr.custom.js',
        'modernizr.custom.ts',
        'modernizr.custom.cjs',
        'modernizr.custom.mjs',
        'modernizr-dev.js',
        'modernizr-dev.ts',
        'modernizr-dev.cjs',
        'modernizr-dev.mjs',
      ],
    },
    {
      name: 'modernweb',
      fileNames: [
        'web-dev-server.config.js',
        'web-dev-server.config.ts',
        'web-dev-server.config.mjs',
        'web-dev-server.config.cjs',
        'web-test-runner.config.js',
        'web-test-runner.config.ts',
        'web-test-runner.config.mjs',
        'web-test-runner.config.cjs',
      ],
    },
    {
      name: 'modo',
      fileExtensions: ['modo', 'lxo'],
    },
    {
      name: 'modula2',
      fileExtensions: ['mod', 'def'],
    },
    {
      name: 'modula3',
      fileNames: ['m3config', 'm3overrides', 'm3makefile'],
      fileExtensions: ['m3', 'i3', 'mg', 'ig'],
    },
    {
      name: 'moho',
      fileExtensions: [
        'moho',
        'mohoaction',
        'mohobrush',
        'mohoexport',
        'mohoproj',
        'mohostyle',
      ],
    },
    {
      name: 'mojolicious',
      fileExtensions: ['ep', 'epl'],
    },
    {
      name: 'moleculer',
      fileNames: [
        'moleculer.config.js',
        'moleculer.config.ts',
        'moleculer.config.mjs',
        'moleculer.config.cjs',
        'moleculer.config.json',
      ],
    },
    {
      name: 'moment',
      fileNames: [
        'moment.js',
        'moment.cjs',
        'moment.mjs',
        'moment.min.js',
        'moment.min.cjs',
        'moment.min.mjs',
        'moment-with-locales.js',
        'moment-with-locales.cjs',
        'moment-with-locales.mjs',
      ],
    },
    {
      name: 'monkey',
      fileExtensions: ['monkey'],
    },
    {
      name: 'mongodb',
      fileExtensions: ['bson', 'mongo', 'mongodb'],
    },
    {
      name: 'monotone',
      fileExtensions: ['mtn', 'monotone', 'mtn-ignore'],
    },
    {
      name: 'moonscript',
      fileExtensions: ['moon'],
    },
    {
      name: 'mootools',
      fileNames: [
        'mootools.js',
        'mootools.cjs',
        'mootools.mjs',
        'mootools.min.js',
        'mootools-core.js',
        'mootools-core.cjs',
        'mootools-core.mjs',
        'mootools-nocompat.js',
        'mootools-nocompat.cjs',
        'mootools-nocompat.mjs',
        'mootools-nocompat.min.js',
      ],
    },
    {
      name: 'more',
      fileExtensions: ['more', 'msg', 'utf8'],
    },
    {
      name: 'mruby',
      fileExtensions: ['mrb'],
    },
    {
      name: 'msdos',
      fileExtensions: ['com', 'dos', 'ful', 'chk'],
    },
    {
      name: 'mson',
      fileExtensions: ['mson'],
    },
    {
      name: 'msql',
      fileExtensions: ['mdf', 'ndf', 'ldf'],
    },
    {
      name: 'mupad',
      fileExtensions: ['mu', 'mup', 'mupad', 'mupadnotebook', 'mn', 'mnb'],
    },
    {
      name: 'mustache',
      fileExtensions: [
        'mustache',
        'stache',
        'handlebars',
        'hbs',
        'hamlbars',
        'emblem',
      ],
    },
    {
      name: 'mxml',
      fileExtensions: ['mxml'],
    },
    {
      name: 'mybatis',
      fileNames: ['mybatis-config.xml', 'mybatis.xml'],
    },

    // endregion

    // region [N]
    {
      name: 'n64',
      fileExtensions: ['n64'],
    },
    {
      name: 'nant',
      fileExtensions: ['build'],
    },
    {
      name: 'nano',
      fileExtensions: ['nano', 'nanorc'],
    },
    {
      name: 'nasm',
      fileExtensions: ['nasm'],
    },
    {
      name: 'ncu',
      fileNames: [
        '.ncurc',
        '.ncurc.json',
        '.ncurc.yml',
        '.ncurc.yaml',
        '.ncurc.js',
        '.ncurc.ts',
        '.ncurc.cjs',
        '.ncurc.mjs',
      ],
    },
    {
      name: 'ndproj',
      fileExtensions: ['ndproj'],
    },
    {
      name: 'nearley',
      fileExtensions: ['ne'],
    },
    {
      name: 'neko',
      fileExtensions: ['n', 'neko'],
    },
    {
      name: 'neo4j',
      fileExtensions: ['cyp', 'cypher'],
    },
    {
      name: 'neon',
      fileExtensions: ['neon'],
      light: true,
    },
    {
      name: 'nessus',
      fileExtensions: ['nasl'],
    },
    {
      name: 'nestland',
      fileNames: ['egg.json', 'egg.yaml', 'egg.yml'],
    },
    {
      name: 'nest',
      fileNames: ['.nest-cli.json', 'nest-cli.json'],
    },
    {
      name: 'nestconfig',
      fileNames: ['.nestconfig.json', 'nestconfig.json'],
    },
    {
      name: 'nestadapter',
      fileExtensions: ['adapter.ts', 'adapter.js'],
      enabledFor: [IconPack.Nest],
    },
    {
      name: 'nestcontroller',
      fileExtensions: ['controller.ts', 'controller.js'],
      enabledFor: [IconPack.Nest],
    },
    {
      name: 'nestdecorator',
      fileExtensions: ['decorator.ts', 'decorator.js'],
      enabledFor: [IconPack.Nest],
    },
    {
      name: 'nestdto',
      fileExtensions: ['dto.ts', 'dto.js'],
      enabledFor: [IconPack.Nest],
    },
    {
      name: 'nestfilter',
      fileExtensions: ['filter.ts', 'filter.js'],
      enabledFor: [IconPack.Nest],
    },
    {
      name: 'nestgateway',
      fileExtensions: ['gateway.ts', 'gateway.js'],
      enabledFor: [IconPack.Nest],
    },
    {
      name: 'nestguard',
      fileExtensions: ['guard.ts', 'guard.js'],
      enabledFor: [IconPack.Nest],
    },
    {
      name: 'nestinterceptor',
      fileExtensions: ['interceptor.ts', 'interceptor.js'],
      enabledFor: [IconPack.Nest],
    },
    {
      name: 'nestmiddleware',
      fileExtensions: ['middleware.ts', 'middleware.js'],
      enabledFor: [IconPack.Nest],
    },
    {
      name: 'nestmodule',
      fileExtensions: ['module.ts', 'module.js'],
      enabledFor: [IconPack.Nest],
    },
    {
      name: 'nestpipe',
      fileExtensions: ['pipe.ts', 'pipe.js'],
      enabledFor: [IconPack.Nest],
    },
    {
      name: 'nestprovider',
      fileExtensions: ['provider.ts', 'provider.js'],
      enabledFor: [IconPack.Nest],
    },
    {
      name: 'nestschema',
      fileExtensions: ['schema.ts', 'schema.js'],
      enabledFor: [IconPack.Nest],
    },
    {
      name: 'nestrepository',
      fileExtensions: ['repository.ts', 'repository.js'],
      enabledFor: [IconPack.Nest],
    },
    {
      name: 'nestservice',
      fileExtensions: ['service.ts', 'service.js'],
      enabledFor: [IconPack.Nest],
    },
    {
      name: 'neststrategy',
      fileExtensions: ['strategy.ts', 'strategy.js'],
      enabledFor: [IconPack.Nest],
    },
    {
      name: 'netlify',
      fileNames: ['netlify.toml'],
    },
    {
      name: 'netlify_headers',
      fileNames: ['_headers'],
    },
    {
      name: 'netlify_redirects',
      fileNames: ['_redirects'],
    },
    {
      name: 'netlinx',
      fileExtensions: ['axs', 'axi'],
    },
    {
      name: 'netlogo',
      fileExtensions: ['nlogo'],
    },
    {
      name: 'newrelic',
      fileNames: ['newrelic.yml', 'newrelic.yaml'],
    },
    {
      name: 'nextflow',
      fileExtensions: ['nf', 'nextflow'],
    },
    {
      name: 'nextflowconfig',
      fileNames: [
        'nextflow.config.js',
        'nextflow.config.cjs',
        'nextflow.config.mjs',
      ],
    },
    {
      name: 'nextjs',
      fileNames: ['next.config.js', 'next.config.cjs', 'next.config.mjs'],
    },
    {
      name: 'ngrx-actions',
      fileExtensions: [
        'action.ts',
        'action.js',
        'action.tsx',
        'action.jsx',
        'actions.ts',
        'actions.js',
        'actions.tsx',
        'actions.jsx',
      ],
      enabledFor: [IconPack.Ngrx],
    },
    {
      name: 'ngrx-effects',
      fileExtensions: [
        'effects.ts',
        'effects.js',
        'effects.tsx',
        'effects.jsx',
        'effect.ts',
        'effect.js',
        'effect.tsx',
        'effect.jsx',
      ],
      enabledFor: [IconPack.Ngrx],
    },
    {
      name: 'ngrx-entities',
      fileExtensions: [
        'entity.ts',
        'entity.js',
        'entity.tsx',
        'entity.jsx',
        'entities.ts',
        'entities.js',
        'entities.tsx',
        'entities.jsx',
      ],
      enabledFor: [IconPack.Ngrx],
    },
    {
      name: 'ngrx-reducers',
      fileExtensions: [
        'reducer.ts',
        'reducer.js',
        'reducer.tsx',
        'reducer.jsx',
        'reducers.ts',
        'reducers.js',
        'reducers.tsx',
        'reducers.jsx',
      ],
      enabledFor: [IconPack.Ngrx],
    },
    {
      name: 'ngrx-repo',
      fileExtensions: [
        'repo.ts',
        'repo.js',
        'repo.tsx',
        'repo.jsx',
        'repos.ts',
        'repos.js',
        'repos.tsx',
        'repos.jsx',
        'repository.ts',
        'repository.js',
        'repository.tsx',
        'repository.jsx',
        'repositories.ts',
        'repositories.js',
        'repositories.tsx',
        'repositories.jsx',
      ],
      enabledFor: [IconPack.Ngrx],
    },
    {
      name: 'ngrx-state',
      fileExtensions: [
        'state.ts',
        'state.js',
        'state.tsx',
        'state.jsx',
        'states.ts',
        'states.js',
        'states.tsx',
        'states.jsx',
      ],
      enabledFor: [IconPack.Ngrx],
    },
    {
      name: 'ngrx-selectors',
      fileExtensions: [
        'selector.ts',
        'selector.js',
        'selector.tsx',
        'selector.jsx',
        'selectors.ts',
        'selectors.js',
        'selectors.tsx',
        'selectors.jsx',
      ],
      enabledFor: [IconPack.Ngrx],
    },
    {
      name: 'nib',
      fileExtensions: ['nib'],
    },
    {
      name: 'nickle',
      fileExtensions: ['5c'],
    },
    {
      name: 'nightwatch',
      fileNames: [
        'nightwatch.conf.js',
        'nightwatch.conf.cjs',
        'nightwatch.conf.mjs',
        'nightwatch.config.js',
        'nightwatch.config.cjs',
        'nightwatch.config.mjs',
        'nightwatch.json',
      ],
    },
    {
      name: 'nimble',
      fileExtensions: ['nimble'],
    },
    {
      name: 'nimrod',
      fileExtensions: ['nim', 'nimrod'],
    },
    {
      name: 'nit',
      fileExtensions: ['nit'],
    },
    {
      name: 'shuriken',
      fileExtensions: ['ninja', 'ninja.d'],
    },
    {
      name: 'nix',
      fileExtensions: ['nix'],
    },
    {
      name: 'nmap',
      fileExtensions: ['nmap', 'nse'],
    },
    {
      name: 'noc',
      fileExtensions: ['noc'],
    },
    {
      name: 'nodejs',
      fileNames: [
        'server.js',
        'server.cjs',
        'server.mjs',
        'server.ts',
        'app.js',
        'app.cjs',
        'app.mjs',
        'app.ts',
        'main.js',
        'main.cjs',
        'main.mjs',
        'main.ts',
      ],
    },
    {
      name: 'nodeversion',
      fileExtensions: ['node', 'njs'],
      fileNames: ['.node-version'],
    },
    {
      name: 'nodemon',
      fileNames: ['nodemon.json', '.nodemon.json'],
    },
    {
      name: 'nodemonignore',
      fileNames: ['.nodemonignore'],
    },
    {
      name: 'nokogiri',
      fileNames: ['.nokogiri', '.nokogirirc'],
    },
    {
      name: 'nomad',
      fileExtensions: ['nomad', 'hcl'],
    },
    {
      name: 'noon',
      fileExtensions: ['noon'],
    },
    {
      name: 'normalize',
      fileNames: [
        'normalize.css',
        'normalize.scss',
        'normalize.sass',
        'normalize.less',
        'normalize.styl',
        'normalize.stylus',
        'normalize.postcss',
        'normalize-min.css',
        'normalize-min.scss',
        'normalize-min.sass',
        'normalize-min.less',
        'normalize-min.styl',
        'normalize-min.stylus',
        'normalize-min.postcss',
      ],
    },
    {
      name: 'note',
      fileExtensions: ['scratch', 'note', 'notes'],
    },
    {
      name: 'now',
      fileNames: ['now.json'],
    },
    {
      name: 'nowignore',
      fileNames: ['.nowignore'],
    },
    {
      name: 'npm',
      fileNames: ['package.json', '.npmrc'],
    },
    {
      name: 'npmignore',
      fileNames: ['.npmignore'],
    },
    {
      name: 'npmlock',
      fileNames: ['package-lock.json'],
    },
    {
      name: 'npmshrinkwrap',
      fileNames: ['npm-shrinkwrap.json'],
    },
    {
      name: 'nsis',
      fileExtensions: ['nsi', 'nsh', 'nsis'],
    },
    {
      name: 'nsri',
      fileNames: [
        '.nsrirc',
        '.integrityrc',
        '.nsrirc.json',
        '.nsrirc.config.js',
        '.nsrirc.config.yaml',
        '.nsrirc.config.yml',
        '.nsrirc.config.cjs',
        '.nsrirc.config.mjs',
        '.integrity.json',
        '.integrity.config.js',
        '.integrity.config.yaml',
        '.integrity.config.yml',
        '.integrity.config.cjs',
        '.integrity.config.mjs',
      ],
    },
    {
      name: 'nsriignore',
      fileNames: ['.nsriignore'],
    },
    {
      name: 'nu',
      fileExtensions: ['nu'],
      fileNames: ['Nukefile'],
    },
    {
      name: 'numpy',
      fileExtensions: ['npy', 'npz', 'numpy', 'numpyw', 'numsc'],
    },
    {
      name: 'nuclide',
      fileExtensions: ['nuclide', 'nuc'],
    },
    {
      name: 'numpy',
      fileExtensions: ['npy', 'npz', 'numpy', 'numpyw', 'numsc'],
    },
    {
      name: 'nuget',
      fileExtensions: ['nupkg', 'nuspec', 'snupkg', 'psmdcp'],
    },
    {
      name: 'nugetconfig',
      fileNames: ['nuget.config'],
    },
    {
      name: 'nunjucks',
      fileExtensions: ['njk', 'nunjucks', 'nunj'],
    },
    {
      name: 'nuxt',
      fileNames: [
        'nuxt.config.js',
        'nuxt.config.ts',
        'nuxt.config.cjs',
        'nuxt.config.mjs',
      ],
    },
    {
      name: 'nvm',
      fileExtensions: ['nvmrc', 'esmrc'],
      fileNames: ['.nvmrc', '.esmrc'],
    },
    {
      name: 'nwscript',
      fileExtensions: ['nss', 'ncs', 'ndb'],
    },
    {
      name: 'nx',
      fileNames: ['nx.json', 'workspace.json', 'project.json'],
      light: true,
    },
    {
      name: 'nxc',
      fileExtensions: ['nxc'],
    },

    // endregion [N]

    // region [O]
    {
      name: 'oberon',
      fileExtensions: ['ob', 'ob2'],
    },
    {
      name: 'objc',
      fileExtensions: ['mm', 'm'],
    },
    {
      name: 'objj',
      fileExtensions: ['j', 'sj'],
    },
    {
      name: 'ocaml',
      fileExtensions: [
        'ocaml',
        'ml',
        'mli',
        'ml4',
        'mll',
        'mly',
        'cmx',
        'ocamllex',
        'ocamlyacc',
      ],
    },
    {
      name: 'octave',
      fileExtensions: ['octave', 'octaverc', 'octave_hist'],
    },
    {
      name: 'odin',
      fileExtensions: ['odin'],
    },
    {
      name: 'ogone',
      fileExtensions: ['o3', 'ogone'],
    },
    {
      name: 'omnigraffle',
      fileExtensions: ['graffle', 'gdiagramstyle', 'gstencil', 'gtemplate'],
    },
    {
      name: 'onenote',
      fileExtensions: ['one', 'onenote'],
    },
    {
      name: 'ooc',
      fileExtensions: ['ooc'],
    },
    {
      name: 'opa',
      fileExtensions: ['opa'],
    },
    {
      name: 'opam',
      fileExtensions: ['opam'],
    },
    {
      name: 'openapi',
      fileNames: ['openapi.json', 'openapi.yml', 'openapi.yaml'],
    },
    {
      name: 'openbsd',
      fileExtensions: ['openbsd', 'bsd'],
    },
    {
      name: 'opencl',
      fileExtensions: ['opencl'],
    },
    {
      name: 'progress',
      fileExtensions: ['abl', 'p'],
    },
    {
      name: 'openexr',
      fileExtensions: ['exr'],
    },
    {
      name: 'opengl',
      fileExtensions: ['glsl', 'glslv', 'gsh', 'gshader'],
    },
    {
      name: 'vertex',
      fileExtensions: ['vrx', 'vert', 'vertex', 'vsh', 'vshader'],
    },
    {
      name: 'shader',
      fileExtensions: ['fra', 'frag', 'fp', 'fsh', 'fshader'],
    },
    {
      name: 'openhab',
      fileExtensions: ['things'],
    },
    {
      name: 'openindiana',
      fileExtensions: ['p5i'],
    },
    {
      name: 'openoffice',
      fileExtensions: [
        'odf',
        'ods',
        'odt',
        'odp',
        'odg',
        'odf',
        'odb',
        'fodt',
        'fods',
        'fodp',
        'fodg',
        'ott',
        'ots',
        'otp',
        'otg',
      ],
    },
    {
      name: 'openpolicy',
      fileExtensions: ['rego'],
    },
    {
      name: 'openscad',
      fileExtensions: ['scad', 'jscad'],
    },
    {
      name: 'openstack',
      fileExtensions: ['aki', 'ami', 'ari', 'ova', 'ovf'],
    },
    {
      name: 'opensolaris',
      fileExtensions: ['solaris', 'opensolaris'],
    },
    {
      name: 'openvms',
      fileExtensions: ['hlb', 'cld'],
    },
    {
      name: 'openvpn',
      fileExtensions: ['ovpn'],
    },
    {
      name: 'openzfs',
      fileNames: ['vdev1', 'vdev2001'],
    },
    {
      name: 'orgmode',
      fileExtensions: ['org'],
    },
    {
      name: 'oracle',
      fileExtensions: ['pls', 'plsql', 'plb', 'pkb', 'pck', 'pks', 'pkh'],
    },
    {
      name: 'finder',
      fileExtensions: ['dmg'],
    },
    {
      name: 'outlook',
      fileExtensions: ['pst', 'bcmx', 'oab', 'otm', 'oft', 'nk2'],
    },
    {
      name: 'oxygene',
      fileExtensions: ['oxygene'],
    },
    {
      name: 'oz',
      fileExtensions: ['oz'],
    },

    // endregion

    // region [P]
    {
      name: 'paket',
      fileNames: [
        'paket.dependencies',
        'paket.references',
        'paket.template',
        'paket.lock',
        'paket.local',
      ],
    },
    {
      name: 'pan',
      fileExtensions: ['pan'],
    },
    {
      name: 'papyrus',
      fileExtensions: ['psc', 'pex'],
    },
    {
      name: 'parcel',
      fileExtensions: ['parcel', 'parcelrc'],
    },
    {
      name: 'parrot',
      fileExtensions: ['parrot', 'pir', 'pasm', 'pbc'],
    },
    {
      name: 'parquet',
      fileExtensions: ['parquet'],
    },
    {
      name: 'pascal',
      fileExtensions: [
        'pas',
        'pascal',
        'ppu',
        'lpr',
        'lps',
        'lpi',
        'lpk',
        'lfm',
        'lrs',
        'lrt',
        'dfm',
        'dpr',
        'dpk',
        'or',
      ],
    },
    {
      name: 'patch',
      fileExtensions: ['patch', 'meld'],
    },
    {
      name: 'patreon',
      fileNames: [
        'patrons',
        'patrons.md',
        'patrons.txt',
        'patreon',
        'patreon.md',
        'patreon.txt',
      ],
    },
    {
      name: 'pawn',
      fileExtensions: ['pawn', 'pwn', 'pgn', 'fen', 'amx'],
    },
    {
      name: 'pcd',
      fileExtensions: ['pcd'],
    },
    {
      name: 'pddl',
      fileExtensions: ['pddl', 'plan', 'happenings'],
    },
    {
      name: 'pdf',
      fileExtensions: ['pdf'],
    },
    {
      name: 'pegjs',
      fileExtensions: ['pegjs', 'peg', 'pegcoffee', 'peggy'],
    },
    {
      name: 'percy',
      fileExtensions: [
        'percyrc',
        'percy.yml',
        'percy.yaml',
        'percy.json',
        'percy.js',
        'percy',
      ],
    },
    {
      name: 'perlconfig',
      fileNames: [
        'perlconfig.json',
        'perl5config.json',
        'perl6config.json',
        'perl-config.json',
        'perl5-config.json',
        'perl6-config.json',
      ],
    },
    {
      name: 'helix',
      fileExtensions: ['p4', 'p4config', 'p4ignore', 'p4include', 'p4info'],
    },
    {
      name: 'helixignore',
      fileExtensions: ['p4ignore'],
    },
    {
      name: 'phalcon',
      fileExtensions: ['phalcon', 'volt'],
      light: true,
    },
    {
      name: 'photorec',
      fileExtensions: ['photorec.cfg'],
    },
    {
      name: 'php2',
      fileExtensions: [
        'engine',
        'phar',
        'php2',
        'php3',
        'php4',
        'php5',
        'php6',
        'php7',
        'php8',
        'php9',
      ],
    },
    {
      name: 'phpcs',
      fileNames: ['phpcs.xml', 'phpcs.xml.dist'],
      fileExtensions: ['php_cs'],
    },
    {
      name: 'phtml',
      fileExtensions: ['phtml'],
    },
    {
      name: 'phoenix',
      fileNames: [
        'phoenix.js',
        'phoenix.cjs',
        'phoenix.mjs',
        'phoenix.min.js',
        'phoenix.esm.js',
        'phoenix.esm.min.js',
        'phoenix.ex',
      ],
    },
    {
      name: 'phraseapp',
      fileExtensions: [
        'phrase.yml',
        'phrase.yaml',
        'phraseapp.yml',
        'phraseapp.yaml',
      ],
    },
    {
      name: 'pickle',
      fileExtensions: ['pickle', 'pkl'],
    },
    {
      name: 'pico8',
      fileExtensions: ['p8', 'pico8'],
    },
    {
      name: 'picolisp',
      fileExtensions: ['l'],
    },
    {
      name: 'pike',
      fileExtensions: ['pike', 'pmod'],
    },
    {
      name: 'pinescript',
      fileExtensions: ['pinescript', 'pine'],
    },
    {
      name: 'pipfile',
      fileExtensions: ['pipfile'],
      fileNames: ['pipfile'],
    },
    {
      name: 'pipfilelock',
      fileNames: ['pipfile.lock'],
    },
    {
      name: 'pipeline',
      fileExtensions: ['pipeline'],
    },
    {
      name: 'pkgsrc',
      fileNames: ['mk.conf'],
    },
    {
      name: 'platformio',
      fileNames: ['platformio.ini'],
    },
    {
      name: 'play',
      fileExtensions: ['play'],
    },
    {
      name: 'playwright',
      fileNames: [
        'playwright.config.js',
        'playwright.config.ts',
        'playwright.config.cjs',
        'playwright.config.mjs',
      ],
    },
    {
      name: 'plist',
      fileExtensions: ['plist'],
    },
    {
      name: 'plopfile',
      fileNames: ['plopfile.js', 'plopfile.ts', 'plopfile.cjs', 'plopfile.mjs'],
    },
    {
      name: 'pm2',
      fileNames: [
        'ecosystem.config.js',
        'ecosystem.config.ts',
        'ecosystem.config.json',
        'ecosystem.config.cjs',
        'ecosystem.config.mjs',
        'ecosystem.config.yml',
        'ecosystem.config.yaml',
        'ecosystem.config.ini',
        'ecosystem.conf.js',
        'ecosystem.conf.ts',
        'ecosystem.conf.json',
        'ecosystem.conf.cjs',
        'ecosystem.conf.mjs',
        'ecosystem.conf.yml',
        'ecosystem.conf.yaml',
        'ecosystem.conf.ini',
      ],
    },
    {
      name: 'pnpm',
      fileNames: ['pnpm-lock.yaml', 'pnpm-workspace.yaml', 'pnpm-debug.yaml'],
    },
    {
      name: 'pnpmfile',
      fileNames: ['pnpmfile.js', 'pnpmfile.ts', 'pnpmfile.cjs', 'pnpmfile.mjs'],
    },
    {
      name: 'pod',
      fileExtensions: ['pod', 'pod6', 'p6l', 'p6m', 'nqp'],
    },
    {
      name: 'poetry',
      fileNames: ['pyproject.toml', 'poetry.lock'],
    },
    {
      name: 'pogoscript',
      fileExtensions: ['pogo'],
    },
    {
      name: 'polymer',
      fileExtensions: ['polymer'],
      fileNames: ['polymer.json'],
    },
    {
      name: 'pony',
      fileExtensions: ['pony'],
    },
    {
      name: 'pgsql',
      fileExtensions: ['pgsql'],
    },
    {
      name: 'postcss',
      fileNames: [
        'postcssrc.config.js',
        'postcssrc.config.json',
        'postcssrc.config.cjs',
        'postcssrc.config.mjs',
        'postcssrc.config.ts',
        'postcssrc.config.yml',
        'postcssrc.config.yaml',
        'postcss.config.js',
        'postcss.config.json',
        'postcss.config.ts',
        'postcss.config.cjs',
        'postcss.config.mjs',
        'postcss.config.yml',
        'postcss.config.yaml',
      ],
      fileExtensions: [
        'postcss',
        'pcss',
        'postcssrc',
        'postcssrc.js',
        'postcssrc.json',
        'postcssrc.ts',
        'postcssrc.cjs',
        'postcssrc.mjs',
        'postcssrc.yml',
        'postcssrc.yaml',
      ],
    },
    {
      name: 'posthtml',
      fileNames: [
        'posthtml.config.js',
        'posthtml.config.json',
        'posthtml.config.ts',
        'posthtml.config.cjs',
        'posthtml.config.mjs',
        'posthtml.config.yml',
        'posthtml.config.yaml',
      ],
      fileExtensions: [
        'posthtml',
        'posthtmlrc',
        'posthtmlrc.js',
        'posthtmlrc.json',
        'posthtmlrc.ts',
        'posthtmlrc.cjs',
        'posthtmlrc.mjs',
        'posthtmlrc.yml',
        'posthtmlrc.yaml',
      ],
    },
    {
      name: 'postscript',
      fileExtensions: [
        'ps',
        'eps',
        'epsi',
        'epsf',
        'gsf',
        'afm',
        'amm',
        'bez',
        'gs',
      ],
    },
    {
      name: 'powerbuilder',
      fileExtensions: [
        'pbt',
        'pbl',
        'pbm',
        'pbs',
        'pbr',
        'pbw',
        'sra',
        'sru',
        'srw',
        'srj',
        'srp',
      ],
    },
    {
      name: 'powerpoint',
      fileExtensions: [
        'ppt',
        'pptx',
        'pptm',
        'pot',
        'potx',
        'potm',
        'pps',
        'ppsx',
        'ppsm',
        'ppa',
        'ppam',
        'sldx',
        'sldm',
      ],
    },
    {
      name: 'powershell',
      fileExtensions: [
        'ps1',
        'ps1xml',
        'psd1',
        'psm1',
        'pssc',
        'powershell',
        'psrc',
        'pssc',
        'cmd',
      ],
    },
    {
      name: 'precommit',
      fileExtensions: [
        'pre-commit.yml',
        'pre-commit.yaml',
        'pre-commit-config.yml',
        'pre-commit-config.yaml',
        'pre-commit-hooks.yml',
        'pre-commit-hooks.yaml',
      ],
    },
    {
      name: 'preact',
      fileNames: [
        'preact.config.js',
        'preact.config.ts',
        'preact.config.cjs',
        'preact.config.mjs',
      ],
    },
    {
      name: 'prettier',
      fileExtensions: [
        'prettierrc',
        'prettierrc.json',
        'prettierrc.yml',
        'prettierrc.yaml',
        'prettierrc.toml',
        'prettierrc.js',
      ],
    },
    {
      name: 'prettierconfig',
      fileNames: [
        'prettier.config.js',
        'prettier.config.ts',
        'prettier.config.cjs',
        'prettier.config.mjs',
      ],
    },
    {
      name: 'prettierignore',
      fileExtensions: ['prettierignore'],
    },
    {
      name: 'prismaconfig',
      fileNames: ['prisma.yml', 'prisma.yaml'],
    },
    {
      name: 'prisma',
      fileExtensions: ['prisma'],
    },
    {
      name: 'processing',
      fileExtensions: ['pde'],
    },
    {
      name: 'project',
      fileExtensions: ['mpp', 'mpt'],
    },
    {
      name: 'prolog',
      fileExtensions: ['pro', 'prolog', 'yap'],
    },
    {
      name: 'prometheus',
      fileExtensions: ['rules', 'rules.yml', 'rules.yaml'],
    },
    {
      name: 'propeller',
      fileExtensions: ['spin'],
    },
    {
      name: 'source',
      fileExtensions: ['properties', 'props', 'prop'],
    },
    {
      name: 'pros',
      fileExtensions: ['pros'],
    },
    {
      name: 'proselint',
      fileExtensions: ['proselintrc'],
    },
    {
      name: 'protobuf',
      fileExtensions: ['proto', 'protobuf', 'protobuf3', 'protodevel'],
    },
    {
      name: 'protractor',
      fileNames: [
        'protractor.js',
        'protractor.json',
        'protractor.conf.js',
        'protractor.conf.ts',
        'protractor.conf.cjs',
        'protractor.conf.mjs',
        'protractor.conf.json',
        'protractor.config.js',
        'protractor.config.ts',
        'protractor.config.cjs',
        'protractor.config.mjs',
        'protractor.config.json',
      ],
    },
    {
      name: 'proxy',
      fileNames: [
        'proxy.conf.js',
        'proxy.conf.ts',
        'proxy.conf.cjs',
        'proxy.conf.mjs',
        'proxy.conf.json',
        'proxy.config.js',
        'proxy.config.ts',
        'proxy.config.cjs',
        'proxy.config.mjs',
        'proxy.config.json',
      ],
    },
    {
      name: 'publiccode',
      fileNames: ['publiccode.yml', 'publiccode.yaml'],
    },
    {
      name: 'publisher',
      fileExtensions: ['pub', 'puz'],
    },
    {
      name: 'pullapprove',
      fileNames: ['pullapprove.yml', 'pullapprove.yaml'],
      fileExtensions: ['pullapprove.yml', 'pullapprove.yaml'],
    },
    {
      name: 'puppet',
      fileExtensions: ['pp', 'epp', 'puppet'],
    },
    {
      name: 'pure',
      fileExtensions: ['pure'],
    },
    {
      name: 'purebasic',
      fileExtensions: ['pb', 'pbi'],
    },
    {
      name: 'purescript',
      fileExtensions: ['purs', 'purescript'],
    },
    {
      name: 'pypi',
      fileExtensions: ['pypirc', 'requirements'],
      fileNames: ['requirements.txt', 'requirements.in'],
    },
    {
      name: 'pyret',
      fileExtensions: ['arr'],
    },
    {
      name: 'pytest',
      fileNames: ['pytest.ini'],
    },
    {
      name: 'pytyped',
      fileExtensions: ['typed', 'pyi', 'pytd', 'pytyped', 'py.typed'],
    },
    {
      name: 'pythonconfig',
      fileNames: ['python-config.json', 'pythonconfig.json', 'manifest.in'],
      fileExtensions: ['coveragerc', 'pylintrc'],
    },
    {
      name: 'pythonversion',
      fileExtensions: ['py-version', 'python-version', 'pythonversion'],
    },
    {
      name: 'pyup',
      fileNames: ['.pyup.yml', '.pyup.yaml'],
      fileExtensions: ['pyup.yml', 'pyup.yaml'],
    },
    // endregion

    // region [Q]
    {
      name: 'qsharp',
      fileExtensions: ['qs'],
      light: true,
    },
    {
      name: 'kx',
      fileExtensions: ['q', 'k', 'kdb'],
    },
    {
      name: 'qiskit',
      fileExtensions: ['qiskit', 'qasm'],
    },
    {
      name: 'qlikview',
      fileExtensions: ['qvs', 'qvw', 'qvd', 'qvt', 'qvx', 'qvf', 'qvb'],
    },
    {
      name: 'qodana',
      fileNames: ['.qodana.yml', '.qodana.yaml', 'qodana.yml', 'qodana.yaml'],
    },
    {
      name: 'qt',
      fileExtensions: [
        'qrc',
        'qss',
        'qml',
        'qbs',
        'qmlproject',
        'qmltypes',
        'qmldir',
      ],
    },
    {
      name: 'quasar',
      fileNames: [
        'quasar.conf.js',
        'quasar.conf.ts',
        'quasar.conf.cjs',
        'quasar.conf.mjs',
      ],
    },
    {
      name: 'quantum',
      fileExtensions: ['qtn'],
    },
    // endregion

    // region [R]
    {
      name: 'r',
      fileExtensions: ['r', 'rd', 'rsx', 'rhistory', 'rprofile', 'rproj'],
    },
    {
      name: 'rmd',
      fileExtensions: ['rmd', 'rmarkdown'],
    },
    {
      name: 'racket',
      fileExtensions: ['rkt', 'rktd', 'rktl', 'scrbl'],
    },
    {
      name: 'raml',
      fileExtensions: ['raml'],
    },
    {
      name: 'rails',
      fileExtensions: ['rails'],
      fileNames: ['rails'],
    },
    {
      name: 'railsconcern',
      fileExtensions: ['concern/rb', 'concerns/rb'],
    },
    {
      name: 'railscontroller',
      fileExtensions: ['controller/rb', 'controllers/rb'],
    },
    {
      name: 'railsdb',
      fileNames: ['database.yml', 'database.yaml'],
    },
    {
      name: 'railsfactory',
      fileExtensions: ['factory/rb', 'factories/rb'],
    },
    {
      name: 'railsfixture',
      fileExtensions: ['fixture/rb', 'fixtures/rb'],
    },
    {
      name: 'railshelper',
      fileExtensions: ['helper/rb', 'helpers/rb'],
    },
    {
      name: 'railsjob',
      fileExtensions: ['job/rb', 'jobs/rb'],
    },
    {
      name: 'railsmailer',
      fileExtensions: ['mailer/rb', 'mailers/rb'],
    },
    {
      name: 'railsroutes',
      fileNames: ['routes.rb'],
    },
    {
      name: 'railsschema',
      fileExtensions: ['schema/rb', 'schemas/rb'],
    },
    {
      name: 'railsserializer',
      fileExtensions: ['serializer/rb', 'serializers/rb'],
    },
    {
      name: 'railsservice',
      fileExtensions: ['service/rb', 'services/rb'],
    },
    {
      name: 'railsseed',
      fileNames: ['seed.rb'],
    },
    {
      name: 'rake',
      fileExtensions: ['rake'],
    },
    {
      name: 'rakefile',
      fileNames: ['rakefile', 'rakefile.rb'],
    },
    {
      name: 'razor',
      fileExtensions: ['cshtml', 'vbhtml'],
    },
    {
      name: 'raphael',
      fileNames: [
        'raphael.js',
        'raphael.min.js',
        'raphael-min.js',
        'raphael.no-deps.js',
        'raphael.no-deps.cjs',
        'raphael.no-deps.mjs',
      ],
    },
    {
      name: 'rascal',
      fileExtensions: ['rsc', 'rascal'],
    },
    {
      name: 'razzle',
      fileNames: [
        'razzle.config.js',
        'razzle.config.ts',
        'razzle.config.cjs',
        'razzle.config.mjs',
        'razzle.config.yml',
        'razzle.config.yaml',
      ],
    },
    {
      name: 'rbs',
      fileExtensions: ['rbs', 'rbi'],
    },
    {
      name: 'rdata',
      fileExtensions: ['rdata', 'rds', 'rda', 'rdx'],
    },
    {
      name: 'rdoc',
      fileExtensions: ['rdoc'],
    },
    {
      name: 'readthedocs',
      fileExtensions: ['readthedocs', 'readthedocs.yml', 'readthedocs.yaml'],
    },
    {
      name: 'recoil',
      fileNames: [
        'atom.js',
        'atom.ts',
        'atoms.js',
        'atoms.ts',
        'selector.js',
        'selector.ts',
        'selectors.js',
        'selectors.ts',
      ],
      fileExtensions: [
        'atom.js',
        'atom.ts',
        'atoms.js',
        'atoms.ts',
        'selector.js',
        'selector.ts',
        'selectors.js',
        'selectors.ts',
        'atoms/js',
        'atoms/jsx',
        'atoms/ts',
        'atoms/tsx',
        'recoil/js',
        'recoil/jsx',
        'recoil/ts',
        'recoil/tsx',
      ],
    },
    {
      name: 'remix',
      fileNames: [
        'remix.config.js',
        'remix.config.ts',
        'remix.config.cjs',
        'remix.config.mjs',
        'remix.config.yml',
        'remix.config.yaml',
      ],
    },
    {
      name: 'replit',
      fileExtensions: ['replit'],
    },
    {
      name: 'restql',
      fileExtensions: ['restql', 'rql'],
    },
    {
      name: 'restqlconf',
      fileNames: [
        'restql.yml',
        'restql.yaml',
        'restql.conf.json',
        'restql.conf.yaml',
      ],
    },
    {
      name: 'reactcli',
      fileExtensions: ['reactcli', 'react-cli'],
    },
    {
      name: 'react',
      fileNames: [
        'react.js',
        'react.cjs',
        'react.mjs',
        'react.min.js',
        'react-min.js',
        'react.production.min.js',
      ],
    },
    {
      name: 'reactos',
      fileNames: ['reactos.ios', 'reactos.deb'],
    },
    {
      name: 'reason',
      fileExtensions: ['re', 'rei'],
    },
    {
      name: 'reasonstudios',
      fileExtensions: ['reason', 'rns', 'rsn', 'rx2', 'sxt'],
    },
    {
      name: 'rebol',
      fileExtensions: ['r2', 'r3', 'eb', 'reb', 'rebol'],
    },
    {
      name: 'redhat',
      fileExtensions: ['rpm', 'srpm', 'rpmmacros'],
    },
    {
      name: 'red',
      fileExtensions: ['red', 'reds'],
    },
    {
      name: 'redis',
      fileNames: ['redis.conf', 'redis-config.yml', 'redis-config.yaml'],
      fileExtensions: ['rdb'],
    },
    {
      name: 'redux-action',
      fileExtensions: [
        'action.js',
        'action.ts',
        'actions.js',
        'actions.ts',
        'actions/jsx',
        'actions/ts',
        'actions/tsx',
        'actions/js',
      ],
      enabledFor: [IconPack.Redux],
    },
    {
      name: 'redux-epic',
      fileExtensions: [
        'epic.js',
        'epic.ts',
        'epics.js',
        'epics.ts',
        'epics/jsx',
        'epics/ts',
        'epics/tsx',
        'epics/js',
      ],
      enabledFor: [IconPack.Redux],
    },
    {
      name: 'redux-saga',
      fileExtensions: [
        'saga.js',
        'saga.ts',
        'sagas.js',
        'sagas.ts',
        'saga/jsx',
        'saga/ts',
        'saga/tsx',
        'saga/js',
        'sagas/jsx',
        'sagas/ts',
        'sagas/tsx',
        'sagas/js',
      ],
      enabledFor: [IconPack.Redux],
    },
    {
      name: 'redux-selector',
      fileExtensions: [
        'selector.js',
        'selector.ts',
        'selectors.js',
        'selectors.ts',
        'selector/jsx',
        'selector/ts',
        'selector/tsx',
        'selector/js',
        'selectors/jsx',
        'selectors/ts',
        'selectors/tsx',
        'selectors/js',
      ],
      enabledFor: [IconPack.Redux],
    },
    {
      name: 'redux-reducer',
      fileExtensions: [
        'reducer.js',
        'reducer.ts',
        'reducers.js',
        'reducers.ts',
        'reducer/jsx',
        'reducer/ts',
        'reducer/tsx',
        'reducer/js',
        'reducers/jsx',
        'reducers/ts',
        'reducers/tsx',
        'reducers/js',
      ],
      enabledFor: [IconPack.Redux],
    },
    {
      name: 'redux-slice',
      fileExtensions: [
        'slice.js',
        'slice.ts',
        'slices.js',
        'slices.ts',
        'slice/jsx',
        'slice/ts',
        'slice/tsx',
        'slice/js',
        'slices/jsx',
        'slices/ts',
        'slices/tsx',
        'slices/js',
      ],
      enabledFor: [IconPack.Redux],
    },
    {
      name: 'redux-store',
      fileExtensions: [
        'store.js',
        'store.ts',
        'stores.js',
        'stores.ts',
        'store/jsx',
        'store/ts',
        'store/tsx',
        'store/js',
        'stores/jsx',
        'stores/ts',
        'stores/tsx',
        'stores/js',
      ],
      enabledFor: [IconPack.Redux],
    },
    {
      name: 'reek',
      fileExtensions: ['reek'],
    },
    {
      name: 'regex',
      fileExtensions: ['regex', 'regexp', 'rgx'],
    },
    {
      name: 'rehype',
      fileExtensions: [
        'rehype',
        'rehyperc',
        'rehyperc.js',
        'rehyperc.cjs',
        'rehyperc.mjs',
        'rehyperc.ts',
        'rehyperc.json',
        'rehyperc.yml',
        'rehyperc.yaml',
        'reh',
      ],
    },
    {
      name: 'rehypeignore',
      fileExtensions: ['rehypeignore'],
    },
    {
      name: 'remark',
      fileExtensions: [
        'remark',
        'remarkrc',
        'remarkrc.js',
        'remarkrc.cjs',
        'remarkrc.mjs',
        'remarkrc.ts',
        'remarkrc.json',
        'remarkrc.yml',
        'remarkrc.yaml',
      ],
    },
    {
      name: 'retext',
      fileExtensions: [
        'retext',
        'retextrc',
        'retextrc.js',
        'retextrc.cjs',
        'retextrc.mjs',
        'retextrc.ts',
        'retextrc.json',
        'retextrc.yml',
        'retextrc.yaml',
      ],
    },
    {
      name: 'retextignore',
      fileExtensions: ['retextignore'],
    },
    {
      name: 'remarkignore',
      fileExtensions: ['remarkignore'],
    },
    {
      name: 'renovate',
      fileNames: ['renovate.json', 'renovate.json5', 'renovate.jsonc'],
      fileExtensions: ['renovaterc'],
    },
    {
      name: 'requirejs',
      fileNames: [
        'require.js',
        'require.cjs',
        'require.mjs',
        'require.min.js',
        'require-dev.js',
      ],
    },
    {
      name: 'rescript',
      fileExtensions: ['res', 'resi'],
    },
    {
      name: 'rst',
      fileExtensions: ['rst'],
    },
    {
      name: 'rexx',
      fileExtensions: ['rex', 'rexx', 'pprx'],
    },
    {
      name: 'rhino3d',
      fileExtensions: ['3dm', '3dmf', '3dmr', 'rvb', '3mf', '3mfz', '3mm'],
    },
    {
      name: 'riemann',
      fileNames: ['riemann.config'],
    },
    {
      name: 'ring',
      fileExtensions: ['ring'],
    },
    {
      name: 'riot',
      fileExtensions: ['riot', 'tag'],
    },
    {
      name: 'robot',
      fileExtensions: ['robot'],
    },
    {
      name: 'robots',
      fileNames: ['robots.txt', 'robots'],
    },
    {
      name: 'rollup',
      fileNames: [
        'rollup.js',
        'rollup.cjs',
        'rollup.mjs',
        'rollup.ts',
        'rollup.conf.js',
        'rollup.conf.cjs',
        'rollup.conf.mjs',
        'rollup.conf.ts',
        'rollup.config.js',
        'rollup.config.cjs',
        'rollup.config.mjs',
        'rollup.config.ts',
      ],
    },
    {
      name: 'rome',
      fileNames: ['rome.json', '.romeignore'],
    },
    {
      name: 'routes',
      fileNames: [
        'routes.js',
        'routes.ts',
        'routes.jsx',
        'routes.tsx',
        'routing.js',
        'routing.ts',
        'routing.jsx',
        'routing.tsx',
      ],
      fileExtensions: [
        'routes/js',
        'routes/ts',
        'routes/jsx',
        'routes/tsx',
        'router/js',
        'router/ts',
        'router/jsx',
        'router/tsx',
        'routing/js',
        'routing/ts',
        'routing/jsx',
        'routing/tsx',
      ],
    },
    {
      name: 'rstudio',
      fileExtensions: ['rproj'],
    },
    {
      name: 'rspec',
      fileExtensions: ['rspec', 'specs/rb', 'spec/rb', 'tests/rb', 'test/rb'],
    },
    {
      name: 'rss',
      fileExtensions: ['rss'],
    },
    {
      name: 'rsync',
      fileNames: ['rsyncd.conf', 'rsyncd.secrets'],
      light: true,
    },
    {
      name: 'rubocop',
      fileExtensions: ['rubocop.yml', 'rubocop.yaml', 'rubocop_todo.yml'],
    },
    {
      name: 'rubygems',
      fileExtensions: ['gem', 'gemspec'],
    },
    {
      name: 'rubyrc',
      fileExtensions: ['rubyrc', 'irbrc', 'gemrc', 'pryrc'],
    },
    {
      name: 'gemset',
      fileExtensions: ['ruby-gemset', 'rb-gemset'],
    },
    {
      name: 'rubyversion',
      fileExtensions: ['ruby-version', 'rb-version'],
    },
    {
      name: 'rust',
      fileExtensions: [
        'rs',
        'rs.in',
        'rust',
        'rlib',
        'rlibc',
        'rlibm',
        'rlibstd',
      ],
    },
    {
      name: 'ron',
      fileExtensions: ['ron'],
    },
    {
      name: 'rusttoolchain',
      fileExtensions: ['rust-toolchain'],
    },
    {
      name: 'rvm',
      fileExtensions: ['rvmrc'],
    },
    {
      name: 'rxjs',
      fileNames: ['rxjs.json', 'rxjs.js', 'rxjs.ts'],
    },
    // endregion

    // region [S]
    {
      name: 'sac',
      fileExtensions: ['sac'],
    },
    {
      name: 'safari',
      fileExtensions: [
        'safariextz',
        'safariext',
        'binarycookies',
        'webarchive',
      ],
    },
    {
      name: 'sage',
      fileExtensions: ['sage', 'sagews'],
    },
    {
      name: 'sails',
      fileNames: ['.sailsrc'],
    },
    {
      name: 'saltstack',
      fileExtensions: ['sls'],
    },
    {
      name: 'san',
      fileExtensions: ['san'],
    },
    {
      name: 'sandbox',
      fileExtensions: ['sb'],
    },
    {
      name: 'sas',
      fileExtensions: ['sas'],
    },
    {
      name: 'sapper',
      fileNames: [
        'sapper.js',
        'sapper.ts',
        'sapper.cjs',
        'sapper.mjs',
        'sapper.config.js',
        'sapper.config.ts',
        'sapper.config.cjs',
        'sapper.config.mjs',
      ],
    },
    {
      name: 'sbt',
      fileExtensions: ['sbt'],
    },
    {
      name: 'scala',
      fileExtensions: ['kojo', 'sc'],
    },
    {
      name: 'scheme',
      fileExtensions: ['scm', 'scheme', 'sch', 'sps', 'sld', 'xtm'],
    },
    {
      name: 'scilla',
      fileExtensions: ['scilla'],
    },
    {
      name: 'scilab',
      fileExtensions: ['sci', 'sce', 'tst'],
    },
    {
      name: 'scratch',
      fileExtensions: ['sb2', 'sb3'],
    },
    {
      name: 'scrutinizer',
      fileNames: ['.scrutinizer.yml', '.scrutinizer.yaml'],
    },
    {
      name: 'sdlang',
      fileExtensions: ['sdl'],
    },
    {
      name: 'secret',
      fileExtensions: ['secret', 'secrets', 'safe'],
    },
    {
      name: 'self',
      fileExtensions: ['self'],
    },
    {
      name: 'sencha',
      fileNames: [
        'sencha.js',
        'sencha.cjs',
        'sencha.mjs',
        'sencha.min.js',
        'sencha.min.cjs',
        'sencha.min.mjs',
        'sencha-touch.js',
        'sencha-touch.min.js',
      ],
    },
    {
      name: 'sentry',
      fileNames: ['.sentryclirc'],
    },
    {
      name: 'semantic-release',
      fileNames: [
        '.releaserc',
        '.releaserc.json',
        '.releaserc.yaml',
        '.releaserc.yml',
        '.releaserc.js',
        '.releaserc.cjs',
        '.releaserc.mjs',
        'release.config.js',
        'release.config.cjs',
        'release.config.mjs',
        'semantic-release.config.js',
        'semantic-release.config.cjs',
        'semantic-release.config.mjs',
      ],
    },
    {
      name: 'semgrep',
      fileExtensions: ['semgrep', 'semgrepignore'],
    },
    {
      name: 'serverless',
      fileNames: [
        '.serverless.yml',
        '.serverless.yaml',
        '.serverless.json',
        '.serverless.js',
        '.serverless.ts',
        '.serverless.cjs',
        '.serverless.mjs',
        'serverless.yml',
        'serverless.yaml',
        'serverless.json',
        'serverless.js',
        'serverless.ts',
        'serverless.cjs',
        'serverless.mjs',
      ],
    },
    {
      name: 'servicefabric',
      fileExtensions: ['sfproj'],
    },
    {
      name: 'settings',
      fileExtensions: [
        'settings',
        'setting',
        'options',
        'option',
        'opt',
        'opts',
      ],
    },
    {
      name: 'sequelize',
      fileNames: [
        '.sequelizerc',
        '.sequelizerc.js',
        '.sequelizerc.cjs',
        '.sequelizerc.mjs',
        '.sequelizerc.json',
      ],
    },
    {
      name: 'shadowcljs',
      fileNames: ['shadow-cljs.edn'],
    },
    {
      name: 'shen',
      fileExtensions: ['shen'],
    },
    {
      name: 'shellcheck',
      fileNames: ['.shellcheckrc', 'shellcheckrc'],
    },
    {
      name: 'shell',
      fileNames: [
        '.bash_profile',
        '.bashrc',
        '.bash_aliases',
        '.bash_functions',
        '.zshrc',
        '.zshenv',
        '.zprofile',
        '.fishrc',
        '.tcshrc',
        '.cshrc',
        '.kshrc',
        '.mkshrc',
        '.pdkshrc',
      ],
      fileExtensions: [
        'bash',
        'zsh',
        'fish',
        'ksh',
        'csh',
        'tcsh',
        'ash',
        'dash',
        'scsh',
        'mksh',
        'elvish',
        'ion',
        'nu',
        'oksh',
        'osh',
        'shar',
        'xiki',
        'xonsh',
        'yash',
      ],
    },
    {
      name: 'history',
      fileExtensions: [
        'bash_history',
        'zsh_history',
        'fish_history',
        'ksh_history',
        'csh_history',
        'tcsh_history',
        'irb-history',
        'lesshst',
      ],
    },
    {
      name: 'shipit',
      fileNames: [
        'shipitfile.js',
        'shipitfile.cjs',
        'shipitfile.mjs',
        'shipitfile.babel.js',
        'shipitfile.ts',
      ],
    },
    {
      name: 'shippable',
      fileNames: ['shippable.yml', 'shippable.yaml'],
    },
    {
      name: 'sigils',
      fileExtensions: ['sigils'],
    },
    {
      name: 'silverstripe',
      fileExtensions: ['ss'],
    },
    {
      name: 'siyuan',
      fileExtensions: ['siyuan', 'sy'],
    },
    {
      name: 'sketch',
      fileExtensions: ['sketch'],
    },
    {
      name: 'sketchup',
      fileExtensions: ['layout', 'sketchup', 'skm', 'skd', 'sketchupproj'],
    },
    {
      name: 'sketchmake',
      fileExtensions: ['skp', 'style'],
    },
    {
      name: 'skipper',
      fileExtensions: ['eskip'],
    },
    {
      name: 'skript',
      fileExtensions: ['sk', 'skript'],
      light: true,
    },
    {
      name: 'slang',
      fileExtensions: ['slang'],
    },
    {
      name: 'slash',
      fileExtensions: ['slash', 'sl'],
    },
    {
      name: 'slice',
      fileExtensions: ['ice'],
    },
    {
      name: 'slim',
      fileExtensions: ['slim'],
    },
    {
      name: 'slug',
      fileExtensions: ['slugignore'],
      fileNames: [
        'slugs/js',
        'slugs/cjs',
        'slugs/mjs',
        'slugs/jsx',
        'slugs/ts',
        'slugs/tsx',
        'slugs/php',
        '[slug].js',
        '[slug].cjs',
        '[slug].mjs',
        '[slug].jsx',
        '[slug].ts',
        '[slug].tsx',
        '[slug].php',
      ],
    },
    {
      name: 'smartos',
      fileNames: ['smartos.iso', 'smartos.img', 'smartos.deb'],
    },
    {
      name: 'smarty',
      fileExtensions: ['tpl', 'smarty'],
    },
    {
      name: 'smithy',
      fileExtensions: ['smithy'],
    },
    {
      name: 'sml',
      fileExtensions: ['mlb', 'mlton', 'sml', 'sig', 'fun', 'cm', 'grm'],
    },
    {
      name: 'snakemake',
      fileExtensions: ['smk', 'rule', 'rules', 'bam'],
    },
    {
      name: 'snakefile',
      fileNames: ['Snakefile', 'snakefile'],
    },
    {
      name: 'snapcraft',
      fileNames: ['snapcraft.yaml', 'snapcraft.yml'],
    },
    {
      name: 'snapsvg',
      fileNames: [
        'snap.svg.js',
        'snap.svg.cjs',
        'snap.svg.mjs',
        'snap.svg-min.js',
        'snap.svg.min.js',
      ],
    },
    {
      name: 'snapshot',
      fileExtensions: ['snap'],
    },
    {
      name: 'snort',
      fileExtensions: ['snort'],
    },
    {
      name: 'snowpack',
      fileNames: [
        'snowpack.config.js',
        'snowpack.config.ts',
        'snowpack.config.cjs',
        'snowpack.config.mjs',
        'snowpack.config.json',
        'snowpack.config.yaml',
        'snowpack.config.yml',
      ],
    },
    {
      name: 'snyk',
      fileExtensions: ['snyk'],
    },
    {
      name: 'solidity',
      fileExtensions: ['sol', 'solidity'],
    },
    {
      name: 'solidarity',
      fileNames: ['.solidarity', '.solidarity.json'],
    },
    {
      name: 'sonar',
      fileExtensions: [
        'sonar',
        'sonarqube',
        'sonarlint',
        'sonarlintignore',
        'sonarrc',
      ],
    },
    {
      name: 'sonarcloud',
      fileExtensions: [
        'sonarcloud.properties',
        'sonarcloud.yml',
        'sonarcloud.yaml',
      ],
      fileNames: [
        'sonar-project.properties',
        'sonar-project.json',
        'sonar-project.yml',
        'sonar-project.yaml',
        'sonarcloud.properties',
        'sonarcloud.json',
        'sonarcloud.yml',
        'sonarcloud.yaml',
      ],
    },
    {
      name: 'sophia',
      fileExtensions: ['aesl', 'aes'],
    },
    {
      name: 'sorbet',
      fileExtensions: ['rbi'],
    },
    {
      name: 'sourcemap',
      fileExtensions: [
        'map',
        'mapping',
        'enigma',
        'cidmap',
        'tiny',
        'tinyv2',
        'match',
      ],
    },
    {
      name: 'spaceengine',
      fileExtensions: ['spe'],
    },
    {
      name: 'spacemacs',
      fileNames: ['.spacemacs', 'spacemacs'],
    },
    {
      name: 'sparql',
      fileExtensions: ['rq', 'sparql'],
    },
    {
      name: 'spectral',
      fileNames: ['.spectral.yml', '.spectral.yaml'],
    },
    {
      name: 'spring',
      fileExtensions: ['spring'],
    },
    {
      name: 'sqf',
      fileExtensions: ['sqf', 'hqf'],
    },
    {
      name: 'sql',
      fileExtensions: [
        'pdb',
        'mysql',
        'hql',
        'psql',
        'xql',
        'xqm',
        'xqy',
        'cql',
        'prc',
        'viw',
      ],
    },
    {
      name: 'sqlite',
      fileExtensions: ['sqlite', 'sqlite3', 'db', 'db3', 'sqlite3-journal'],
    },
    {
      name: 'squarespace',
      fileExtensions: ['jsont'],
    },
    {
      name: 'squirrel',
      fileExtensions: ['nut', 'nutf', 'gnut'],
    },
    {
      name: 'stan',
      fileExtensions: ['stan'],
    },
    {
      name: 'stata',
      fileExtensions: [
        'stata',
        'do',
        'ado',
        'doh',
        'ihlp',
        'mata',
        'matah',
        'sthlp',
      ],
    },
    {
      name: 'stdlib',
      fileNames: [
        'stdlib.js',
        'stdlib.min.js',
        'stdlib.mjs',
        'stdlib.cjs',
        'stdlib.conf.js',
      ],
    },
    {
      name: 'stencilconfig',
      fileNames: ['stencil.config.js', 'stencil.config.ts'],
    },
    {
      name: 'stencil',
      fileExtensions: ['stencil'],
    },
    {
      name: 'steadybit',
      fileNames: [
        'steadybit.yml',
        'steadybit.yaml',
        '.steadybit.yml',
        '.steadybit.yaml',
      ],
    },
    {
      name: 'stitches',
      fileNames: [
        'stitches.config.js',
        'stitches.config.ts',
        'stitches.config.cjs',
        'stitches.config.mjs',
      ],
      fileExtensions: [
        'stitches.config.js',
        'stitches.config.ts',
        'stitches.config.cjs',
        'stitches.config.mjs',
      ],
    },
    {
      name: 'storyboard',
      fileExtensions: ['storyboard'],
    },
    {
      name: 'storyist',
      fileExtensions: ['story'],
    },
    {
      name: 'storybook',
      fileExtensions: [
        'stories.js',
        'stories.jsx',
        'stories.ts',
        'stories.tsx',
        'stories.mdx',
        'story.js',
        'story.jsx',
        'story.ts',
        'story.tsx',
        'story.mdx',
      ],
    },
    {
      name: 'stylelint',
      fileNames: [
        '.stylelintrc',
        '.stylelintrc.json',
        '.stylelintrc.yaml',
        '.stylelintrc.yml',
        '.stylelintrc.js',
        '.stylelintrc.cjs',
        '.stylelintrc.mjs',
        'stylelint.config.js',
        'stylelint.config.ts',
        'stylelint.config.cjs',
        'stylelint.config.mjs',
        'stylelint.config.json',
        'stylelint.config.yaml',
        'stylelint.config.yml',
      ],
    },
    {
      name: 'stylelintignore',
      fileNames: ['.stylelintignore', '.stylelintignore.json'],
    },
    {
      name: 'styleguidist',
      fileNames: [
        'styleguide.config.js',
        'styleguide.config.ts',
        'styleguide.config.cjs',
        'styleguide.config.mjs',
        'styleguide.config.json',
        'styleguide.config.yaml',
        'styleguide.config.yml',
        '.styleguiderc',
        '.styleguiderc.json',
        '.styleguiderc.yaml',
        '.styleguiderc.yml',
        '.styleguiderc.js',
        '.styleguiderc.cjs',
        '.styleguiderc.mjs',
      ],
    },
    {
      name: 'stylable',
      fileExtensions: ['st.css'],
    },
    {
      name: 'styledcomponents',
      fileExtensions: [
        'styled',
        'styled.js',
        'styled.cjs',
        'styled.mjs',
        'styled.jsx',
        'styled.ts',
        'styled.tsx',
        'styled.mdx',
        'styles.ts',
        'styles.js',
        'styles.cjs',
        'styles.mjs',
        'styles.jsx',
        'styles.tsx',
        'styles.mdx',
        'sc.ts',
        'sc.js',
        'sc.cjs',
        'sc.mjs',
        'sc.jsx',
        'sc.tsx',
        'sc.mdx',
      ],
    },
    {
      name: 'stylishhaskell',
      fileNames: ['.stylish-haskell.yaml', '.stylish-haskell.yml'],
    },
    {
      name: 'stylus',
      fileExtensions: ['styl'],
    },
    {
      name: 'sublime',
      fileExtensions: [
        'sublime-project',
        'sublime-workspace',
        'sublime-package',
        'sublime-macro',
      ],
    },
    {
      name: 'subtitle',
      fileExtensions: ['sub', 'sbv', 'srt', 'vtt'],
    },
    {
      name: 'scd',
      fileExtensions: [
        'sc',
        'scd',
        'scsyndef',
        'scsynthdef',
        'scx',
        'scxt',
        'scz',
      ],
    },
    {
      name: 'sss',
      fileExtensions: ['sss'],
    },
    {
      name: 'supabase',
      fileNames: [
        'supabase.json',
        'supabase.yml',
        'supabase.yaml',
        'supabase.py',
        'supabase.js',
        'supabase.ts',
      ],
    },
    {
      name: 'svelte',
      fileExtensions: ['svelte', 'svelte-kit'],
    },
    {
      name: 'svelte_config',
      fileNames: [
        'svelte.config.js',
        'svelte.config.ts',
        'svelte.config.cjs',
        'svelte.config.mjs',
        'svelte.config.json',
        'svelte.config.yaml',
        'svelte.config.yml',
      ],
    },
    {
      name: 'svgo',
      fileNames: [
        '.svgo.yml',
        '.svgo.yaml',
        '.svgo.json',
        '.svgo.js',
        '.svgo.cjs',
        '.svgo.mjs',
        'svgo.config.js',
        'svgo.config.ts',
        'svgo.config.cjs',
        'svgo.config.mjs',
        'svgo.config.json',
        'svgo.config.yaml',
        'svgo.config.yml',
      ],
    },
    {
      name: 'svgr',
      fileExtensions: ['svgrrc', 'svgrrc.json', 'svgrrc.yml', 'svgrrc.yaml'],
      fileNames: [
        'svgr.config.js',
        'svgr.config.ts',
        'svgr.config.cjs',
        'svgr.config.mjs',
        'svgr.config.json',
        'svgr.config.yaml',
        'svgr.config.yml',
      ],
    },
    {
      name: 'svx',
      fileExtensions: ['svx', 'mdsvex'],
    },
    {
      name: 'svn',
      fileExtensions: ['svn', 'svnignore'],
    },
    {
      name: 'swagger',
      fileNames: [
        'swagger.json',
        'swagger.yaml',
        'swagger.yml',
        'api.yml',
        'api.yaml',
        'api.json',
      ],
      fileExtensions: ['swagger', 'swag'],
    },
    {
      name: 'swc',
      fileExtensions: ['swc'],
    },
    {
      name: 'swiftlock',
      fileNames: [
        'package.pins',
        'package.resolved',
        'Package.resolved',
        'Package.pins',
      ],
    },
    {
      name: 'swig',
      fileExtensions: ['swig'],
    },
    {
      name: 'symfony',
      fileNames: ['symfony.lock'],
      light: true,
    },

    // endregion

    // region [T]
    {
      name: 'toc',
      fileExtensions: ['toc', 'listing'],
    },
    {
      name: 'version',
      fileNames: [
        'version',
        'version.txt',
        'version.md',
        'version.rst',
        'version.adoc',
        'ctags',
        'tag',
        'tags',
        'gemtags',
        'hgtags',
        'idtags',
        'pytags',
        'localtags',
      ],
      fileExtensions: [
        'ctags',
        'tag',
        'tags',
        'gemtags',
        'hgtags',
        'idtags',
        'pytags',
        'localtags',
        'pid',
        'tld',
        'version',
        'sha',
        'sha256',
        'shasum',
      ],
    },
    {
      name: 'tailwindcss',
      fileExtensions: [
        'tailwind.js',
        'tailwind.ts',
        'tailwind.cjs',
        'tailwind.mjs',
      ],
      fileNames: [
        'tailwind.js',
        'tailwind.conf.js',
        'tailwind.conf.ts',
        'tailwind.conf.cjs',
        'tailwind.conf.mjs',
        'tailwind.config.js',
        'tailwind.config.ts',
        'tailwind.config.cjs',
        'tailwind.config.mjs',
      ],
    },
    {
      name: 'tauri',
      fileNames: [
        'tauri.conf.json',
        'tauri.conf.js',
        'tauri.conf.ts',
        'tauri.conf.cjs',
        'tauri.conf.mjs',
        'tauri.js',
        'tauri.ts',
        'tauri.cjs',
        'tauri.mjs',
        'tauri.config.js',
        'tauri.config.ts',
        'tauri.config.cjs',
        'tauri.config.mjs',
      ],
    },
    {
      name: 'tcl',
      fileExtensions: [
        'tcl',
        'adp',
        'tm',
        'itcl',
        'itk',
        'exp',
        'tkvcs',
        'tkdiffrc',
      ],
    },
    {
      name: 'tea',
      fileExtensions: ['tea'],
    },
    {
      name: 'teal',
      fileExtensions: ['teal'],
    },
    {
      name: 'telegram',
      fileExtensions: ['tl', 'xps'],
    },
    {
      name: 'tt',
      fileExtensions: ['tt', 'tt2', 'tt3', 'tt4', 'ttml'],
    },
    {
      name: 'tera',
      fileExtensions: ['tera'],
    },
    {
      name: 'terraform',
      fileExtensions: [
        'tf',
        'tfvars',
        'tfstate',
        'tfplan',
        'tfignore',
        'tf.json',
      ],
    },
    {
      name: 'terser',
      fileExtensions: [
        'terserrc',
        'terserrc.conf',
        'terserignore',
        'uglifyrc',
        'uglifyignore',
        'terserrc.json',
        'uglifyrc.json',
      ],
    },
    {
      name: 'tern',
      fileExtensions: ['tern-project', 'tern-config', 'ternconfig'],
    },
    {
      name: 'testcafe',
      fileExtensions: ['testcaferc', 'testcaferc.json'],
    },
    {
      name: 'tex',
      fileExtensions: [
        'tex',
        'aux',
        'ltx',
        'sty',
        'dtx',
        'lbx',
        'cbx',
        'mkiv',
        'mkvi',
        'mkii',
        'pgf',
        'tikz',
        'txi',
        'texi',
      ],
    },
    {
      name: 'textlint',
      fileExtensions: ['textlintrc', 'textlintrc.json'],
    },
    {
      name: 'textile',
      fileExtensions: ['textile'],
    },
    {
      name: 'textmate',
      fileExtensions: [
        'tmLanguage',
        'tmTheme',
        'tmPreferences',
        'tmProperties',
        'tmSnippet',
        'tmCommand',
        'tmMacro',
        'tmBundle',
        'tmcg',
      ],
    },
    {
      name: 'thor',
      fileExtensions: ['thor'],
    },
    {
      name: 'thunderclient',
      fileNames: [
        'thunderclient.settings.json',
        'thunderclient.settings.js',
        'thunderclient.json',
        'thunderclient.js',
        'thunder-tests.json',
        'thunder-tests.js',
        'thunder-collection.js',
        'thunder-collection.json',
        'thunder-collection_Web.json',
      ],
    },
    {
      name: 'tidyparse',
      fileExtensions: ['tidyparserrc', 'tidyparserrc.json', 'tidy'],
    },
    {
      name: 'tilt',
      fileNames: ['Tiltfile'],
    },
    {
      name: 'tinymce',
      fileNames: [
        'tinymce.js',
        'tinymce.min.js',
        'tinymce.jquery.js',
        'tinymce.jquery.min.js',
        'tinymce.cjs',
        'tinymce.min.cjs',
        'tinymce.mjs',
        'tinymce.min.mjs',
        'tinymce.ts',
      ],
    },
    {
      name: 'tipe',
      fileExtensions: ['tipe'],
    },
    {
      name: 'tla',
      fileExtensions: ['tla'],
    },
    {
      name: 'tmux',
      fileNames: ['tmux.conf'],
      fileExtensions: ['tmux', 'tmux.conf'],
    },
    {
      name: 'truffle',
      fileNames: [
        'truffle.js',
        'truffle.cjs',
        'truffle.mjs',
        'truffle.ts',
        'truffle-config.js',
        'truffle-config.ts',
        'truffle-config.cjs',
        'truffle-config.mjs',
      ],
      fileExtensions: [
        'truffle.js',
        'truffle.cjs',
        'truffle.mjs',
        'truffle.ts',
      ],
    },
    {
      name: 'ttcn',
      fileExtensions: ['ttcn', 'ttcn3'],
    },
    {
      name: 'tomcat',
      fileNames: [
        'server.xml',
        'web.xml',
        'context.xml',
        'tomcat-users.xml',
        'tomcat.conf',
        'tomcat.java',
      ],
    },
    {
      name: 'todo',
      fileNames: ['todo', 'todo.txt', 'todo.md', 'todo.rst', 'todo.adoc'],
      fileExtensions: ['todo', 'taskpaper'],
    },
    {
      name: 'toit',
      fileExtensions: ['toit'],
    },
    {
      name: 'tox',
      fileNames: ['tox.ini'],
    },
    {
      name: 'tsconfig',
      fileNames: [
        'tsconfig.json',
        'tsconfig.base.json',
        'tsconfig.build.json',
        'tsconfig.spec.json',
        'tsconfig.lib.json',
        'tsconfig.eslint.json',
        'tsconfig.js',
        'tsconfig.cjs',
        'tsconfig.mjs',
        'tsconfig.ts',
        'tsconfig.yml',
        'tsconfig.yaml',
      ],
      fileExtensions: [
        'tsconfig.js',
        'tsconfig.cjs',
        'tsconfig.mjs',
        'tsconfig.ts',
        'tsconfig.json',
        'tsconfig.yml',
        'tsconfig.yaml',
      ],
    },
    {
      name: 'tslint',
      fileNames: [
        'tslint.json',
        'tslint.base.json',
        'tslint.build.json',
        'tslint.spec.json',
        'tslint.lib.json',
        'tslint.eslint.json',
        'tslint.js',
        'tslint.cjs',
        'tslint.mjs',
        'tslint.ts',
        'tslint.yml',
        'tslint.yaml',
      ],
      fileExtensions: [
        'tslint.js',
        'tslint.cjs',
        'tslint.mjs',
        'tslint.ts',
        'tslint.json',
        'tslint.yml',
        'tslint.yaml',
      ],
    },
    {
      name: 'travis',
      fileExtensions: ['travis.yml', 'travis.yaml'],
    },
    {
      name: 'tuc',
      fileExtensions: ['tuc'],
    },
    {
      name: 'turborepo',
      fileNames: ['turbo.config.js', 'turbo.config.ts', 'turbo.json'],
    },
    {
      name: 'turing',
      fileExtensions: ['tu'],
    },
    {
      name: 'twig',
      fileExtensions: ['twig'],
    },
    {
      name: 'twine',
      fileExtensions: ['tw', 'twee'],
    },
    {
      name: 'txl',
      fileExtensions: ['txl'],
    },
    {
      name: 'typedoc',
      fileNames: [
        'typedoc.json',
        'typedoc.js',
        'typedoc.ts',
        'typedoc.cjs',
        'typedoc.mjs',
      ],
    },
    {
      name: 'dts',
      fileExtensions: ['d.ts'],
    },
    {
      name: 'typings',
      fileNames: ['typings.json'],
    },
    {
      name: 'typo3',
      fileExtensions: ['typoscript'],
    },

    // endregion

    // region [U]
    {
      name: 'ufo',
      fileExtensions: ['ufo', 'ufoz', 'glif'],
    },
    {
      name: 'uikit',
      fileNames: [
        'uikit.js',
        'uikit.min.js',
        'uikit.cjs',
        'uikit.min.cjs',
        'uikit.mjs',
        'uikit.min.mjs',
      ],
    },
    {
      name: 'uml',
      fileExtensions: ['uml', 'iuml', 'puml', 'pu', 'plantuml', 'wsd'],
    },
    {
      name: 'unicode',
      fileExtensions: ['ldml', 'unicode'],
    },
    {
      name: 'unibeautify',
      fileExtensions: [
        'unibeautifyrc',
        'unibeautifyrc.json',
        'unibeautifyrc.yml',
        'unibeautifyrc.yaml',
      ],
      fileNames: [
        'unibeautify.config.js',
        'unibeautify.config.cjs',
        'unibeautify.config.mjs',
        'unibeautify.config.ts',
        'unibeautify.config.yaml',
        'unibeautify.config.yml',
        'unibeautify.config.json',
      ],
    },
    {
      name: 'unibeautifyrc',
      fileNames: [
        '.unibeautifyrc',
        'unibeautifyrc.config.js',
        'unibeautifyrc.config.cjs',
        'unibeautifyrc.config.mjs',
        'unibeautifyrc.config.ts',
        'unibeautifyrc.config.yaml',
        'unibeautifyrc.config.yml',
        'unibeautifyrc.config.json',
      ],
    },
    {
      name: 'unity',
      fileExtensions: [
        'unity',
        'unitypackage',
        'unity3d',
        'unityproj',
        'u3d',
        'ply',
        'fbx',
        'anim',
        'asset',
        'mat',
        'prefab',
        'meta',
        'cubemap',
      ],
    },
    {
      name: 'uos',
      fileExtensions: ['uos', 'uof', 'uop', 'uot'],
    },
    {
      name: 'unison',
      fileExtensions: ['u'],
    },
    {
      name: 'unlicense',
      fileNames: [
        'unlicense',
        'unlicense.txt',
        'unlicense.md',
        'unlicense.rst',
        'unlicence',
        'unlicence.txt',
        'unlicence.md',
        'unlicence.rst',
      ],
    },
    {
      name: 'uno',
      fileExtensions: ['uno', 'unoproj'],
    },
    {
      name: 'unocss',
      fileNames: [
        'uno.config.js',
        'uno.config.cjs',
        'uno.config.mjs',
        'uno.config.ts',
        'unocss.config.js',
        'unocss.config.cjs',
        'unocss.config.mjs',
        'unocss.config.ts',
      ],
    },
    {
      name: 'unreal',
      fileExtensions: [
        'uplugin',
        'uproject',
        'umap',
        'uasset',
        'unr',
        'utx',
        'umx',
        'uax',
        'ukx',
        'uz',
        'upkg',
        'uc',
        'upl',
        'asc',
        'lwo',
      ],
    },
    {
      name: 'urweb',
      fileExtensions: ['ur', 'urs'],
    },

    // endregion [U]

    // region [V]
    {
      name: 'v',
      fileExtensions: ['v', 'vh'],
    },
    {
      name: 'v8',
      fileExtensions: ['v8', 'v8flags'],
    },
    {
      name: 'vagrant',
      fileExtensions: ['vagrantfile'],
      fileNames: ['vagrantfile'],
    },
    {
      name: 'vala',
      fileExtensions: ['vala', 'vapi'],
    },
    {
      name: 'vanillaextract',
      fileExtensions: ['css.ts', 'css.js', 'css.cjs', 'css.mjs'],
    },
    {
      name: 'vapor',
      fileNames: ['vapor.json', 'vapor.yml', 'vapor.yaml'],
    },
    {
      name: 'vash',
      fileExtensions: ['vash'],
    },
    {
      name: 'vcl',
      fileExtensions: ['vcl'],
    },
    {
      name: 'velocity',
      fileExtensions: ['vm', 'fhtml', 'vtl'],
    },
    {
      name: 'vercel',
      fileNames: ['vercel.json', 'vercel.yml', 'vercel.yaml'],
      light: true,
    },
    {
      name: 'vercelignore',
      fileExtensions: ['vercelignore'],
      light: true,
    },
    {
      name: 'verdaccio',
      fileNames: ['verdaccio.yml', 'verdaccio.yaml'],
    },
    {
      name: 'verilog',
      fileExtensions: ['veo', 'sv', 'svh'],
    },
    {
      name: 'version',
      fileNames: ['version', 'version.txt', 'version.md', 'version.rst'],
      fileExtensions: ['version'],
    },
    {
      name: 'vhdl',
      fileExtensions: ['vhd', 'vhdl', 'vhf', 'vhi', 'vho', 'vhs', 'vht', 'vhw'],
    },
    {
      name: 'vim',
      fileExtensions: ['vim', 'vimrc', 'gvimrc', 'exrc', 'viml'],
    },
    {
      name: 'visio',
      fileExtensions: [
        'vsd',
        'vdx',
        'vdw',
        'vsw',
        'vss',
        'vst',
        'vsx',
        'vsl',
        'vtx',
        'vssx',
        'vstx',
        'vsdx',
        'vrd',
      ],
    },
    {
      name: 'vb',
      fileExtensions: ['vb', 'bas', 'vba', 'frm', 'basic', 'vbs', 'vbhtml'],
    },
    {
      name: 'vbproj',
      fileExtensions: ['vbproj'],
    },
    {
      name: 'vs',
      fileExtensions: [
        'vs',
        'vssettings',
        'vstemplate',
        'vsixmanifest',
        'vsconfig',
        'modelproj',
        'njsproj',
        'wmaproj',
        'sln',
        'suo',
        'rc',
      ],
    },
    {
      name: 'vitest',
      fileNames: [
        'vitest.config.js',
        'vitest.config.cjs',
        'vitest.config.mjs',
        'vitest.config.ts',
      ],
    },
    {
      name: 'vite',
      fileNames: [
        'vite.config.js',
        'vite.config.cjs',
        'vite.config.mjs',
        'vite.config.ts',
      ],
    },
    {
      name: 'vm',
      fileExtensions: [
        'vbox',
        'vdi',
        'vbox-prev',
        'vbox-extpack',
        'vbox_version',
        'vhdx',
      ],
    },
    {
      name: 'vmware',
      fileExtensions: [
        'vmx',
        'vmdk',
        'vmxf',
        'vmsd',
        'vmss',
        'vmsn',
        'vmx~',
        'nvram',
        'vmtx',
        'vswp',
      ],
    },
    {
      name: 'volt',
      fileExtensions: ['volt'],
      light: true,
    },
    {
      name: 'vray',
      fileExtensions: [
        'vray',
        'vrimg',
        'vrmesh',
        'vrscene',
        'vrmat',
        'vrmatlib',
        'vrmatlib2',
      ],
    },
    {
      name: 'vsix',
      fileExtensions: ['vsix', 'vsixmanifest'],
      light: true,
    },
    {
      name: 'vscode',
      fileExtensions: ['vscode', 'code-workspace'],
    },
    {
      name: 'vscodesettings',
      fileNames: [
        'launch.json',
        'tasks.json',
        'settings.json',
        'extensions.json',
        '.vscode/json',
      ],
    },
    {
      name: 'vscodeignore',
      fileExtensions: ['vscodeignore', 'vscodeignore.json'],
    },
    {
      name: 'tfs',
      fileNames: ['vsts-ci.yml', 'vsts-ci.yaml'],
      fileExtensions: ['vsts-ci.yml', 'vsts-ci.yaml'],
    },
    {
      name: 'tfsignore',
      fileExtensions: ['tfignore', 'tfsignore'],
    },
    {
      name: 'vueconfig',
      fileNames: [
        'vue.config.js',
        'vue.config.cjs',
        'vue.config.mjs',
        'vue.config.ts',
      ],
    },
    {
      name: 'vuerc',
      fileExtensions: ['vuerc'],
    },
    {
      name: 'vuex',
      fileExtensions: ['vuex'],
    },
    {
      name: 'vyper',
      fileExtensions: ['vy', 'vyper'],
    },

    // endregion

    // region [W]
    {
      name: 'w3c',
      fileNames: ['w3c.json'],
    },
    {
      name: 'wallaby',
      fileNames: [
        'wallaby.js',
        'wallaby.cjs',
        'wallaby.mjs',
        'wallaby.ts',
        'wallaby.conf.js',
        'wallaby.conf.cjs',
        'wallaby.conf.mjs',
        'wallaby.conf.ts',
        '.wallaby.js',
        '.wallaby.cjs',
        '.wallaby.mjs',
        '.wallaby.ts',
      ],
    },
    {
      name: 'walt',
      fileExtensions: ['walt'],
    },
    {
      name: 'watchman',
      fileExtensions: ['watchmanconfig'],
      fileNames: ['watchman.json', 'watchman.config.json'],
    },
    {
      name: 'warcraft3',
      fileExtensions: ['wc3', 'jass', 'zn'],
    },
    {
      name: 'webassembly',
      fileExtensions: ['wasm', 'wat', 'wast'],
    },
    {
      name: 'wdl',
      fileExtensions: ['wdl'],
    },
    {
      name: 'web2py',
      fileExtensions: ['web2py'],
    },
    {
      name: 'webgl',
      fileExtensions: ['webgl'],
    },
    {
      name: 'owl',
      fileExtensions: ['owl'],
    },
    {
      name: 'webpack',
      fileNames: [
        'webpack.common.js',
        'webpack.config.js',
        'webpack.dev.js',
        'webpack.prod.js',
        'webpack.common.cjs',
        'webpack.config.cjs',
        'webpack.dev.cjs',
        'webpack.prod.cjs',
        'webpack.common.mjs',
        'webpack.config.mjs',
        'webpack.dev.mjs',
        'webpack.prod.mjs',
        'webpack.common.ts',
        'webpack.config.ts',
        'webpack.dev.ts',
        'webpack.prod.ts',
        'webpack.common.coffee',
        'webpack.config.coffee',
        'webpack.dev.coffee',
        'webpack.prod.coffee',
        'webpack.common.es6',
        'webpack.config.es6',
        'webpack.dev.es6',
        'webpack.prod.es6',
      ],
    },
    {
      name: 'webvtt',
      fileExtensions: ['vtt'],
    },
    {
      name: 'webhint',
      fileExtensions: ['hintrc'],
    },
    {
      name: 'wenyan',
      fileExtensions: ['wy'],
    },
    {
      name: 'wepy',
      fileExtensions: ['wpy'],
    },
    {
      name: 'webp',
      fileExtensions: ['webp'],
    },
    {
      name: 'wercker',
      fileNames: ['wercker.yaml', 'wercker.yml'],
    },
    {
      name: 'wget',
      fileExtensions: ['wgetrc', 'wget-hsts'],
    },
    {
      name: 'wgsl',
      fileExtensions: ['wgsl'],
    },
    {
      name: 'windi',
      fileNames: ['windi.config.js', 'windi.config.ts'],
    },
    {
      name: 'windows',
      fileExtensions: ['bat', 'exe', 'ms', 'msi', 'reg', 'msc'],
    },
    {
      name: 'winui',
      fileExtensions: ['xaml', 'baml'],
    },
    {
      name: 'wikitext',
      fileExtensions: ['wt', 'wikitext'],
      light: true,
    },
    {
      name: 'wix',
      fileExtensions: ['wix', 'wixproj', 'wixobj', 'wxi', 'wxl'],
    },
    {
      name: 'word',
      fileExtensions: [
        'doc',
        'docx',
        'docm',
        'docxml',
        'dotm',
        'dotx',
        'wri',
        'odt',
        'odtx',
      ],
    },
    {
      name: 'wolfram',
      fileExtensions: ['wl', 'wls', 'wlt'],
    },
    {
      name: 'woodpecker',
      fileExtensions: ['woodpecker.yml', 'woodpecker.yaml'],
    },
    {
      name: 'wordpress',
      fileNames: [
        'wp-admin.php',
        'wp-login.php',
        'wp-config.php',
        'wp-env.json',
        'wp-cli.yaml',
      ],
    },
    {
      name: 'wordpressignore',
      fileExtensions: ['distignore'],
    },
    {
      name: 'workbox',
      fileNames: [
        'workbox-config.js',
        'workbox-config.cjs',
        'workbox-config.mjs',
        'workbox-config.ts',
      ],
    },
    {
      name: 'wpml',
      fileNames: ['wpml-config.xml'],
    },
    {
      name: 'wurst',
      fileExtensions: ['wurst'],
    },
    {
      name: 'wxss',
      fileExtensions: ['wxss'],
    },
    {
      name: 'wxml',
      fileExtensions: ['wxml'],
    },
    {
      name: 'wxs',
      fileExtensions: ['wxs'],
    },
    // endregion

    // region [X]
    {
      name: 'x10',
      fileExtensions: ['x10'],
    },
    {
      name: 'x11',
      fileExtensions: [
        'Xauthority',
        'Xclients',
        'Xinitrc',
        'Xinputrc',
        'Xprofile',
        'Xresources',
        'Xsession',
        'Xsession-errors',
        'Xsessionrc',
        'Xusers',
        'Xvnc-session',
        'Xscreensaver',
      ],
    },
    {
      name: 'xamarin',
      fileExtensions: ['workbook'],
    },
    {
      name: 'xmos',
      fileExtensions: ['xc'],
    },
    {
      name: 'xcode',
      fileExtensions: [
        'xcodeproj',
        'xcworkspace',
        'xcplayground',
        'xcworkspacedata',
        'xcplugindata',
        'xcconfig',
        'xccheckout',
        'xcscheme',
        'xctemplate',
        'xctarget',
        'xctask',
        'xcuserstate',
        'xcassets',
        'xcdatamodel',
        'xcsettings',
        'xclangspec',
        'xcmappingmodel',
        'mode1v3',
        'mode3v3',
      ],
    },
    {
      name: 'xib',
      fileExtensions: ['xib'],
    },
    {
      name: 'xliff',
      fileExtensions: ['xliff', 'xlf'],
    },
    {
      name: 'xmake',
      fileNames: ['xmake.lua'],
    },
    {
      name: 'xstate',
      fileExtensions: [
        'machine.js',
        'machine.cjs',
        'machine.mjs',
        'machine.ts',
      ],
    },
    {
      name: 'xtend',
      fileExtensions: ['xtend'],
    },
    {
      name: 'xojo',
      fileExtensions: [
        'xojo_code',
        'xojo_menu',
        'xojo_toolbar',
        'xojo_window',
        'xojo_report',
        'xojo_script',
      ],
    },
    {
      name: 'xpages',
      fileExtensions: ['xsp-config', 'xsp.metadata'],
    },
    {
      name: 'xquery',
      fileExtensions: ['xquery'],
    },
    {
      name: 'xproc',
      fileExtensions: ['xpl', 'xproc'],
    },
    {
      name: 'xubuntu',
      fileNames: ['xubuntu.iso', 'xubuntu.deb'],
    },
    // endregion

    // region [Y]
    {
      name: 'yamllint',
      fileNames: ['.yamllint.yml', '.yamllint.yaml'],
      fileExtensions: ['yamllint'],
    },
    {
      name: 'yandex',
      fileNames: ['.yaspeller.json'],
      fileExtensions: ['yaspellerrc'],
    },
    {
      name: 'yang',
      fileExtensions: ['yang'],
    },
    {
      name: 'yara',
      fileExtensions: ['yar', 'yara'],
    },
    {
      name: 'yarn',
      fileNames: ['.yarnrc', 'yarn.json', 'yarn.js', '.yarnrc.yml'],
    },
    {
      name: 'yarnlock',
      fileNames: ['yarn.lock'],
    },
    {
      name: 'yarnclean',
      fileNames: ['.yarnclean', '.yarn-metadata', '.yarn-integrity'],
    },
    {
      name: 'yard',
      fileExtensions: ['yardopts'],
    },
    {
      name: 'yasm',
      fileExtensions: ['yasm'],
    },
    {
      name: 'yeoman',
      fileExtensions: ['yo-rc.json'],
    },
    {
      name: 'yona',
      fileExtensions: ['yona'],
    },
    {
      name: 'yorick',
      fileExtensions: ['yorick'],
    },
    {
      name: 'yue',
      fileExtensions: ['yue'],
    },
    {
      name: 'yui',
      fileNames: [
        'yui.js',
        'yui.ts',
        'yui.cjs',
        'yui.mjs',
        'yui-min.js',
        'yui.min.js',
        'yui-config.js',
        'yui-config.ts',
        'yui-config.cjs',
        'yui-config.mjs',
        'yahoo-config.js',
        'yahoo-config.ts',
        'yahoo-config.cjs',
        'yahoo-config.mjs',
      ],
    },
    {
      name: 'yvmrc',
      fileExtensions: ['yvmrc'],
    },

    // endregion

    // region [Z]
    {
      name: 'zbrush',
      fileExtensions: ['ztl', 'zbr', 'zpr'],
    },
    {
      name: 'zeit',
      fileNames: ['now.json'],
      light: true,
    },
    {
      name: 'zeitignore',
      fileExtensions: ['zeitignore', 'nowignore'],
    },
    {
      name: 'zephir',
      fileExtensions: ['zep', 'zephir'],
    },
    {
      name: 'zig',
      fileExtensions: ['zig'],
    },
    {
      name: 'zilog',
      fileExtensions: [
        'z80',
        'z180',
        'z280',
        'z380',
        'z80asm',
        'z180asm',
        'z280asm',
        'z380asm',
        'zilog',
        'plx',
      ],
    },
    {
      name: 'zimpl',
      fileExtensions: ['zimpl', 'zmpl', 'zpl'],
    },
    {
      name: 'zorinos',
      fileNames: ['zorinos.iso', 'zorinos.deb'],
    },
    {
      name: 'zork',
      fileExtensions: ['zap', 'xzap', 'zork', 'zabstr', 'zil', 'mud'],
    },
    {
      name: 'zenscript',
      fileExtensions: ['zs'],
    },
    {
      name: 'zsrc',
      fileExtensions: ['zsrc', 'zsrc.json'],
    },
    // endregion

    // region [Languages]
    {
      name: 'coffeescript',
      fileExtensions: ['coffee', 'litcoffee', 'iced', 'cjsx'],
    },
    {
      name: 'scala',
      fileExtensions: ['scala'],
    },
    {
      name: 'shell',
      fileExtensions: ['sh'],
    },
    {
      name: 'sql',
      fileExtensions: ['sql'],
    },
    {
      name: 'swift',
      fileExtensions: ['swift'],
    },
    {
      name: 'toml',
      fileExtensions: ['toml'],
    },
    // endregion
  ],
};
