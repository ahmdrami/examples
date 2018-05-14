import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';

const routes: Routes = [
    { path: 'posts', loadChildren: 'app/posts/posts.module#PostsModule' },
    { path: 'dform', loadChildren: 'app/dynamic-form/dynamic-form.module#DynamicFormModule' },
    { path: 'sanitize', loadChildren: 'app/sanitize-html/sanitize-html.module#SanitizeHtmlModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
