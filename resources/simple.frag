#version 440 core 
layout(location = 0) uniform sampler2D tex;
layout(location = 1) uniform sampler2D shadowMapTex;

in vec3 fragPos;
in vec2 fragTex;
in vec3 fragNor;

uniform vec3 campos;
uniform vec3 lightpos;
uniform vec3 lightdir;
uniform int lightToggle;

layout(location = 0) out vec4 color;
layout(location = 1) out vec4 gr_color;

void main()
{
	vec3 texturecolor = texture(tex, fragTex).rgb;

	//diffuse light
	//vec3 lightPos = lightpos;
	vec3 lightDir = -lightdir;//normalize(lightPos - fragPos);
	vec3 lightColor = vec3(1.0);

	vec3 normal = normalize(fragNor);

	float light = dot(lightDir, normal);	
	vec3 diffuseColor = clamp(light, 0.0f, 1.0f) * lightColor;

	//specular light
	vec3 camvec = normalize(campos - fragPos);
	vec3 h = normalize(camvec + lightDir);

	float spec = pow(dot(h, normal), 500);

	vec3 specColor = clamp(spec, 0.0f, 1.0f) * lightColor;

	color.rgb = (diffuseColor + specColor) * texturecolor;
	//color.rgb = vec3(shadowFactor);
	color.a = 1.0f;

	if (lightToggle != 0)
	{
		gr_color = vec4(1.0f,1.0f,1.0f,1.0f);
	}
	else
	{
		gr_color = vec4(0.0f,0.0f,0.0f,1.0f);
	}
}
