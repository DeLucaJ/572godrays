#version 440 core

in vec2 fragTex;

uniform float exposure;
uniform float decay;
uniform float density;
uniform float weight;
uniform vec2 light_screen_position;

//Textures
uniform sampler2D firstPass;
 uniform sampler2D colorPass;

const int NUM_SAMPLES = 200;

out vec4 color;

void main()
{	
	vec2 light_screen_positiont = light_screen_position /2.;
	light_screen_positiont += vec2(0.5,0.5);

    vec2 deltaTextCoord = vec2( fragTex - light_screen_positiont );
    vec2 textCoo = fragTex;
    deltaTextCoord *= 1.0 /  float(NUM_SAMPLES) * density;
    float illuminationDecay = 1.0;

	vec4 godray = vec4(0.0f,0.0f,0.0f,0.0f);

	//Main godray sample loop
    for(int i=0; i < NUM_SAMPLES ; i++)
    {
        textCoo -= deltaTextCoord;
        vec4 sampleGR = texture(firstPass, textCoo);
			
        sampleGR *= illuminationDecay * weight;

        godray += sampleGR;

        illuminationDecay *= decay;
    }

    godray *= exposure;

	vec4 normal_col = texture(colorPass, fragTex);
	color = (normal_col + godray) /1.0f; 
}