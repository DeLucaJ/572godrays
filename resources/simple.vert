#version  440 core
layout(location = 0) in vec3 vertPos;
layout(location = 1) in vec3 vertNor;
layout(location = 2) in vec2 vertTex;

uniform mat4 P;
uniform mat4 V;
uniform mat4 M;

out vec3 fragPos;
out vec3 fragNor;
out vec2 fragTex;

void main()
{
	fragPos = (M * vec4(vertPos, 1.0)).xyz;
	fragNor = (M * vec4(vertNor, 0.0)).xyz;
	fragTex = vertTex;

	gl_Position = P * V * M * vec4(vertPos, 1.0);
}
