Azure deployment
================

`deploy.cmd` is used by
 [Kudu Deployment Hook](https://github.com/projectkudu/kudu/wiki/Deployment-hooks)
 to deploy to [Azure Web App Services](https://azure.microsoft.com/en-us/services/app-service/web/)

It builds the app and makes it accessible on Azure App Service.

Azure Resource Management template `azuredeploy.json` is in the root of the project.
 Basically, it allows to deploy the app instantly using __Deploy to Azure__ button.
 It can be used as an example for your own template.

IMPORTANT! Current `deploy.cmd` is not supposed to be used in production and presence here
 just for __Deploy to Azure__ feature. Normally you should use your CI/CD flow
 to build/deploy the app.