import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'bares',
    loadChildren: () => import('./pages/bares/bares.module').then( m => m.BaresPageModule)
  },
  {
    path: 'bar/:id',
    loadChildren: () => import('./pages/bar/bar.module').then( m => m.BarPageModule)
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
