# 572godrays
Final Project for CSC 572 - Graduate Graphics Postprocessing

Created a godray postprocessing effect. 

## Controls
| Buttons | Effect |
|---|:---|
| WASD | camera movement|
| IJKL | earth/lightsource movement |
| Y | enable/disable godrays |
| 1,2 | +/- exposure 0.0001f |
| 3,4 | +/- decay by 0.1f |
| 5,6 | +/- density by 0.1f |
| 7,8 | +/- weight by 0.5f |

## Development Images
### Initial Scene
No godray shader has been applied to the scene yet.
![Initial Scene](https://github.com/DeLucaJ/572godrays/blob/master/screenshots/no_godrays.png "Initial Scene")

### Stage 1 - Occlusion of light source
The scene is rendered with the light source as white and everything else as black. The light source is the Earth from the previous scene.
![Occlusion of light source](https://github.com/DeLucaJ/572godrays/blob/master/screenshots/godrays_stage_1.png "Occlusion")

### Stage 2 - Scattering the Light Source
The previous stage is then run through my shader godray.frag, which samples towards the light source in order to create the scattering effect. 
![Scattering light source](https://github.com/DeLucaJ/572godrays/blob/master/screenshots/godrays_stage_2.png "Scattering")

### Stage 3 - Blending Initial Scene with Godrays
The initial scene texture and the stage 2 godray texture are then blended together to create the final godray effect. 
![Behind a Pillar](https://github.com/DeLucaJ/572godrays/blob/master/screenshots/godrays1.png "Behind a Pillar")
![Partial Lunar Eclipse](https://github.com/DeLucaJ/572godrays/blob/master/screenshots/godrays2.png "Partial Lunar Eclipse")

