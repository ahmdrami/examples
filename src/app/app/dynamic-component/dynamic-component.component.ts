import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { AdDirective } from './ad-directive.directive';
import { AdComponent } from './ad.component';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.sass']
})
export class DynamicComponentComponent implements OnInit, OnDestroy {

  @Input() ads: any[];
  currentAdIndex =  -1;
  @ViewChild(AdDirective) adDir: AdDirective;
  inerval: any;

  constructor(
    private componentFactoryResolve: ComponentFactoryResolver
  ) { }



  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.inerval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolve.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.adDir.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.inerval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

}
