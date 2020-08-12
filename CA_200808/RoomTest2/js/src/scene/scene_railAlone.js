// import * as THREE from '../../libs/three.module.js';
// import {Camera, RoomCamera, MoveCamera} from '../camera/camera.js';
import {Camera} from '../camera/camera.js';
import ManyLine from '../objects/ManyLine.js';
import Triangle from '../objects/Triangle.js';
import FewLine from '../objects/FewLine.js';
// import FewLine from '../objects/FewLine_confuse.js';
import MiniTriangle from '../objects/MiniTriangle.js';
import Wave from '../objects/Wave.js';
import Rail from '../objects/rail.js';

/**
 * シーンクラス：カメラとライト
 */
export class Scene extends THREE.Scene {

    constructor(){

        super();

        this.camera = new Camera();//thisにすること！！！最終的にはgame2.jsでsceneにaddする

        // 環境光源
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        // ambientLight.castShadow = true;//これいれちゃだめ
        this.add(ambientLight);

        // 平行光源
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        // directionalLight.castShadow = true;
        // // this.add(directionalLight);

        //スポットライト
        // add spotlight for the shadows
        var spotLight = new THREE.SpotLight(0xffffff);
        spotLight.castShadow = true;
        spotLight.position.set(0, 250, 250);
        spotLight.intensity = 0.6;
        spotLight.shadow.mapSize.width = 2048;
        spotLight.shadow.mapSize.height = 2048;
        // spotLight.shadow.camera.fov = 120;
        // spotLight.shadow.camera.near = 1;
        // spotLight.shadow.camera.far = 1000;
        // this.add(spotLight);

        //シェーダーのエフェクトをマスクするためシーン２種類にわけた
        // this.scene1 = new Scene1();
        // this.add(this.scene1);

        this.scene2 = new Scene2();
        this.scene2.add(ambientLight);
        // this.scene2.add(directionalLight);
        this.scene2.add(spotLight);
        this.add(this.scene2);

        

    }

    update(){
        // TWEEN.update();
        this.camera.update();//lookAtで中心みてる
        // this.scene1.update();
        this.scene2.update();
    }

}

export class Scene1 extends THREE.Scene {

    constructor(){

        super();

        // //ライン
        // this._line = new Line();
        // this._line.position.set(0,0,0);
        // this.add(this._line);


        // //BOX
        // this.body = new THREE.Mesh(
        // new THREE.BoxGeometry(10, 10, 10),
        // new THREE.MeshLambertMaterial({
        //     color: 0xff0000,
        // })
        // );
        // this.body.position.set(0,0,0);
        // this.add(this.body);

    }
    
    update(){
        // this._line.update();
    }

}

export class Scene2 extends THREE.Scene {

    constructor(){

        super();

        // // ステージ
        // let stageMesh = new THREE.Mesh(
        //     new THREE.BoxGeometry(500, 0.1, 500),
        //     new THREE.MeshPhongMaterial({
        //         color: 0x98EAFF,
        //         side: THREE.DoubleSide,
        //         specular: 0x000000 
        //     })
        // );
        // stageMesh.position.set(0,-100,0);
        // stageMesh.receiveShadow = true;
        // this.add(stageMesh);

        // //BOX
        // this.body = new THREE.Mesh(
        // new THREE.BoxGeometry(10, 10, 10),
        // new THREE.MeshLambertMaterial({
        //     color: 0xff0000,
        // })
        // );
        // this.body.position.set(0,0,0);
        // this.body.castShadow = true;
        // this.add(this.body);

        //複数線
        this._manyLine = new ManyLine();
        // this._manyLine.rotation.z = 45 * Math.PI/180;
        this._manyLine.visible = false;
        this._manyLine.castShadow = true;
        this.add(this._manyLine);

        //三角形
        this._triangle = new Triangle();
        // this._triangle.rotation.x = 90 * Math.PI/180;
        this._triangle.visible = false;
        this.add(this._triangle);

        //少量線
        this._fewLine = new FewLine();
        // this._fewLine.position.set(-30,0,0);
        this._fewLine.rotation.z = -45 * Math.PI/180;
        this._fewLine.visible = false;
        this.add(this._fewLine);

        //ちび三角
        this._miniTriangle = new MiniTriangle();
        // this._miniTriangle.position.set(0,30,0);
        this._miniTriangle.visible = false;
        this.add(this._miniTriangle);

        //波
        this._wave = new Wave();
        this._wave.rotation.x = 90 * Math.PI/180;
        this._wave.visible = false;
        this.add(this._wave);

        //レール
        this._rail = new Rail();
        this._rail.position.set(-100,0,0);;
        this._rail.visible = false;
        this.add(this._rail);


        //円

        //四角

        //グリッチ

        this.scene = 0;

    }

    update(){

        this.visibleFalse = function(){
            this._manyLine.visible = false;
            this._triangle.visible = false;
            this._fewLine.visible = false;
            this._fewLine.frame = 0;
            this._miniTriangle.visible = false;
            this._wave.visible = false;
            this._rail.visible = false;
        }

        if(this.scene == 1){
            if(this._manyLine.visible == false){
                this.visibleFalse();
                this._manyLine.visible = true;
            }
            this._manyLine.update();
        }
        if(this.scene == 2){
            if(this._triangle.visible == false){
                this.visibleFalse();
                this._triangle.visible = true;
            }
            this._triangle.update();
        }
        if(this.scene == 3){
            if(this._fewLine.visible == false){
                this.visibleFalse();
                this._fewLine.visible = true;
            }
            this._fewLine.update();
        }
        if(this.scene == 4){
            if(this._miniTriangle.visible == false){
                this.visibleFalse();
                this._miniTriangle.visible = true;
            }
            this._miniTriangle.update();
        }

        if(this.scene == 5){
            if(this._wave.visible == false){
                this.visibleFalse();
                this._wave.visible = true;
            }
            this._wave.update();
        }

        if(this.scene == 6){
            if(this._rail.visible == false){
                this.visibleFalse();
                this._rail.visible = true;
            }
            this._rail.update();
            console.log("rail");
        }

    }



}