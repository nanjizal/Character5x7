/*
MIT License

Copyright (c) 2019 Nanjizal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// Author: Nanjazal
// Title: Character5x7 Hello!
// Date: 31 March 2019

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 redCircle(in vec3 _color, in vec2 _st, in float _radius, in float x, in float y ){
    vec2 dist = _st-vec2(x,1.-y);
	vec3 red = vec3(1.0,0.0,0.0);
    return mix( _color, red, 
               1.-smoothstep(_radius-(_radius*0.01),
                             _radius+(_radius*0.01),
                             dot(dist,dist) )
                );
}
vec3 character( in bool v[35], in vec3 _color, in vec2 _st, in float _radius, in float x, in float y, float dist ){
    float sx = x;
    int col = 0;
    for (int i = 0; i < 35; i++){
        _color = mix( _color, redCircle(_color,_st,_radius,x,y), float( true==v[i] ));
        y += dist * float(col==4);
        col++;
        col -= 5 * int(col==5);
        x= sx+dist*float(col);
    }
    return _color;
}
void char32(inout bool v[35]){
    // space
    //'     ';
    //'     ';
    //'     ';
    //'     ';
    //'     ';
    //'     ';
    //'     ';
v[0]=false,v[1]=false,v[2]=false,v[3]=false,v[4]=false;
v[5]=false,v[6]=false,v[7]=false,v[8]=false,v[9]=false; 
v[10]=false,v[11]=false,v[12]=false,v[13]=false, v[14]=false;
v[15]=false, v[16]=false, v[17]=false, v[18]=false, v[19]=false;
v[20]=false, v[21]=false, v[22]=false, v[23]=false, v[24]=false;
v[25]=false, v[26]=false, v[27]=false, v[28]=false, v[29]=false;
v[30]=false, v[31]=false, v[32]=false, v[33]=false, v[34]=false;
}
void char33(inout bool v[35]){
    // !
    //'  *  ';
    //'  *  ';
    //'  *  ';
    //'  *  ';
    //'     ';
    //'  *  ';
    //'     '; 
v[0]=false,v[1]=false,v[2]=true,v[3]=false,v[4]=false;
v[5]=false,v[6]=false,v[7]=true,v[8]=false,v[9]=false; 
v[10]=false,v[11]=false,v[12]=true,v[13]=false, v[14]=false;
v[15]=false, v[16]=false, v[17]=true, v[18]=false, v[19]=false;
v[20]=false, v[21]=false, v[22]=false, v[23]=false, v[24]=false;
v[25]=false, v[26]=false, v[27]=true, v[28]=false, v[29]=false;
v[30]=false, v[31]=false, v[32]=false, v[33]=false, v[34]=false;
}

void char34(inout bool v[35])
{
    // "
    //'     ';
    //' * * ';
    //' * * ';
    //' * * ';
    //'     ';
    //'     ';
    //'     '; 
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=true,   v[7]=false,   v[8]=true,   v[9]=false; 
v[10]=false,  v[11]=true,  v[12]=false,  v[13]=true,  v[14]=false;
v[15]=false,  v[16]=true,  v[17]=false,  v[18]=true,  v[19]=false;
v[20]=false,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=false;
v[25]=false,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=false;
v[30]=false,  v[31]=false,  v[32]=false,  v[33]=false,  v[34]=false;
}

void char35(inout bool v[35])
{
    // #
    //' * * ';
    //' * * ';
    //'*****';
    //' * * ';
    //'*****';
    //' * * ';
    //' * * '; 
v[0]= false,  v[1]=true,   v[2]=false,   v[3]=true,   v[4]=false;
v[5]= false,  v[6]=true,   v[7]=false,   v[8]=true,   v[9]=false; 
v[10]=true,  v[11]=true,  v[12]=true,  v[13]=true,  v[14]=true;
v[15]=false,  v[16]=true,  v[17]=false,  v[18]=true,  v[19]=false;
v[20]=true,  v[21]=true,  v[22]=true,  v[23]=true,  v[24]=true;
v[25]=false,  v[26]=true,  v[27]=false,  v[28]=true,  v[29]=false;
v[30]=false,  v[31]=true,  v[32]=false,  v[33]=true,  v[34]=false;
}

void char36(inout bool v[35])
{
    // $
    //'  *  ';
    //' ****';
    //'* *  ';
    //' *** ';
    //'  * *';
    //'**** ';
    //'  *  '; 
v[0]= false,  v[1]=false,   v[2]=true,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=true,   v[7]=true,   v[8]=true,   v[9]=true; 
v[10]=true,  v[11]=false,  v[12]=true,  v[13]=false,  v[14]=false;
v[15]=false,  v[16]=true,  v[17]=true,  v[18]=true,  v[19]=false;
v[20]=false,  v[21]=false,  v[22]=true,  v[23]=false,  v[24]=true;
v[25]=true,  v[26]=true,  v[27]=true,  v[28]=true,  v[29]=false;
v[30]=false,  v[31]=false,  v[32]=true,  v[33]=false,  v[34]=false;
}




void char37(inout bool v[35])
{
    // %
    //'**   ';
    //'**  *';
    //'   * ';
    //'  *  ';
    //' *   ';
    //'*  **';
    //'   **'; 
v[0]= true,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=true; 
v[10]=false,  v[11]=false,  v[12]=false,  v[13]=true,  v[14]=false;
v[15]=false,  v[16]=false,  v[17]=true,  v[18]=false,  v[19]=false;
v[20]=false,  v[21]=true,  v[22]=false,  v[23]=false,  v[24]=false;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=true,  v[29]=true;
v[30]=false,  v[31]=false,  v[32]=false,  v[33]=true,  v[34]=true;
}     

void char38(inout bool v[35])
{
    // &
    //' **  ';
    //'*  * ';
    //'* *  ';
    //' *   ';
    //'* * *';
    //'*  * ';
    //' ** *'; 
v[0]= false,  v[1]=true,   v[2]=true,   v[3]=false,   v[4]=false;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=true,   v[9]=false; 
v[10]=true,  v[11]=false,  v[12]=true,  v[13]=false,  v[14]=false;
v[15]=false,  v[16]=true,  v[17]=false,  v[18]=false,  v[19]=false;
v[20]=true,  v[21]=false,  v[22]=true,  v[23]=false,  v[24]=false;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=true,  v[29]=false;
v[30]=false,  v[31]=true,  v[32]=true,  v[33]=false,  v[34]=true;
}
void char39(inout bool v[35])
{
    // '
    //'  ** ';
    //'   * ';
    //'  *  ';
    //'     ';
    //'     ';
    //'     ';
    //'     '; 
v[0]= false,  v[1]=false,   v[2]=true,   v[3]=true,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=true,   v[9]=false; 
v[10]=false,  v[11]=false,  v[12]=true,  v[13]=false,  v[14]=false;
v[15]=false,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=false;
v[20]=false,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=false;
v[25]=false,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=false;
v[30]=false,  v[31]=false,  v[32]=false,  v[33]=false,  v[34]=false;
}
void char40(inout bool v[35])
{
    // (
    //'  *  ';
    //' *   ';
    //'*    ';
    //'*    ';
    //'*    ';
    //' *   ';
    //'  *  '; 
v[0]= false,  v[1]=false,   v[2]=true,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=true,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=false;
v[15]=true,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=false;
v[20]=true,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=false;
v[25]=false,  v[26]=true,  v[27]=false,  v[28]=false,  v[29]=false;
v[30]=false,  v[31]=false,  v[32]=true,  v[33]=false,  v[34]=false;
}
void char41(inout bool v[35])
{
   // )
   //'  *  ';
   //'   * ';
   //'    *';
   //'    *';
   //'    *';
   //'   * ';
   //'  *  '; 
v[0]= false,  v[1]=false,   v[2]=true,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=true,   v[9]=false; 
v[10]=false,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=true;
v[15]=false,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=true;
v[20]=false,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=true;
v[25]=false,  v[26]=false,  v[27]=false,  v[28]=true,  v[29]=false;
v[30]=false,  v[31]=false,  v[32]=true,  v[33]=false,  v[34]=false;
}
void char42(inout bool v[35])
{
    // *
    //'     ';
    //'  *  ';
    //'* * *';
    //' *** ';
    //'* * *';
    //'  *  ';
    //'     '; 
v[0]= false,  v[1]=false,   v[2]=true,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=true,   v[8]=false,   v[9]=false; 
v[10]=true,  v[11]=false,  v[12]=true,  v[13]=false,  v[14]=true;
v[15]=false,  v[16]=true,  v[17]=true,  v[18]=true,  v[19]=false;
v[20]=true,  v[21]=false,  v[22]=true,  v[23]=false,  v[24]=true;
v[25]=false,  v[26]=false,  v[27]=true,  v[28]=false,  v[29]=false;
v[30]=false,  v[31]=false,  v[32]=true,  v[33]=false,  v[34]=false;
}
void char43(inout bool v[35])
{
    //43:// +
        //'     ';
        //'  *  ';
        //'  *  ';
        //'*****';
        //'  *  ';
        //'  *  ';
        //'     '; 
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=true,   v[8]=false,   v[9]=false; 
v[10]=false,  v[11]=false,  v[12]=true,  v[13]=false,  v[14]=false;
v[15]=true,  v[16]=true,  v[17]=true,  v[18]=true,  v[19]=true;
v[20]=false,  v[21]=false,  v[22]=true,  v[23]=false,  v[24]=false;
v[25]=false,  v[26]=false,  v[27]=true,  v[28]=false,  v[29]=false;
v[30]=false,  v[31]=false,  v[32]=false,  v[33]=false,  v[34]=false;
}
void char44(inout bool v[35])
{
    // ,
    //'     ';
    //'     ';
    //'     ';
    //'     ';
    //' **  ';
    //'  *  ';
    //' *   '; 
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=false,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=false;
v[15]=false,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=false;
v[20]=false,  v[21]=true,  v[22]=true,  v[23]=false,  v[24]=false;
v[25]=false,  v[26]=false,  v[27]=true,  v[28]=false,  v[29]=false;
v[30]=false,  v[31]=true,  v[32]=false,  v[33]=false,  v[34]=false;
}
void char45(inout bool v[35])
{
    // -
    //'     ';
    //'     ';
    //'     ';
    //'*****';
    //'     ';
    //'     ';
    //'     '; 
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=false,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=false;
v[15]=true,  v[16]=true,  v[17]=true,  v[18]=true,  v[19]=true;
v[20]=false,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=false;
v[25]=false,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=false;
v[30]=false,  v[31]=false,  v[32]=false,  v[33]=false,  v[34]=false;
}
void char46(inout bool v[35])
{
    // .
    //'     ';
    //'     ';
    //'     ';
    //'     ';
    //'     ';
    //'  ** ';
    //'  ** '; 
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=false,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=false;
v[15]=false,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=false;
v[20]=false,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=false;
v[25]=false,  v[26]=false,  v[27]=true,  v[28]=true,  v[29]=false;
v[30]=false,  v[31]=false,  v[32]=true,  v[33]=true,  v[34]=false;
}
void char47(inout bool v[35])
{
   // /
   //'    *';
   //'   * ';
   //'   * ';
   //'  *  ';
   //'  *  ';
   //' *   ';
   //'*    '; 
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=true;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=true,   v[9]=false; 
v[10]=false,  v[11]=false,  v[12]=false,  v[13]=true,  v[14]=false;
v[15]=false,  v[16]=false,  v[17]=true,  v[18]=false,  v[19]=false;
v[20]=false,  v[21]=false,  v[22]=true,  v[23]=false,  v[24]=false;
v[25]=false,  v[26]=true,  v[27]=false,  v[28]=false,  v[29]=false;
v[30]=true,  v[31]=false,  v[32]=false,  v[33]=false,  v[34]=false;
}
void char48(inout bool v[35])
{
    // 0
    //' *** ';
    //'*   *';
    //'*  **';
    //'* * *';
    //'**  *';
    //'*   *';
    //' *** ';
v[0]= false,  v[1]=true,   v[2]=true,   v[3]=true,   v[4]=false;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=true; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=true,  v[14]=true;
v[15]=true,  v[16]=false,  v[17]=true,  v[18]=false,  v[19]=true;
v[20]=true,  v[21]=true,  v[22]=false,  v[23]=false,  v[24]=true;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=false,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=false;
}
void char49(inout bool v[35])
{
    // 1
    //'  *  ';
    //' **  ';
    //'  *  ';
    //'  *  ';
    //'  *  ';
    //'  *  ';
    //' *** ';
v[0]= false,  v[1]=false,   v[2]=true,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=true,   v[7]=true,   v[8]=false,   v[9]=false; 
v[10]=false,  v[11]=false,  v[12]=true,  v[13]=false,  v[14]=false;
v[15]=false,  v[16]=false,  v[17]=true,  v[18]=false,  v[19]=false;
v[20]=false,  v[21]=false,  v[22]=true,  v[23]=false,  v[24]=false;
v[25]=false,  v[26]=false,  v[27]=true,  v[28]=false,  v[29]=false;
v[30]=false,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=false;
}
void char50(inout bool v[35])
{
    //50:// 2
    //' *** ';
    //'*   *';
    //'    *';
    //'  *  ';
    //' *   ';
    //'*    ';
    //'*****';
v[0]= false,  v[1]=true,   v[2]=true,   v[3]=true,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=true; 
v[10]=false,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=true;
v[15]=false,  v[16]=false,  v[17]=true,  v[18]=true,  v[19]=false;
v[20]=false,  v[21]=true,  v[22]=false,  v[23]=false,  v[24]=false;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=false;
v[30]=true,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=true;
}
void char51(inout bool v[35])
{
    //51:// 3
    //'*****';
    //'   * ';
    //'  *  ';
    //'   * ';
    //'    *';
    //'*   *';
    //' *** ';
v[0]= true,  v[1]=true,   v[2]=true,   v[3]=true,   v[4]=true;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=true,   v[9]=false; 
v[10]=false,  v[11]=false,  v[12]=true,  v[13]=false,  v[14]=false;
v[15]=false,  v[16]=false,  v[17]=false,  v[18]=true,  v[19]=false;
v[20]=false,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=true;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=false,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=false;
}
void char52(inout bool v[35])
{
    //52:// 4
    //'   * ';
    //'  ** ';
    //' * * ';
    //'*  * ';
    //'*****';
    //'   * ';
    //'   * ';
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=true,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=true,   v[8]=true,   v[9]=false; 
v[10]=false,  v[11]=true,  v[12]=false,  v[13]=true,  v[14]=false;
v[15]=true,  v[16]=false,  v[17]=false,  v[18]=true,  v[19]=false;
v[20]=true,  v[21]=true,  v[22]=true,  v[23]=true,  v[24]=true;
v[25]=false,  v[26]=false,  v[27]=false,  v[28]=true,  v[29]=false;
v[30]=false,  v[31]=false,  v[32]=false,  v[33]=true,  v[34]=false;
}
void char53(inout bool v[35])
{
    //53:// 5
    //'*****';
    //'*    ';
    //'**** ';
    //'    *';
    //'    *';
    //'*   *';
    //' *** ';
v[0]= true,  v[1]=true,   v[2]=true,   v[3]=true,   v[4]=true;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=true,  v[11]=true,  v[12]=true,  v[13]=true,  v[14]=false;
v[15]=false,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=true;
v[20]=false,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=true;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=false,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=false;
}
void char54(inout bool v[35])
{
    //54:// 6
    //'  ** ';
    //' *   ';
    //'*    ';
    //'**** ';
    //'*   *';
    //'*   *';
    //' *** ';
v[0]= false,  v[1]=false,   v[2]=true,   v[3]=true,   v[4]=false;
v[5]= false,  v[6]=true,   v[7]=true,   v[8]=false,   v[9]=false; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=false;
v[15]=true,  v[16]=true,  v[17]=true,  v[18]=true,  v[19]=false;
v[20]=true,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=true;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=false,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=false;
}
void char55(inout bool v[35])
{
    //55:// 7
    //'*****';
    //'    *';
    //'   * ';
    //'  *  ';
    //' *   ';
    //' *   ';
    //' *   ';
v[0]= true,  v[1]=true,   v[2]=true,   v[3]=true,   v[4]=true;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=true; 
v[10]=false,  v[11]=false,  v[12]=false,  v[13]=true,  v[14]=false;
v[15]=false,  v[16]=false,  v[17]=true,  v[18]=false,  v[19]=false;
v[20]=false,  v[21]=true,  v[22]=false,  v[23]=false,  v[24]=false;
v[25]=false,  v[26]=true,  v[27]=false,  v[28]=false,  v[29]=false;
v[30]=false,  v[31]=true,  v[32]=false,  v[33]=false,  v[34]=false;
}
void char56(inout bool v[35])
{
    //56:// 8
    //' *** ';
    //'*   *';
    //'*   *';
    //' *** ';
    //'*   *';
    //'*   *';
    //' *** ';
v[0]= false,  v[1]=true,   v[2]=true,   v[3]=true,   v[4]=false;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=true; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=true;
v[15]=false,  v[16]=true,  v[17]=true,  v[18]=true,  v[19]=false;
v[20]=true,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=true;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=false,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=false;
}
void char57(inout bool v[35])
{
    //57:// 9
    //' *** ';
    //'*   *';
    //'*   *';
    //' ****';
    //'    *';
    //'   * ';
    //' **  ';
v[0]= false,  v[1]=true,   v[2]=true,   v[3]=true,   v[4]=false;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=true; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=true;
v[15]=false,  v[16]=true,  v[17]=true,  v[18]=true,  v[19]=true;
v[20]=false,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=true;
v[25]=false,  v[26]=false,  v[27]=false,  v[28]=true,  v[29]=false;
v[30]=false,  v[31]=true,  v[32]=true,  v[33]=false,  v[34]=false;
}
void char58(inout bool v[35])
{
    //58:// :
    //'     ';
    //'  ** ';
    //'  ** ';
    //'     ';
    //'  ** ';
    //'  ** ';
    //'     ';
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=true,   v[8]=true,   v[9]=false; 
v[10]=false,  v[11]=false,  v[12]=true,  v[13]=true,  v[14]=false;
v[15]=false,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=false;
v[20]=false,  v[21]=false,  v[22]=true,  v[23]=true,  v[24]=false;
v[25]=false,  v[26]=false,  v[27]=true,  v[28]=true,  v[29]=false;
v[30]=false,  v[31]=false,  v[32]=false,  v[33]=false,  v[34]=false;
}
void char59(inout bool v[35])
{
    //59:// ;
    //'     ';
    //'  ** ';
    //'  ** ';
    //'     ';
    //'  ** ';
    //'   * ';
    //'  *  ';  
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=true,   v[8]=true,   v[9]=false; 
v[10]=false,  v[11]=false,  v[12]=true,  v[13]=true,  v[14]=false;
v[15]=false,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=false;
v[20]=false,  v[21]=false,  v[22]=true,  v[23]=true,  v[24]=false;
v[25]=false,  v[26]=false,  v[27]=false,  v[28]=true,  v[29]=false;
v[30]=false,  v[31]=false,  v[32]=true,  v[33]=false,  v[34]=false;
}
void char60(inout bool v[35])
{
    //60:// <
    //'   * ';
    //'  *  ';
    //' *   ';
    //'*    ';
    //' *   ';
    //'  *  ';
    //'   * ';   
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=true,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=true,   v[8]=false,   v[9]=false; 
v[10]=false,  v[11]=true,  v[12]=false,  v[13]=false,  v[14]=false;
v[15]=true,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=false;
v[20]=false,  v[21]=true,  v[22]=false,  v[23]=false,  v[24]=false;
v[25]=false,  v[26]=false,  v[27]=true,  v[28]=false,  v[29]=false;
v[30]=false,  v[31]=false,  v[32]=false,  v[33]=true,  v[34]=false;
}
void char61(inout bool v[35])
{
    //61:// =
    //'     ';
    //'     ';
    //'*****';
    //'     ';
    //'*****';
    //'     ';
    //'     '; 
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=true,  v[11]=true,  v[12]=true,  v[13]=true,  v[14]=true;
v[15]=false,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=false;
v[20]=true,  v[21]=true,  v[22]=true,  v[23]=true,  v[24]=true;
v[25]=false,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=false;
v[30]=false,  v[31]=false,  v[32]=false,  v[33]=false,  v[34]=false;
}
void char62(inout bool v[35])
{
    //62:// >
    //' *   ';
    //'  *  ';
    //'   * ';
    //'    *';
    //'   * ';
    //'  *  ';
    //' *   '; 
v[0]= false,  v[1]=true,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=true,   v[8]=false,   v[9]=false; 
v[10]=false,  v[11]=false,  v[12]=false,  v[13]=true,  v[14]=false;
v[15]=false,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=true;
v[20]=false,  v[21]=false,  v[22]=false,  v[23]=true,  v[24]=false;
v[25]=false,  v[26]=false,  v[27]=true,  v[28]=false,  v[29]=false;
v[30]=false,  v[31]=true,  v[32]=false,  v[33]=false,  v[34]=false;
}
void char63(inout bool v[35])
{
    //63:// ?
    //' *** ';
    //'*   *';
    //'    *';
    //'   * ';
    //'  *  ';
    //'     ';
    //'  *  ';  
v[0]= false,  v[1]=true,   v[2]=true,   v[3]=true,   v[4]=false;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=true; 
v[10]=false,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=true;
v[15]=false,  v[16]=false,  v[17]=false,  v[18]=true,  v[19]=false;
v[20]=false,  v[21]=false,  v[22]=true,  v[23]=false,  v[24]=false;
v[25]=false,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=false;
v[30]=false,  v[31]=false,  v[32]=true,  v[33]=false,  v[34]=false;
}
void char64(inout bool v[35])
{
    //64:// @
    //' *** ';
    //'*   *';
    //'    *';
    //' ** *';
    //'* * *';
    //'* * *';
    //' *** ';   
v[0]= false,  v[1]=true,   v[2]=true,   v[3]=true,   v[4]=false;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=true; 
v[10]=false,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=true;
v[15]=false,  v[16]=true,  v[17]=true,  v[18]=false,  v[19]=true;
v[20]=true,  v[21]=false,  v[22]=true,  v[23]=false,  v[24]=true;
v[25]=true,  v[26]=false,  v[27]=true,  v[28]=false,  v[29]=true;
v[30]=false,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=false;
}
void char65(inout bool v[35])
{
    //65:// A
    //' *** ';
    //'*   *';
    //'*   *';
    //'*   *';
    //'*****';
    //'*   *';
    //'*   *';   
v[0]= false,  v[1]=true,   v[2]=true,   v[3]=true,   v[4]=false;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=true; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=true;
v[15]=true,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=true;
v[20]=true,  v[21]=true,  v[22]=true,  v[23]=true,  v[24]=true;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=true,  v[31]=false,  v[32]=false,  v[33]=false,  v[34]=true;
}
void char66(inout bool v[35])
{
    //66:// B
    //'**** ';
    //'*   *';
    //'*   *';
    //'**** ';
    //'*   *';
    //'*   *';
    //'**** ';   
v[0]= true,  v[1]=true,   v[2]=true,   v[3]=true,   v[4]=false;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=true; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=true;
v[15]=true,  v[16]=true,  v[17]=true,  v[18]=true,  v[19]=false;
v[20]=true,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=true;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=true,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=false;
}
void char67(inout bool v[35])
{
    //67:// C
    //' *** ';
    //'*   *';
    //'*    ';
    //'*    ';
    //'*    ';
    //'*   *';
    //' *** ';  
v[0]= false,  v[1]=true,   v[2]=true,   v[3]=true,   v[4]=false;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=true; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=false;
v[15]=true,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=false;
v[20]=true,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=false;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=false,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=false;
}
void char68(inout bool v[35])
{
    //68:// D
    //'***  ';
    //'*  * ';
    //'*   *';
    //'*   *';
    //'*   *';
    //'*  * ';
    //'***  '; 
v[0]= true,  v[1]=true,   v[2]=true,   v[3]=false,   v[4]=false;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=true,   v[9]=false; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=true;
v[15]=true,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=true;
v[20]=true,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=true;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=true,  v[29]=false;
v[30]=true,  v[31]=true,  v[32]=true,  v[33]=false,  v[34]=false;
}
void char69(inout bool v[35])
{
    //69:// E
    //'*****';
    //'*    ';
    //'*    ';
    //'**** ';
    //'*    ';
    //'*    ';
    //'*****';  
v[0]= true,  v[1]=true,   v[2]=true,   v[3]=true,   v[4]=true;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=false;
v[15]=true,  v[16]=true,  v[17]=true,  v[18]=true,  v[19]=false;
v[20]=true,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=false;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=false;
v[30]=true,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=true;
}
void char70(inout bool v[35])
{
    //70:// F
    //'*****';
    //'*    ';
    //'*    ';
    //'**** ';
    //'*    ';
    //'*    ';
    //'*    ';  
v[0]= true,  v[1]=true,   v[2]=true,   v[3]=true,   v[4]=true;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=false;
v[15]=true,  v[16]=true,  v[17]=true,  v[18]=true,  v[19]=false;
v[20]=true,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=false;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=false;
v[30]=true,  v[31]=false,  v[32]=false,  v[33]=false,  v[34]=false;
}
void char71(inout bool v[35])
{
    //71:// G
    //' *** ';
    //'*   *';
    //'*    ';
    //'* ***';
    //'*   *';
    //'*   *';
    //' ****';  
v[0]= false,  v[1]=true,   v[2]=true,   v[3]=true,   v[4]=false;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=true; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=false;
v[15]=true,  v[16]=false,  v[17]=true,  v[18]=true,  v[19]=true;
v[20]=true,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=true;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=false,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=true;
}
void char72(inout bool v[35])
{
    //72:// H
    //'*   *';
    //'*   *';
    //'*   *';
    //'*****';
    //'*   *';
    //'*   *';
    //'*   *'; 
v[0]= true,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=true;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=true; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=true;
v[15]=true,  v[16]=true,  v[17]=true,  v[18]=true,  v[19]=true;
v[20]=true,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=true;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=true,  v[31]=false,  v[32]=false,  v[33]=false,  v[34]=true;
}
void char73(inout bool v[35])
{
    //73:// I
    //' *** ';
    //'  *  ';
    //'  *  ';
    //'  *  ';
    //'  *  ';
    //'  *  ';
    //' *** '; 
v[0]= false,  v[1]=true,   v[2]=true,   v[3]=true,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=true,   v[8]=false,   v[9]=false; 
v[10]=false,  v[11]=false,  v[12]=true,  v[13]=false,  v[14]=false;
v[15]=false,  v[16]=false,  v[17]=true,  v[18]=false,  v[19]=false;
v[20]=false,  v[21]=false,  v[22]=true,  v[23]=false,  v[24]=false;
v[25]=false,  v[26]=false,  v[27]=true,  v[28]=false,  v[29]=false;
v[30]=false,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=false;
}
void char74(inout bool v[35])
{
    //74:// J
    //' ****';
    //'   * ';
    //'   * ';
    //'   * ';
    //'   * ';
    //'*  * ';
    //' **  ';  
v[0]= false,  v[1]=true,   v[2]=true,   v[3]=true,   v[4]=true;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=true,   v[9]=false; 
v[10]=false,  v[11]=false,  v[12]=false,  v[13]=true,  v[14]=false;
v[15]=false,  v[16]=false,  v[17]=false,  v[18]=true,  v[19]=false;
v[20]=false,  v[21]=false,  v[22]=false,  v[23]=true,  v[24]=false;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=true,  v[29]=false;
v[30]=false,  v[31]=true,  v[32]=true,  v[33]=false,  v[34]=false;
}
void char75(inout bool v[35])
{
    //75:// K
    //'*   *';
    //'*  * ';
    //'* *  ';
    //'**   ';
    //'* *  ';
    //'*  * ';
    //'*   *';  
v[0]= true,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=true;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=true,   v[9]=false; 
v[10]=true,  v[11]=false,  v[12]=true,  v[13]=false,  v[14]=false;
v[15]=true,  v[16]=true,  v[17]=false,  v[18]=false,  v[19]=false;
v[20]=true,  v[21]=false,  v[22]=true,  v[23]=false,  v[24]=false;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=true,  v[29]=false;
v[30]=true,  v[31]=false,  v[32]=false,  v[33]=false,  v[34]=true;
}
void char76(inout bool v[35])
{
    //76:// L
    //'*    ';
    //'*    ';
    //'*    ';
    //'*    ';
    //'*    ';
    //'*    ';
    //'*****';  
v[0]= true,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=false;
v[15]=true,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=false;
v[20]=true,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=false;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=false;
v[30]=true,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=true;
}
void char77(inout bool v[35])
{
    //77:// M
    //'*   *';
    //'** **';
    //'* * *';
    //'* * *';
    //'*   *';
    //'*   *';
    //'*   *'; 
v[0]= true,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=true;
v[5]= true,  v[6]=true,   v[7]=false,   v[8]=true,   v[9]=true; 
v[10]=true,  v[11]=false,  v[12]=true,  v[13]=false,  v[14]=true;
v[15]=true,  v[16]=false,  v[17]=true,  v[18]=false,  v[19]=true;
v[20]=true,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=true;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=true,  v[31]=false,  v[32]=false,  v[33]=false,  v[34]=true;
}
void char78(inout bool v[35])
{
    //78:// N
    //'*   *';
    //'*   *';
    //'**  *';
    //'* * *';
    //'*  **';
    //'*   *';
    //'*   *'; 
v[0]= true,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=true;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=true; 
v[10]=true,  v[11]=true,  v[12]=false,  v[13]=false,  v[14]=true;
v[15]=true,  v[16]=false,  v[17]=true,  v[18]=false,  v[19]=true;
v[20]=true,  v[21]=false,  v[22]=false,  v[23]=true,  v[24]=true;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=true,  v[31]=false,  v[32]=false,  v[33]=false,  v[34]=true;
}
void char79(inout bool v[35])
{
    //79:// O
    //' *** ';
    //'*   *';
    //'*   *';
    //'*   *';
    //'*   *';
    //'*   *';
    //' *** '; 
v[0]= false,  v[1]=true,   v[2]=true,   v[3]=true,   v[4]=false;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=true; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=true;
v[15]=true,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=true;
v[20]=true,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=true;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=false,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=false;
}
void char80(inout bool v[35])
{
    //80:// P
    //'**** ';
    //'*   *';
    //'*   *';
    //'**** ';
    //'*    ';
    //'*    ';
    //'*    '; 
v[0]= true,  v[1]=true,   v[2]=true,   v[3]=true,   v[4]=false;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=true; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=true;
v[15]=true,  v[16]=true,  v[17]=true,  v[18]=true,  v[19]=false;
v[20]=true,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=false;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=false;
v[30]=true,  v[31]=false,  v[32]=false,  v[33]=false,  v[34]=false;
}
void char81(inout bool v[35])
{
    //81:// Q
    //' *** ';
    //'*   *';
    //'*   *';
    //'*   *';
    //'* * *';
    //'*  * ';
    //' ** *'; 
v[0]= false,  v[1]=true,   v[2]=true,   v[3]=true,   v[4]=false;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=true; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=true;
v[15]=true,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=true;
v[20]=true,  v[21]=false,  v[22]=true,  v[23]=false,  v[24]=true;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=true,  v[29]=false;
v[30]=false,  v[31]=true,  v[32]=true,  v[33]=false,  v[34]=true;
}
void char82(inout bool v[35])
{
    //82:// R
    //'**** ';
    //'*   *';
    //'*   *';
    //'**** ';
    //'* *  ';
    //'*  * ';
    //'*   *';  
v[0]= true,  v[1]=true,   v[2]=true,   v[3]=true,   v[4]=false;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=true; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=true;
v[15]=true,  v[16]=true,  v[17]=true,  v[18]=true,  v[19]=false;
v[20]=true,  v[21]=false,  v[22]=true,  v[23]=false,  v[24]=false;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=true,  v[29]=false;
v[30]=true,  v[31]=false,  v[32]=false,  v[33]=false,  v[34]=true;
}
void char83(inout bool v[35])
{
    //83:// S
    //' ****';
    //'*    ';
    //'*    ';
    //' *** ';
    //'    *';
    //'    *';
    //'**** ';  
v[0]= false,  v[1]=true,   v[2]=true,   v[3]=true,   v[4]=true;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=false;
v[15]=false,  v[16]=true,  v[17]=true,  v[18]=true,  v[19]=false;
v[20]=false,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=true;
v[25]=false,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=true,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=false;
}
void char84(inout bool v[35])
{
    //84:// T
    //'*****';
    //'  *  ';
    //'  *  ';
    //'  *  ';
    //'  *  ';
    //'  *  ';
    //'  *  ';  
v[0]= true,  v[1]=true,   v[2]=true,   v[3]=true,   v[4]=true;
v[5]= false,  v[6]=false,   v[7]=true,   v[8]=false,   v[9]=false; 
v[10]=false,  v[11]=false,  v[12]=true,  v[13]=false,  v[14]=false;
v[15]=false,  v[16]=false,  v[17]=true,  v[18]=false,  v[19]=false;
v[20]=false,  v[21]=false,  v[22]=true,  v[23]=false,  v[24]=false;
v[25]=false,  v[26]=false,  v[27]=true,  v[28]=false,  v[29]=false;
v[30]=false,  v[31]=false,  v[32]=true,  v[33]=false,  v[34]=false;
}
void char85(inout bool v[35])
{
    //85:// U
    //'*   *';
    //'*   *';
    //'*   *';
    //'*   *';
    //'*   *';
    //'*   *';
    //' *** ';  
v[0]= true,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=true;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=true; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=true;
v[15]=true,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=true;
v[20]=true,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=true;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=false,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=false;
}
void char86(inout bool v[35])
{
    //86:// V
    //'*   *';
    //'*   *';
    //'*   *';
    //'*   *';
    //'*   *';
    //' * * ';
    //'  *  '; 
v[0]= true,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=true;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=true; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=true;
v[15]=true,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=true;
v[20]=true,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=true;
v[25]=false,  v[26]=true,  v[27]=false,  v[28]=true,  v[29]=false;
v[30]=false,  v[31]=false,  v[32]=true,  v[33]=false,  v[34]=false;
}
void char87(inout bool v[35])
{
    //87:// W
    //'*   *';
    //'*   *';
    //'*   *';
    //'* * *';
    //'* * *';
    //'* * *';
    //' * * ';  
v[0]= true,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=true;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=true; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=true;
v[15]=true,  v[16]=false,  v[17]=true,  v[18]=false,  v[19]=true;
v[20]=true,  v[21]=false,  v[22]=true,  v[23]=false,  v[24]=true;
v[25]=true,  v[26]=false,  v[27]=true,  v[28]=false,  v[29]=true;
v[30]=false,  v[31]=true,  v[32]=false,  v[33]=true,  v[34]=false;
}
void char88(inout bool v[35])
{
    //88:// X
    //'*   *';
    //'*   *';
    //' * * ';
    //'  *  ';
    //' * * ';
    //'*   *';
    //'*   *';  
v[0]= true,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=true;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=true; 
v[10]=false,  v[11]=true,  v[12]=false,  v[13]=true,  v[14]=false;
v[15]=false,  v[16]=false,  v[17]=true,  v[18]=false,  v[19]=false;
v[20]=false,  v[21]=true,  v[22]=false,  v[23]=true,  v[24]=false;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=true,  v[31]=false,  v[32]=false,  v[33]=false,  v[34]=true;
}
void char89(inout bool v[35])
{
    //89:// Y
    //'*   *';
    //'*   *';
    //'*   *';
    //' * * ';
    //'  *  ';
    //'  *  ';
    //'  *  ';  
v[0]= true,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=true;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=true; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=true;
v[15]=false,  v[16]=true,  v[17]=false,  v[18]=true,  v[19]=false;
v[20]=false,  v[21]=false,  v[22]=true,  v[23]=false,  v[24]=false;
v[25]=false,  v[26]=false,  v[27]=true,  v[28]=false,  v[29]=false;
v[30]=false,  v[31]=false,  v[32]=true,  v[33]=false,  v[34]=false;
}
void char90(inout bool v[35])
{
    //90:// Z
    //'*****';
    //'    *';
    //'   * ';
    //'  *  ';
    //' *   ';
    //'*    ';
    //'*****';  
v[0]= true,  v[1]=true,   v[2]=true,   v[3]=true,   v[4]=true;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=true; 
v[10]=false,  v[11]=false,  v[12]=false,  v[13]=true,  v[14]=false;
v[15]=false,  v[16]=false,  v[17]=true,  v[18]=false,  v[19]=false;
v[20]=false,  v[21]=true,  v[22]=false,  v[23]=false,  v[24]=false;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=false;
v[30]=true,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=true;
}
void char91(inout bool v[35])
{
    //91:// [
    //' *** ';
    //' *   ';
    //' *   ';
    //' *   ';
    //' *   ';
    //' *   ';
    //' *** ';  
v[0]= false,  v[1]=true,   v[2]=true,   v[3]=true,   v[4]=false;
v[5]= false,  v[6]=true,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=false,  v[11]=true,  v[12]=false,  v[13]=false,  v[14]=false;
v[15]=false,  v[16]=true,  v[17]=false,  v[18]=false,  v[19]=false;
v[20]=false,  v[21]=true,  v[22]=false,  v[23]=false,  v[24]=false;
v[25]=false,  v[26]=true,  v[27]=false,  v[28]=false,  v[29]=false;
v[30]=false,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=false;
}
void char92(inout bool v[35])
{
    //92:// \
    //'*    ';
    //' *   ';
    //'  *  ';
    //'  *  ';
    //'   * ';
    //'   * ';
    //'    *';  
v[0]= true,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=true,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=false,  v[11]=false,  v[12]=true,  v[13]=false,  v[14]=false;
v[15]=false,  v[16]=false,  v[17]=true,  v[18]=false,  v[19]=false;
v[20]=false,  v[21]=false,  v[22]=false,  v[23]=true,  v[24]=false;
v[25]=false,  v[26]=false,  v[27]=false,  v[28]=true,  v[29]=false;
v[30]=false,  v[31]=false,  v[32]=false,  v[33]=false,  v[34]=true;
}
void char93(inout bool v[35])
{
    //93:// ]
    //' *** ';
    //'   * ';
    //'   * ';
    //'   * ';
    //'   * ';
    //'   * ';
    //' *** ';  
v[0]= false,  v[1]=false,   v[2]=true,   v[3]=true,   v[4]=true;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=true; 
v[10]=false,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=true;
v[15]=false,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=true;
v[20]=false,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=true;
v[25]=false,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=false,  v[31]=false,  v[32]=true,  v[33]=true,  v[34]=true;
}
void char94(inout bool v[35])
{
    //94:// ^
    //'  *  ';
    //' * * ';
    //'*   *';
    //'     ';
    //'     ';
    //'     ';
    //'     ';  
v[0]= false,  v[1]=false,   v[2]=true,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=true,   v[7]=false,   v[8]=true,   v[9]=false; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=true;
v[15]=false,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=false;
v[20]=false,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=false;
v[25]=false,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=false;
v[30]=false,  v[31]=false,  v[32]=false,  v[33]=false,  v[34]=false;
}
void char95(inout bool v[35])
{
    //95:// _
    //'     ';
    //'     ';
    //'     ';
    //'     ';
    //'     ';
    //'     ';
    //'*****'; 
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=false,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=false;
v[15]=false,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=false;
v[20]=false,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=false;
v[25]=false,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=false;
v[30]=true,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=true;
}
void char96(inout bool v[35])
{
    //96:// `
    //'*    ';
    //' *   ';
    //'     ';
    //'     ';
    //'     ';
    //'     ';
    //'     '; 
v[0]= true,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=true,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=false,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=false;
v[15]=false,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=false;
v[20]=false,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=false;
v[25]=false,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=false;
v[30]=false,  v[31]=false,  v[32]=false,  v[33]=false,  v[34]=false;
}
void char97(inout bool v[35])
{
    //97:// a
    //'     ';
    //'     ';
    //' *** ';
    //'    *';
    //' ****';
    //'*   *';
    //' ****'; 
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=false,  v[11]=true,  v[12]=true,  v[13]=true,  v[14]=false;
v[15]=false,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=true;
v[20]=false,  v[21]=true,  v[22]=true,  v[23]=true,  v[24]=true;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=false,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=true;
}
void char98(inout bool v[35])
{
    //98:// b
    //'*    ';
    //'*    ';
    //'* ** ';
    //'**  *';
    //'*   *';
    //'*   *';
    //'**** '; 
v[0]= true,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=true,  v[11]=false,  v[12]=true,  v[13]=true,  v[14]=false;
v[15]=true,  v[16]=true,  v[17]=false,  v[18]=false,  v[19]=true;
v[20]=true,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=true;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=true,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=false;
}
void char99(inout bool v[35])
{
    //99:// c
    //'     ';
    //'     ';
    //' *** ';
    //'*    ';
    //'*    ';
    //'*   *';
    //' *** '; 
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=false,  v[11]=true,  v[12]=true,  v[13]=true,  v[14]=false;
v[15]=true,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=false;
v[20]=true,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=false;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=false,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=false;
}
void char100(inout bool v[35])
{
    //100://d
    //'    *';
    //'    *';
    //' ** *';
    //'*  **';
    //'*   *';
    //'*   *';
    //' ****'; 
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=true;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=true; 
v[10]=false,  v[11]=true,  v[12]=true,  v[13]=false,  v[14]=true;
v[15]=true,  v[16]=false,  v[17]=false,  v[18]=true,  v[19]=true;
v[20]=true,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=true;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=false,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=true;
}
void char101(inout bool v[35])
{
    //101://e
    //'     ';
    //'     ';
    //' *** ';
    //'*   *';
    //'*****';
    //'*    ';
    //' *** '; 
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=false,  v[11]=true,  v[12]=true,  v[13]=true,  v[14]=false;
v[15]=true,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=true;
v[20]=true,  v[21]=true,  v[22]=true,  v[23]=true,  v[24]=true;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=false;
v[30]=false,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=false;
}
void char102(inout bool v[35])
{
    //102://f
    //'  ** ';
    //' *  *';
    //' *   ';
    //'***  ';
    //' *   ';
    //' *   ';
    //' *   '; 
v[0]= false,  v[1]=false,   v[2]=true,   v[3]=true,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=true; 
v[10]=false,  v[11]=true,  v[12]=false,  v[13]=false,  v[14]=false;
v[15]=true,  v[16]=true,  v[17]=true,  v[18]=false,  v[19]=false;
v[20]=false,  v[21]=true,  v[22]=false,  v[23]=false,  v[24]=false;
v[25]=false,  v[26]=true,  v[27]=false,  v[28]=false,  v[29]=false;
v[30]=false,  v[31]=true,  v[32]=false,  v[33]=false,  v[34]=false;
}
void char103(inout bool v[35])
{
    //103://g
    //'     ';
    //' ****';
    //'*   *';
    //'*   *';
    //' ****';
    //'    *';
    //' *** '; 
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=true,   v[7]=true,   v[8]=true,   v[9]=true; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=true;
v[15]=true,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=true;
v[20]=false,  v[21]=true,  v[22]=true,  v[23]=true,  v[24]=true;
v[25]=false,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=false,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=false;
}
void char104(inout bool v[35])
{
    //104://h
    //'*    ';
    //'*    ';
    //'* ** ';
    //'**  *';
    //'*   *';
    //'*   *';
    //'*   *'; 
v[0]= true,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=true,  v[11]=false,  v[12]=true,  v[13]=true,  v[14]=false;
v[15]=true,  v[16]=true,  v[17]=false,  v[18]=false,  v[19]=true;
v[20]=true,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=true;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=true,  v[31]=false,  v[32]=false,  v[33]=false,  v[34]=true;
}
void char105(inout bool v[35])
{
    //105://i
    //'  *  ';
    //'     ';
    //' **  ';
    //'  *  ';
    //'  *  ';
    //'  *  ';
    //' *** '; 
v[0]= false,  v[1]=false,   v[2]=true,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=false,  v[11]=true,  v[12]=true,  v[13]=false,  v[14]=false;
v[15]=false,  v[16]=false,  v[17]=true,  v[18]=false,  v[19]=false;
v[20]=false,  v[21]=false,  v[22]=true,  v[23]=false,  v[24]=false;
v[25]=false,  v[26]=false,  v[27]=true,  v[28]=false,  v[29]=false;
v[30]=false,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=false;
}
void char106(inout bool v[35])
{
    //106://j
    //'   * ';
    //'     ';
    //'  ** ';
    //'   * ';
    //'   * ';
    //'*  * ';
    //' **  '; 
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=true,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=false,  v[11]=false,  v[12]=true,  v[13]=true,  v[14]=false;
v[15]=false,  v[16]=false,  v[17]=false,  v[18]=true,  v[19]=false;
v[20]=false,  v[21]=false,  v[22]=false,  v[23]=true,  v[24]=false;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=true,  v[29]=false;
v[30]=false,  v[31]=true,  v[32]=true,  v[33]=false,  v[34]=false;
}
void char107(inout bool v[35])
{
    //107://k
    //'*    ';
    //'*    ';
    //'*  * ';
    //'* *  ';
    //'**   ';
    //'* *  ';
    //'*   *'; 
v[0]= true,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=true,  v[14]=false;
v[15]=true,  v[16]=false,  v[17]=true,  v[18]=false,  v[19]=false;
v[20]=true,  v[21]=true,  v[22]=false,  v[23]=false,  v[24]=false;
v[25]=true,  v[26]=false,  v[27]=true,  v[28]=false,  v[29]=false;
v[30]=true,  v[31]=false,  v[32]=false,  v[33]=false,  v[34]=true;
}
void char108(inout bool v[35])
{
    //108://l
    //' **  ';
    //'  *  ';
    //'  *  ';
    //'  *  ';
    //'  *  ';
    //'  *  ';
    //' ***'; 
v[0]= false,  v[1]=true,   v[2]=true,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=true,   v[8]=false,   v[9]=false; 
v[10]=false,  v[11]=false,  v[12]=true,  v[13]=false,  v[14]=false;
v[15]=false,  v[16]=false,  v[17]=true,  v[18]=false,  v[19]=false;
v[20]=false,  v[21]=false,  v[22]=true,  v[23]=false,  v[24]=false;
v[25]=false,  v[26]=false,  v[27]=true,  v[28]=false,  v[29]=false;
v[30]=false,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=false;
}
void char109(inout bool v[35])
{
    //109://m
    //'     ';
    //'     ';
    //'** * ';
    //'* * *';
    //'* * *';
    //'*   *';
    //'*   *'; 
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=true,  v[11]=true,  v[12]=false,  v[13]=true,  v[14]=false;
v[15]=true,  v[16]=false,  v[17]=true,  v[18]=false,  v[19]=true;
v[20]=true,  v[21]=false,  v[22]=true,  v[23]=false,  v[24]=true;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=true,  v[31]=false,  v[32]=false,  v[33]=false,  v[34]=true;
}
void char110(inout bool v[35])
{
    //110://n
    //'     ';
    //'     ';
    //'* ** ';
    //'**  *';
    //'*   *';
    //'*   *';
    //'*   *'; 
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=true,  v[11]=false,  v[12]=true,  v[13]=true,  v[14]=false;
v[15]=true,  v[16]=true,  v[17]=false,  v[18]=false,  v[19]=true;
v[20]=true,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=true;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=true,  v[31]=false,  v[32]=false,  v[33]=false,  v[34]=true;
}
void char111(inout bool v[35])
{
    //111://o
    //'     ';
    //'     ';
    //' *** ';
    //'*   *';
    //'*   *';
    //'*   *';
    //' *** '; 
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=false,  v[11]=true,  v[12]=true,  v[13]=true,  v[14]=false;
v[15]=true,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=true;
v[20]=true,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=true;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=false,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=false;
}
void char112(inout bool v[35])
{
    //112://p
    //'     ';
    //'     ';
    //'**** ';
    //'*   *';
    //'**** ';
    //'*    ';
    //'*    '; 
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=true,  v[11]=true,  v[12]=true,  v[13]=true,  v[14]=false;
v[15]=true,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=true;
v[20]=true,  v[21]=true,  v[22]=true,  v[23]=true,  v[24]=false;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=false;
v[30]=true,  v[31]=false,  v[32]=false,  v[33]=false,  v[34]=false;
}
void char113(inout bool v[35])
{
    //113://q
    //'     ';
    //'     ';
    //' ** *';
    //'*  **';
    //' ****';
    //'    *';
    //'    *'; 
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=false,  v[11]=true,  v[12]=true,  v[13]=false,  v[14]=true;
v[15]=true,  v[16]=false,  v[17]=false,  v[18]=true,  v[19]=true;
v[20]=false,  v[21]=true,  v[22]=true,  v[23]=true,  v[24]=true;
v[25]=false,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=false,  v[31]=false,  v[32]=false,  v[33]=false,  v[34]=true;
}
void char114(inout bool v[35])
{
    //114://r
    //'     ';
    //'     ';
    //'* ** ';
    //'**  *';
    //'*    ';
    //'*    ';
    //'*    '; 
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=true,  v[11]=false,  v[12]=true,  v[13]=true,  v[14]=false;
v[15]=true,  v[16]=true,  v[17]=false,  v[18]=false,  v[19]=true;
v[20]=true,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=false;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=false;
v[30]=true,  v[31]=false,  v[32]=false,  v[33]=false,  v[34]=false;
}
void char115(inout bool v[35])
{
    //115://s
    //'     ';
    //'     ';
    //' *** ';
    //'*    ';
    //' *** ';
    //'    *';
    //'**** '; 
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=false,  v[11]=true,  v[12]=true,  v[13]=true,  v[14]=false;
v[15]=true,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=false;
v[20]=false,  v[21]=true,  v[22]=true,  v[23]=true,  v[24]=false;
v[25]=false,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=true,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=false;
}
void char116(inout bool v[35])
{
    //116://t
    //'     ';
    //' *   ';
    //'***  ';
    //' *   ';
    //' *   ';
    //' *  *';
    //'  ** '; 
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=true,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=true,  v[11]=true,  v[12]=false,  v[13]=false,  v[14]=false;
v[15]=false,  v[16]=true,  v[17]=false,  v[18]=false,  v[19]=false;
v[20]=false,  v[21]=true,  v[22]=false,  v[23]=false,  v[24]=false;
v[25]=false,  v[26]=true,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=false,  v[31]=false,  v[32]=true,  v[33]=true,  v[34]=false;
}
void char117(inout bool v[35])
{
    //117://u
    //'     ';
    //'     ';
    //'*   *';
    //'*   *';
    //'*   *';
    //'*  **';
    //' ** *'; 
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=true;
v[15]=true,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=true;
v[20]=true,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=true;
v[25]=true,  v[26]=false,  v[27]=false,  v[28]=true,  v[29]=true;
v[30]=false,  v[31]=true,  v[32]=true,  v[33]=false,  v[34]=true;
}
void char118(inout bool v[35])
{
    //118://v
    //'     ';
    //'     ';
    //'*   *';
    //'*   *';
    //'*   *';
    //' * * ';
    //'  *  '; 
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=true;
v[15]=true,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=true;
v[20]=true,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=true;
v[25]=false,  v[26]=true,  v[27]=false,  v[28]=true,  v[29]=false;
v[30]=false,  v[31]=false,  v[32]=true,  v[33]=false,  v[34]=false;
}
void char119(inout bool v[35])
{
    //119://w
    //'     ';
    //'     ';
    //'*   *';
    //'*   *';
    //'* * *';
    //'* * *';
    //' * * '; 
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=true;
v[15]=true,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=true;
v[20]=true,  v[21]=false,  v[22]=true,  v[23]=false,  v[24]=true;
v[25]=true,  v[26]=false,  v[27]=true,  v[28]=false,  v[29]=true;
v[30]=false,  v[31]=true,  v[32]=false,  v[33]=true,  v[34]=false;
}
void char120(inout bool v[35])
{
    //120://x
    //'     ';
    //'     ';
    //'*   *';
    //' * * ';
    //'  *  ';
    //' * * ';
    //'*   *'; 
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=true;
v[15]=false,  v[16]=true,  v[17]=false,  v[18]=true,  v[19]=false;
v[20]=false,  v[21]=false,  v[22]=true,  v[23]=false,  v[24]=false;
v[25]=false,  v[26]=true,  v[27]=false,  v[28]=true,  v[29]=false;
v[30]=true,  v[31]=false,  v[32]=false,  v[33]=false,  v[34]=true;
}
void char121(inout bool v[35])
{
    //121://y
    //'     ';
    //'     ';
    //'*   *';
    //'*   *';
    //' ****';
    //'    *';
    //' *** '; 
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=true,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=true;
v[15]=true,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=true;
v[20]=false,  v[21]=true,  v[22]=true,  v[23]=true,  v[24]=true;
v[25]=false,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=true;
v[30]=false,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=false;
}
void char122(inout bool v[35])
{
    //122://z
    //'     ';
    //'     ';
    //'*****';
    //'   * ';
    //'  *  ';
    //' *   ';
    //'*****'; 
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=false,   v[8]=false,   v[9]=false; 
v[10]=true,  v[11]=true,  v[12]=true,  v[13]=true,  v[14]=true;
v[15]=false,  v[16]=false,  v[17]=false,  v[18]=true,  v[19]=false;
v[20]=false,  v[21]=false,  v[22]=true,  v[23]=false,  v[24]=false;
v[25]=false,  v[26]=true,  v[27]=false,  v[28]=false,  v[29]=false;
v[30]=true,  v[31]=true,  v[32]=true,  v[33]=true,  v[34]=true;
}
void char123(inout bool v[35])
{
    //123://{
    //'   * ';
    //'  *  ';
    //'  *  ';
    //' *   ';
    //'  *  ';
    //'  *  ';
    //'   * '; 
v[0]= false,  v[1]=false,   v[2]=false,   v[3]=true,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=true,   v[8]=false,   v[9]=false; 
v[10]=false,  v[11]=false,  v[12]=true,  v[13]=false,  v[14]=false;
v[15]=false,  v[16]=true,  v[17]=false,  v[18]=false,  v[19]=false;
v[20]=false,  v[21]=false,  v[22]=true,  v[23]=false,  v[24]=false;
v[25]=false,  v[26]=false,  v[27]=true,  v[28]=false,  v[29]=false;
v[30]=false,  v[31]=false,  v[32]=false,  v[33]=true,  v[34]=false;
}
void char124(inout bool v[35])
{
    //124://|
    //'  *  ';
    //'  *  ';
    //'  *  ';
    //'  *  ';
    //'  *  ';
    //'  *  ';
    //'  *  '; 
v[0]= false,  v[1]=false,   v[2]=true,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=true,   v[8]=false,   v[9]=false; 
v[10]=false,  v[11]=false,  v[12]=true,  v[13]=false,  v[14]=false;
v[15]=false,  v[16]=false,  v[17]=true,  v[18]=false,  v[19]=false;
v[20]=false,  v[21]=false,  v[22]=true,  v[23]=false,  v[24]=false;
v[25]=false,  v[26]=false,  v[27]=true,  v[28]=false,  v[29]=false;
v[30]=false,  v[31]=false,  v[32]=true,  v[33]=false,  v[34]=false;
}
void char125(inout bool v[35])
{
    //125://}
    //' *   ';
    //'  *  ';
    //'  *  ';
    //'   * ';
    //'  *  ';
    //'  *  ';
    //' *   '; 
v[0]= false,  v[1]=true,   v[2]=false,   v[3]=false,   v[4]=false;
v[5]= false,  v[6]=false,   v[7]=true,   v[8]=false,   v[9]=false; 
v[10]=false,  v[11]=false,  v[12]=true,  v[13]=false,  v[14]=false;
v[15]=false,  v[16]=false,  v[17]=false,  v[18]=true,  v[19]=false;
v[20]=false,  v[21]=false,  v[22]=true,  v[23]=false,  v[24]=false;
v[25]=false,  v[26]=false,  v[27]=true,  v[28]=false,  v[29]=false;
v[30]=false,  v[31]=true,  v[32]=false,  v[33]=false,  v[34]=false;
}
void char126(inout bool v[35])
{
    //~
    //' ** *';
    //'*  * ';
    //'     ';
    //'     ';
    //'     ';
    //'     ';
    //'     '; 
v[0]= false,  v[1]=true,   v[2]=true,   v[3]=false,   v[4]=true;
v[5]= true,  v[6]=false,   v[7]=false,   v[8]=true,   v[9]=false; 
v[10]=false,  v[11]=false,  v[12]=false,  v[13]=false,  v[14]=false;
v[15]=false,  v[16]=false,  v[17]=false,  v[18]=false,  v[19]=false;
v[20]=false,  v[21]=false,  v[22]=false,  v[23]=false,  v[24]=false;
v[25]=false,  v[26]=false,  v[27]=false,  v[28]=false,  v[29]=false;
v[30]=false,  v[31]=false,  v[32]=false,  v[33]=false,  v[34]=false;
}
void main(){
	vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0,0.0,0.0);
    float radius = 0.00006*1.5;
    float dist = radius*200.;
    bool v[35];
    float x = 0.02;
    float y = 0.02;
    char72(v);// H  
    color = character( v, color, st, radius, x, y, dist );
    x += dist*6.;
    char101(v);// e
    color = character( v, color, st, radius, x, y, dist );
    x += dist*6.;
    char108(v);// l
    color = character( v, color, st, radius, x, y, dist );
    x += dist*6.;
    char108(v);// l
    color = character( v, color, st, radius, x, y, dist );
    x += dist*6.;
    char111(v);// o
	color = character( v, color, st, radius, x, y, dist );
	gl_FragColor = vec4( color, 1.0 );
    x += dist*6.;
    char33(v);// .
	color = character( v, color, st, radius, x, y, dist );
}
