import { RouterModule } from '@angular/router';
import { RootContainerComponent } from './containers/root';
import { PreviewContainerComponent } from './containers/preview';
var routes = [
    {
        path: '',
        redirectTo: '/experiment',
        pathMatch: 'full'
    },
    {
        path: 'experiment',
        component: RootContainerComponent,
        children: [
            {
                path: 'preview/:experimentID/:caseID',
                component: PreviewContainerComponent
            },
        ],
    },
];
export var Routing = RouterModule.forRoot(routes);
//# sourceMappingURL=routing.js.map