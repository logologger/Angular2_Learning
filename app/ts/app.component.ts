import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlayListComponenet} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives:[PlayListComponenet]
})

export class AppComponent {
mainHeading=Config.MAINHEADING;
videos:Array<Video>;


constructor(){

	this.videos=[
	new Video(1,"Rajat Singh","f8qBeaGe2S4","About Angular 2"),
	new Video(2,"Rajat Singh","f8qBeaGe2S4","About Angular 2"),
	new Video(3,"Rajat Singh","f8qBeaGe2S4","About Angular 2"),
	new Video(4,"Rajat Singh","f8qBeaGe2S4","About Angular 2"),

	];
}

}  
/* make the class public  */
