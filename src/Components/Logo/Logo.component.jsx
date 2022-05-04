import React from 'react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';

import './Logo.styles.scss'; 

const Logo = () => {

    return (
        <Tilt>
            <div style={{ height: '300px', width: '300px', backgroundColor: 'transparent' }}>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="100%" height="100%" viewBox="0 0 1160.000000 1280.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.15, written by Peter Selinger 2001-2017
</metadata>
<g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
fill="#FFF" stroke="none">
<path d="M5100 12061 l0 -740 -82 -48 -83 -49 -3 -124 -3 -124 68 -68 67 -68
126 0 126 0 67 -68 67 -68 0 -199 0 -200 -87 -87 c-85 -86 -87 -88 -87 -137
-1 -43 -6 -56 -32 -82 -82 -81 -204 -27 -204 92 0 33 6 47 34 75 28 28 41 34
78 34 24 0 53 -6 64 -14 19 -13 25 -9 97 61 l77 76 0 181 0 182 -53 52 -53 52
-125 0 -124 0 -83 83 -83 83 3 149 3 149 83 49 82 49 0 719 0 719 -57 0 c-32
0 -68 -3 -80 -6 l-23 -6 0 -662 0 -662 -55 -54 -55 -54 0 -211 0 -210 148
-148 149 -149 34 21 c52 32 102 28 144 -11 106 -98 -7 -259 -135 -193 -38 20
-60 52 -60 90 0 26 -24 54 -165 195 l-165 165 0 240 0 241 50 49 50 49 0 653
c0 637 0 653 -19 653 -54 0 -51 35 -51 -579 l0 -567 -40 -39 -40 -39 0 -336 0
-335 125 -125 125 -125 0 -412 0 -411 88 -51 c78 -45 92 -49 120 -42 84 25
169 -59 148 -144 -18 -71 -104 -111 -170 -80 -50 24 -70 65 -63 129 l5 51 -89
50 -89 50 0 415 0 415 -130 130 -130 130 0 355 0 356 45 44 45 44 0 554 0 553
-57 -6 c-32 -3 -68 -8 -80 -11 l-23 -4 0 -928 c0 -510 -3 -937 -6 -949 -8 -29
63 -104 161 -171 122 -84 147 -157 81 -230 -31 -34 -39 -37 -86 -37 -47 0 -55
3 -86 37 -25 28 -34 47 -34 73 0 43 21 88 52 110 23 16 23 16 3 27 -11 6 -49
39 -83 75 l-64 64 7 297 c4 163 4 597 0 963 -7 608 -9 666 -24 663 -9 -2 -37
-6 -63 -9 l-48 -6 0 -456 0 -456 50 -87 50 -87 0 -590 0 -589 139 -134 c76
-74 154 -147 172 -162 31 -24 34 -31 34 -81 0 -45 -5 -60 -24 -81 -78 -83
-211 -32 -211 81 0 38 5 50 36 81 l35 35 -120 121 -121 121 0 595 0 594 -50
88 -50 88 0 456 0 455 -47 -6 c-27 -4 -64 -10 -83 -14 l-35 -7 -3 -511 -2
-511 41 5 c72 10 139 -46 139 -117 0 -36 -28 -85 -59 -103 -53 -31 -136 -14
-162 35 -9 16 -11 178 -10 605 2 575 2 583 -18 583 -35 0 -400 -76 -460 -96
-10 -3 -1 -19 32 -52 l47 -48 0 -354 0 -355 345 -345 345 -345 0 -345 0 -345
45 -75 45 -75 0 -179 0 -178 80 -83 81 -82 60 1 c58 1 62 -1 95 -36 42 -46 46
-97 11 -149 -60 -90 -200 -58 -214 49 -5 34 -20 54 -114 148 l-109 109 0 182
0 183 -50 88 -50 88 0 335 0 334 -340 340 -340 340 0 350 0 349 -56 57 -56 56
-71 -20 c-40 -11 -74 -22 -76 -24 -3 -2 30 -38 72 -81 l77 -77 0 -340 0 -339
345 -346 345 -345 0 -340 0 -339 85 -87 c81 -83 85 -88 85 -132 0 -82 -74
-141 -149 -119 -78 24 -113 107 -73 175 l20 35 -39 38 -39 38 0 346 0 345
-345 345 -345 345 0 335 0 335 -84 84 -84 83 -96 -32 c-53 -17 -99 -36 -102
-42 -4 -6 68 -85 160 -177 l166 -166 0 -230 0 -230 155 -155 155 -155 0 -62 0
-63 33 0 c44 0 77 -19 104 -59 55 -82 -4 -181 -107 -181 -35 0 -48 6 -77 35
-33 33 -35 37 -28 87 3 29 8 91 11 138 l5 85 -156 155 -155 155 0 232 0 233
-169 169 -168 170 -32 -12 c-17 -6 -31 -14 -31 -17 0 -3 79 -84 175 -180 l175
-175 0 -210 0 -210 150 -150 150 -150 0 -185 0 -185 59 -32 c56 -31 66 -33
158 -33 l98 0 87 -87 88 -88 0 -585 0 -584 57 -58 57 -58 891 0 890 0 77 78
77 77 -11 40 c-9 34 -8 47 7 78 45 95 180 89 221 -10 38 -89 -57 -189 -146
-155 -23 9 -33 2 -116 -79 l-91 -89 -909 0 -910 0 -72 73 -72 72 0 585 0 586
-73 72 -72 72 -95 0 -95 1 -80 47 -80 48 -3 190 -2 190 -145 144 -145 145 0
215 0 215 -178 178 c-133 133 -182 176 -195 171 -9 -3 -17 -7 -17 -9 0 -1 72
-74 160 -162 l160 -160 0 -249 0 -249 144 -144 145 -145 0 -140 -1 -141 141
-136 140 -135 60 4 c58 4 62 3 96 -31 29 -29 35 -42 35 -76 0 -57 -22 -95 -66
-116 -47 -22 -98 -13 -135 24 -34 35 -45 73 -32 116 l11 33 -154 147 -154 147
0 146 0 147 -145 145 -145 145 0 245 0 245 -158 158 c-155 155 -159 158 -187
147 l-29 -11 172 -172 172 -172 0 -240 0 -240 145 -145 145 -145 0 -145 0
-145 120 -120 120 -120 0 -390 0 -389 66 -67 66 -66 36 12 c46 16 89 4 125
-35 50 -55 31 -152 -37 -184 -42 -20 -57 -20 -101 -2 -50 21 -77 70 -70 126
l5 45 -75 75 -75 74 0 390 0 390 -120 121 -120 122 0 149 0 149 -145 145 -145
145 0 235 0 235 -168 168 -168 168 -53 -22 -52 -22 160 -161 161 -161 0 -260
0 -260 150 -150 150 -150 0 -237 c0 -131 4 -238 8 -238 4 0 16 14 26 31 38 64
132 74 187 20 77 -78 23 -201 -89 -201 -45 0 -84 26 -107 71 -12 22 -23 29
-45 29 l-30 0 0 248 0 247 -155 155 -155 155 0 260 0 260 -154 154 c-142 142
-156 153 -182 147 -26 -7 -22 -12 144 -180 l172 -172 0 -316 0 -316 33 -6 c81
-15 122 -117 75 -186 -66 -97 -218 -54 -218 62 0 38 26 98 42 98 4 0 8 145 8
323 l0 322 -163 163 c-89 89 -169 162 -177 162 -8 0 -25 -8 -38 -18 l-22 -17
120 -120 120 -120 0 -420 0 -421 68 -67 68 -67 197 0 197 0 0 -257 0 -258 71
-71 70 -71 38 10 c80 22 162 -57 146 -140 -21 -115 -175 -135 -229 -29 -17 33
-18 45 -8 80 l11 41 -74 75 -75 75 -2 245 -3 245 -185 3 -185 2 -82 83 -83 82
0 425 0 425 -115 115 c-112 111 -115 114 -140 100 l-26 -14 116 -116 115 -115
0 -425 0 -425 180 -173 180 -174 0 -429 0 -429 34 -14 c63 -26 90 -98 61 -159
-55 -117 -229 -77 -227 52 1 46 21 82 57 101 l25 13 0 416 0 416 -185 185
-185 185 0 420 0 420 -110 110 -109 109 -36 -19 c-19 -11 -35 -22 -35 -25 0
-3 45 -50 100 -105 l100 -100 0 -430 0 -430 110 -110 110 -110 0 -596 0 -597
90 -51 90 -51 173 0 172 0 79 79 79 79 -16 35 c-21 43 -21 58 -3 102 17 40 68
75 111 75 43 0 94 -35 111 -75 18 -44 18 -59 -2 -101 -20 -41 -63 -66 -113
-66 -32 1 -46 -9 -127 -89 l-91 -91 -200 2 -201 1 -101 57 -100 57 -1 600 0
600 -110 110 -110 110 0 430 0 430 -104 104 c-69 69 -106 99 -111 91 -5 -8 26
-45 84 -104 l91 -91 0 -435 0 -435 90 -90 c50 -49 90 -95 90 -102 0 -7 9 -27
20 -45 50 -82 -7 -188 -100 -188 -62 0 -120 58 -120 120 0 59 50 120 100 120
11 0 20 2 20 4 0 3 -34 38 -75 78 l-75 73 0 440 0 440 -90 90 c-98 97 -93 96
-160 45 l-25 -19 93 -93 92 -93 0 -645 0 -645 78 -78 78 -78 39 17 c78 32 154
-17 163 -105 4 -47 2 -53 -30 -85 -60 -60 -116 -60 -175 -1 -31 31 -34 40 -32
80 3 45 2 46 -89 138 l-92 92 0 645 0 645 -85 85 c-81 81 -85 83 -111 71 l-27
-12 36 -37 37 -38 0 -254 0 -254 31 -32 c84 -87 21 -215 -100 -201 -62 7 -101
50 -101 110 1 23 6 52 14 65 15 28 64 62 89 62 16 0 17 18 17 238 l0 238 -33
32 -34 33 -71 -56 -72 -56 0 -327 0 -327 151 -150 c83 -83 157 -162 165 -177
43 -81 -15 -178 -106 -178 -123 0 -167 170 -58 226 l31 16 -116 116 -117 117
-2 318 -3 319 -87 -77 -88 -77 0 -119 c0 -110 1 -118 21 -124 28 -9 59 -63 59
-103 0 -124 -161 -168 -224 -62 -34 59 -8 144 53 170 l31 12 0 82 -1 81 -94
-97 -95 -97 0 -118 0 -119 33 -32 33 -32 155 0 155 0 52 -89 52 -90 0 -158 0
-158 76 -76 c74 -75 77 -76 118 -72 79 9 136 -42 136 -123 0 -52 -62 -114
-114 -114 -76 0 -126 50 -126 128 0 21 5 43 12 50 10 10 -6 31 -75 100 l-87
87 0 165 0 164 -40 68 -41 68 -152 0 -153 0 -47 48 -47 48 0 88 c0 88 0 89
-20 71 -18 -17 -20 -31 -20 -174 l0 -157 63 -62 c50 -50 69 -62 95 -62 25 0
35 6 46 29 22 41 58 61 112 61 39 0 51 -5 80 -34 28 -28 34 -42 34 -76 0 -53
-25 -95 -68 -116 -45 -21 -97 -13 -132 21 -21 20 -36 25 -81 25 l-54 0 -88 88
-87 87 0 120 -1 120 -29 -35 -30 -34 0 -141 0 -140 189 -189 189 -188 36 12
c110 36 205 -100 131 -188 -72 -86 -199 -51 -212 60 -5 40 -17 55 -209 248
l-203 205 -3 100 -3 100 -68 -105 -67 -105 0 -85 0 -86 70 -69 c62 -62 74 -69
112 -71 87 -5 137 -107 91 -185 -17 -29 -67 -59 -97 -59 -83 0 -152 103 -115
172 9 17 1 30 -71 104 -60 61 -81 89 -76 101 5 15 3 14 -10 -2 -17 -21 -134
-259 -134 -273 0 -4 53 -60 118 -125 l118 -118 200 5 c109 3 223 7 252 8 49 3
56 0 83 -30 24 -27 29 -41 29 -83 0 -42 -5 -55 -29 -79 -16 -16 -40 -32 -55
-36 -38 -9 -90 3 -111 26 -17 19 -31 20 -230 20 l-211 0 -119 120 c-65 66
-119 119 -120 118 -19 -28 -155 -466 -155 -500 0 -17 12 -18 203 -18 l202 0
84 -84 84 -84 39 20 c49 26 96 18 137 -22 96 -96 -10 -253 -132 -195 -45 21
-69 58 -71 107 -1 35 -9 47 -87 124 l-87 84 -193 -2 -194 -3 -11 -35 c-11 -33
-55 -274 -69 -370 l-6 -45 90 89 89 88 -5 58 c-4 44 -1 63 12 84 38 57 109 72
166 33 113 -76 55 -228 -82 -215 l-47 5 -117 -117 -116 -116 -10 -103 c-6 -57
-8 -106 -4 -109 4 -4 64 53 134 126 l127 132 102 0 102 0 0 -272 0 -272 -35
-36 c-32 -33 -35 -40 -25 -64 15 -41 12 -78 -9 -110 -26 -40 -57 -55 -110 -56
-36 0 -49 6 -77 34 -29 29 -34 41 -34 80 0 84 56 133 138 122 39 -5 47 -3 73
23 l29 29 0 231 0 231 -66 0 -67 0 -142 -137 c-110 -107 -144 -146 -150 -173
-10 -44 1 -585 12 -605 7 -12 20 -4 63 40 l54 55 196 0 195 0 88 88 c65 66 87
94 87 114 0 36 44 85 89 99 71 21 151 -40 151 -116 0 -44 -35 -94 -78 -112
-34 -14 -41 -14 -82 0 l-45 16 -90 -89 -90 -90 -196 0 -195 0 -32 -33 -32 -33
0 -291 c0 -253 3 -304 20 -389 31 -149 26 -142 71 -98 44 43 48 64 19 101 -39
49 -18 138 40 168 38 19 100 19 128 -1 30 -21 52 -66 52 -108 0 -41 -46 -100
-85 -110 -15 -4 -25 -14 -25 -24 0 -10 -33 -51 -74 -91 -41 -41 -73 -79 -71
-85 2 -6 11 -37 20 -70 16 -56 17 -58 31 -37 36 51 107 64 162 31 72 -44 76
-139 10 -195 -28 -24 -39 -27 -85 -23 -29 3 -53 2 -53 -1 0 -3 5 -23 11 -43
l10 -38 72 0 73 0 47 48 47 48 0 410 0 410 -71 72 -71 72 -47 -6 c-86 -11
-141 35 -141 118 0 69 37 109 107 115 47 5 54 3 88 -29 32 -29 38 -42 42 -85
5 -48 10 -55 89 -134 l84 -84 0 -450 0 -451 -68 -67 -68 -67 -77 0 c-42 0 -77
-4 -77 -10 0 -21 24 -60 37 -60 28 0 73 -31 88 -60 21 -40 19 -89 -5 -128
l-21 -33 22 -60 22 -59 66 0 66 0 81 -81 c72 -72 84 -80 102 -70 79 42 185
-43 167 -135 -15 -83 -129 -123 -194 -69 -38 33 -56 85 -43 124 9 27 6 33 -62
100 -66 66 -75 71 -114 71 -23 0 -42 -4 -42 -9 0 -21 152 -306 228 -428 70
-112 87 -133 117 -143 52 -17 85 -62 85 -116 0 -37 8 -56 42 -105 l42 -59 43
42 43 42 0 101 0 102 -37 24 c-102 65 -57 219 63 219 37 0 51 -6 82 -34 32
-30 37 -40 37 -79 0 -51 -25 -94 -68 -115 -27 -13 -27 -14 -27 -125 l0 -113
-50 -53 c-27 -29 -50 -56 -50 -60 1 -3 29 -46 64 -96 l63 -90 839 -3 839 -2
82 -82 83 -83 0 -484 0 -484 25 -44 26 -43 1922 0 1923 0 59 -60 59 -60 436 0
435 0 143 143 142 142 0 155 0 155 172 173 173 172 410 0 410 0 90 -90 90 -90
182 0 183 0 67 -70 67 -70 141 0 140 0 80 -80 c65 -65 83 -78 102 -74 56 15
126 -33 144 -98 9 -34 7 -49 -6 -85 -41 -108 -190 -112 -239 -8 -17 36 -17 51
0 125 5 22 -4 35 -55 83 l-60 57 -138 0 -137 0 -67 66 -66 66 -183 -2 -182 -1
-97 96 -97 95 -375 0 -374 0 -143 -143 -142 -142 0 -160 0 -160 -173 -173
-172 -172 -465 0 -466 0 -59 60 -59 60 -1931 0 -1931 0 -42 74 -42 74 0 484 0
484 -53 52 -53 52 -796 0 -797 0 64 -100 63 -101 648 1 648 0 58 -57 58 -57 0
-421 0 -420 133 -133 132 -132 1907 0 1906 0 70 -40 69 -40 499 0 499 0 218
218 217 217 0 150 0 150 143 143 142 142 320 0 320 0 85 -85 85 -85 150 0 150
0 79 -79 c75 -75 80 -79 116 -74 125 17 192 -146 96 -234 -97 -89 -244 9 -209
139 l12 43 -57 57 -56 58 -154 0 -155 0 -86 85 -87 85 -288 0 -288 0 -119
-111 -119 -112 0 -156 0 -156 -238 -238 -237 -237 -535 0 -535 0 -69 40 -68
40 -1912 0 -1911 0 -158 158 -157 157 0 421 0 420 -33 32 -32 31 -590 1 c-325
0 -595 -3 -601 -8 -8 -5 3 -33 33 -87 59 -104 137 -275 180 -395 19 -52 36
-97 39 -99 2 -2 13 4 25 15 16 14 36 19 84 19 54 0 67 -4 90 -25 43 -40 58
-77 52 -134 -4 -42 -10 -55 -45 -88 -38 -35 -46 -38 -99 -38 l-58 0 3 -140 3
-140 422 0 422 0 140 -140 140 -140 1840 0 1840 0 103 -60 104 -60 464 0 464
0 0 -360 0 -360 -790 0 -790 0 -50 31 -50 30 -2 212 -3 212 -537 3 -538 2 0
-245 0 -245 -358 0 -357 0 -180 180 -180 180 -1045 0 -1046 0 -37 -38 c-30
-31 -39 -48 -44 -91 l-6 -52 35 35 c44 44 93 54 153 31 116 -44 127 -199 19
-263 -70 -41 -154 -18 -197 56 l-22 37 -12 -90 c-7 -50 -26 -190 -44 -313
l-31 -222 31 -29 c55 -51 66 -117 30 -181 -11 -20 -34 -45 -50 -54 l-29 -17 0
-242 0 -241 -66 -67 c-63 -64 -66 -69 -80 -140 -7 -41 -16 -83 -19 -95 -4 -19
13 -30 147 -93 l151 -73 24 31 c32 41 73 61 123 61 52 0 92 -21 122 -62 18
-27 23 -45 22 -94 -2 -58 0 -61 27 -71 l29 -11 0 167 0 167 -70 69 -71 70 -53
-3 c-63 -4 -104 13 -136 58 -43 60 -35 142 18 192 75 71 198 46 238 -49 19
-44 18 -77 -5 -122 l-20 -38 79 -78 80 -79 2 -189 3 -189 33 -13 32 -14 0 367
0 367 -128 128 c-123 123 -129 128 -156 117 -93 -35 -197 34 -198 132 -2 119
124 191 225 130 59 -37 84 -123 55 -187 -11 -25 -7 -31 125 -163 l137 -137 0
-388 0 -388 23 -8 c12 -5 25 -7 29 -4 5 2 8 106 8 231 l0 227 132 132 133 133
56 0 c53 0 60 3 96 39 49 50 96 60 158 36 116 -44 127 -200 19 -262 -21 -13
-51 -23 -66 -23 -65 0 -132 50 -149 112 -9 36 -12 38 -52 38 -41 0 -47 -5
-160 -118 l-117 -117 0 -228 0 -227 26 -10 c14 -6 30 -10 35 -10 5 0 9 59 9
137 l0 138 117 117 118 118 190 0 191 0 63 64 c62 62 63 64 53 99 -15 53 1
106 42 144 45 41 93 51 151 28 56 -21 87 -63 92 -124 5 -60 -20 -109 -72 -138
-47 -27 -82 -29 -132 -8 l-37 16 -71 -71 -70 -70 -191 0 -190 0 -97 -97 -97
-98 0 -142 c0 -136 1 -143 20 -143 11 0 20 6 20 13 0 7 38 50 84 96 83 83 84
84 74 119 -20 73 41 163 120 177 51 8 115 -18 144 -57 45 -64 29 -165 -33
-211 -41 -29 -111 -34 -152 -9 l-35 20 -78 -79 c-49 -49 -75 -82 -69 -88 6 -5
45 -20 89 -34 63 -19 85 -22 111 -14 44 13 98 2 134 -28 22 -20 40 -25 80 -25
l51 0 0 92 0 92 60 61 c58 59 59 61 51 98 -12 52 4 105 45 143 93 88 244 19
244 -112 0 -104 -119 -176 -212 -128 l-31 16 -53 -53 -54 -53 0 -78 0 -78 53
0 52 0 153 153 152 152 0 177 0 176 68 66 69 66 -5 54 c-7 87 43 152 127 163
49 7 115 -26 141 -70 44 -71 15 -172 -60 -209 -46 -23 -87 -23 -135 2 l-40 20
-53 -53 -54 -54 2 -178 1 -179 -143 -143 -143 -143 80 0 80 0 127 127 128 127
-27 28 c-37 39 -44 128 -13 176 21 33 87 72 125 72 38 0 104 -38 125 -72 57
-94 -13 -228 -120 -228 -32 0 -47 -12 -150 -115 l-115 -115 73 0 c60 0 78 4
103 23 43 31 125 31 168 0 25 -19 43 -23 101 -23 l70 0 1 858 c0 471 2 866 4
876 2 11 77 93 167 183 l163 163 380 0 381 0 54 -55 54 -55 1221 0 1220 0 148
148 c140 140 147 149 147 187 0 49 29 98 72 126 26 16 45 19 87 16 48 -3 58
-8 93 -45 34 -37 38 -47 38 -93 0 -94 -59 -153 -151 -151 l-45 1 -165 -165
-164 -164 -1280 0 -1281 0 -53 55 -53 55 -322 0 -321 0 -128 -128 -127 -127 0
-843 0 -842 35 0 35 0 0 803 0 802 123 123 122 122 300 0 300 0 113 -113 112
-112 0 -57 c0 -57 0 -58 41 -78 30 -16 46 -33 61 -67 27 -61 18 -105 -32 -155
-33 -34 -43 -38 -86 -38 -94 0 -150 61 -142 152 6 54 43 104 85 114 20 5 23
13 23 53 0 45 -2 48 -98 144 l-97 97 -284 0 -284 0 -103 -103 -104 -103 0
-792 0 -792 55 0 55 0 0 787 0 787 57 58 57 58 231 0 c126 0 250 -5 275 -11
112 -26 153 -154 74 -233 -76 -75 -205 -39 -231 64 l-9 35 -139 3 c-118 2
-140 0 -156 -14 -18 -16 -19 -49 -19 -776 l0 -758 50 0 c36 0 59 7 86 25 25
17 50 25 79 25 29 0 54 -8 79 -25 24 -16 51 -25 76 -25 l40 0 0 62 0 62 -66
67 c-63 63 -68 66 -98 58 -47 -14 -94 0 -131 37 -60 60 -56 145 11 204 28 24
44 30 82 30 108 0 176 -105 128 -199 -15 -27 -14 -28 60 -102 l74 -73 0 -73 0
-73 50 0 c28 0 50 4 50 8 0 18 61 42 108 42 39 0 57 -6 80 -25 24 -20 41 -25
86 -25 l56 0 0 83 0 83 -64 63 -64 64 -28 -22 c-35 -28 -105 -28 -149 -1 -64
39 -83 129 -42 191 30 45 82 71 130 65 75 -9 121 -60 123 -139 2 -47 5 -53 73
-121 l71 -71 0 -98 0 -97 64 0 c48 0 74 6 101 21 42 25 123 23 153 -5 11 -9
35 -16 58 -16 l39 0 -310 310 -310 310 -165 0 -164 0 -62 61 -61 61 -42 -13
c-87 -26 -170 30 -179 120 -16 167 222 210 270 49 8 -29 8 -48 0 -76 -12 -37
-11 -37 45 -94 l57 -58 166 0 165 0 335 -335 c279 -280 339 -335 362 -335 24
0 28 4 28 28 0 22 -57 85 -338 365 l-338 337 -101 -1 c-106 -1 -124 4 -162 44
-28 31 -39 104 -21 147 22 53 64 80 125 80 46 0 60 -5 89 -30 52 -46 65 -99
40 -164 -5 -12 0 -16 22 -16 25 0 83 -54 387 -358 342 -342 357 -359 357 -395
0 -34 2 -37 30 -37 30 0 30 0 30 58 l0 57 -365 365 -365 365 0 55 c0 55 -1 56
-63 118 l-63 62 -203 0 -204 0 -51 51 c-49 49 -53 51 -108 53 -52 1 -61 4 -95
39 -35 35 -38 41 -38 97 0 55 3 62 36 96 112 112 293 -20 220 -161 l-21 -39
42 -43 42 -43 206 0 206 0 73 -74 c74 -74 74 -74 74 -129 l-1 -54 364 -364
364 -364 0 -72 0 -73 30 0 30 0 0 78 0 77 -280 280 c-154 154 -280 285 -280
292 0 7 -11 15 -25 19 -30 7 -82 65 -91 99 -31 124 120 222 220 144 79 -62 71
-193 -14 -231 -17 -7 -30 -15 -30 -18 0 -3 124 -129 275 -280 l275 -275 0 -92
0 -93 30 0 30 0 0 88 0 87 -220 220 -220 220 0 245 0 246 -70 69 c-65 65 -71
68 -95 57 -14 -7 -46 -12 -70 -12 -83 0 -148 89 -125 170 32 110 164 140 240
53 31 -35 32 -40 27 -99 l-5 -62 74 -73 74 -73 0 -246 0 -245 220 -220 220
-220 0 -102 0 -103 68 0 c48 0 79 6 107 20 49 25 81 25 130 0 46 -23 145 -28
145 -7 0 7 -24 36 -53 65 l-53 52 -69 0 -69 0 -238 237 -238 237 0 73 c0 61
-3 73 -18 77 -64 21 -101 121 -68 185 54 104 214 87 245 -26 17 -59 -15 -131
-68 -153 -30 -12 -31 -15 -31 -74 l0 -61 218 -218 217 -217 70 0 71 0 72 -73
c46 -46 72 -80 72 -95 0 -18 6 -22 30 -22 27 0 30 3 30 33 0 29 -28 60 -280
312 l-280 280 0 220 0 220 -87 87 -88 87 -40 -11 c-61 -16 -113 -3 -156 41
-65 65 -65 157 0 222 60 60 149 65 212 12 57 -49 73 -118 43 -192 l-16 -40 91
-87 91 -86 0 -222 0 -221 280 -280 280 -280 0 -47 0 -48 35 0 35 0 0 113 c0
110 -1 114 -24 125 -38 17 -78 77 -83 126 -7 55 17 108 65 144 47 35 135 38
179 6 93 -69 99 -185 14 -257 -17 -14 -44 -28 -61 -32 l-30 -7 0 -109 0 -109
74 0 c41 0 81 3 90 6 14 5 16 36 16 243 l0 236 -64 68 -65 67 -128 0 -128 0
-163 163 -162 162 0 132 0 133 -33 14 c-103 43 -128 177 -48 257 112 113 296
12 267 -146 -8 -43 -50 -94 -93 -111 l-33 -14 0 -129 0 -128 144 -141 145
-142 128 0 128 0 83 -83 82 -82 0 -238 c0 -130 1 -237 3 -237 13 0 114 33 120
40 5 4 14 43 21 86 l13 79 -34 36 c-34 36 -35 37 -34 130 l0 94 -131 132
c-116 116 -134 131 -151 121 -36 -19 -114 -12 -152 13 -39 27 -75 90 -75 134
0 44 38 112 74 135 49 29 130 28 177 -4 63 -43 88 -135 54 -200 l-16 -30 136
-136 135 -135 0 -96 c0 -70 4 -100 14 -108 21 -17 46 136 46 279 l0 115 -42
20 c-108 51 -111 207 -6 261 29 15 99 16 147 3 9 -3 18 8 24 29 8 26 7 36 -8
52 -17 18 -31 20 -189 20 l-170 0 -62 61 c-56 56 -63 60 -84 49 -33 -18 -121
-8 -157 18 -90 64 -79 217 20 269 45 23 118 20 161 -6 38 -24 76 -91 76 -134
0 -15 -7 -44 -15 -64 l-16 -37 48 -48 47 -48 170 0 c144 0 172 -3 188 -17 10
-9 20 -14 21 -12 2 2 16 40 31 84 50 142 101 242 182 352 l16 23 -63 0 -64 0
-62 -61 c-62 -60 -62 -61 -46 -86 21 -32 21 -99 0 -140 -38 -73 -155 -99 -217
-47 -84 72 -79 187 12 245 27 17 44 19 94 15 l61 -5 69 70 68 69 177 0 c163 0
177 -1 194 -20 14 -15 31 -20 69 -20 l51 0 -6 182 c-4 101 -10 451 -14 778
l-7 595 191 190 191 190 0 165 0 165 98 98 97 97 240 0 241 0 73 -74 c69 -70
75 -74 110 -69 114 15 193 -112 128 -208 -75 -112 -237 -58 -237 78 0 21 7 49
16 62 16 22 15 24 -47 87 l-63 64 -221 0 -220 0 -83 -83 -82 -82 0 -165 0
-165 -189 -190 -189 -190 10 -740 c11 -722 11 -741 31 -763 14 -15 32 -22 55
-22 l35 0 -21 23 -22 23 0 735 0 734 185 185 185 185 0 160 0 161 63 62 63 62
136 0 136 0 72 -41 71 -41 -2 -80 c-2 -74 0 -80 26 -108 l29 -30 600 0 601 1
36 52 c20 29 75 95 121 147 47 53 90 105 96 117 21 39 14 96 -18 146 l-30 47
-313 0 -312 0 -80 80 -80 80 -210 0 -210 0 -173 173 -172 172 0 95 0 95 -115
115 -115 115 0 496 0 497 -40 40 c-36 35 -40 45 -40 88 0 112 96 176 189 126
47 -25 73 -76 68 -129 -6 -57 -31 -92 -78 -112 l-39 -16 0 -485 0 -485 115
-115 115 -115 0 -95 0 -95 153 -153 154 -154 209 2 209 1 76 -81 77 -80 278 0
278 0 -34 35 -34 35 -216 0 -215 0 -90 90 -90 90 -160 0 -160 0 -76 76 -76 76
-41 -12 c-35 -11 -45 -10 -78 6 -118 58 -106 221 17 254 84 23 159 -42 159
-136 0 -48 2 -52 68 -117 l68 -67 159 0 160 0 85 -85 85 -85 176 0 c164 0 177
1 182 19 2 10 28 37 57 60 l52 41 -193 0 -194 0 -101 101 c-97 97 -102 101
-114 80 -6 -12 -26 -31 -43 -41 -110 -68 -242 63 -182 180 25 48 62 70 118 70
l51 0 151 -150 151 -150 233 0 c260 0 240 -5 281 73 l20 37 -146 0 c-144 0
-146 0 -166 -25 -11 -14 -33 -32 -48 -40 -109 -56 -232 76 -172 185 52 95 183
95 232 0 l20 -40 145 0 c166 0 164 -2 124 91 l-21 49 -61 0 c-44 0 -66 5 -80
17 -18 17 -67 18 -676 21 l-656 2 -82 82 -83 83 0 890 0 891 -72 71 c-57 55
-82 72 -112 78 -82 14 -122 95 -86 171 37 76 130 92 190 32 38 -37 47 -86 26
-129 l-17 -33 81 -81 80 -80 0 -895 0 -896 59 -52 60 -52 640 0 c634 0 640 0
676 -21 20 -12 38 -20 40 -17 2 2 -10 25 -28 51 -31 45 -34 46 -83 47 -41 0
-55 5 -74 25 l-24 25 -21 -20 c-53 -49 -143 -44 -189 10 -87 104 13 262 139
220 38 -12 85 -62 85 -89 0 -23 75 -95 89 -86 25 15 -33 202 -76 247 -26 27
-31 28 -123 28 l-95 0 -145 -145 c-80 -80 -150 -145 -156 -145 -7 0 -15 -7
-18 -16 -3 -8 -26 -24 -51 -35 -56 -25 -111 -14 -149 31 -81 97 0 247 120 224
35 -6 86 -46 96 -74 4 -11 43 22 135 113 l128 127 127 0 c125 0 126 0 132 24
3 13 9 31 12 40 5 14 -12 16 -158 16 l-163 0 -90 -90 -90 -90 -185 0 -186 0
-64 -65 c-63 -63 -64 -65 -61 -114 4 -81 -35 -132 -110 -146 -70 -12 -149 60
-149 135 0 49 35 100 84 124 38 19 41 19 89 2 l50 -18 71 71 71 71 190 0 190
0 85 85 85 85 200 0 c158 1 204 4 219 15 19 14 83 37 139 49 19 5 27 13 27 27
0 27 59 86 94 95 16 4 45 2 65 -5 l36 -11 253 253 c138 138 252 257 252 264 0
6 -5 24 -10 39 l-11 28 -172 -172 -172 -172 -100 0 -100 0 -145 -145 -145
-145 -287 0 -288 0 0 -37 c0 -107 -121 -167 -204 -102 -84 66 -69 185 28 233
38 19 42 19 87 3 39 -14 91 -17 335 -17 l289 0 145 145 145 145 100 0 100 0
173 173 173 174 -17 36 c-10 20 -20 37 -23 37 -4 0 -76 -70 -161 -155 l-155
-155 -119 0 -120 0 -166 -165 -166 -165 -150 0 -150 0 -59 60 -59 60 -260 0
-260 0 -38 37 c-38 37 -38 37 -67 20 -87 -51 -201 16 -201 118 0 60 57 124
117 132 79 11 143 -49 143 -134 0 -42 5 -53 33 -81 l33 -32 260 0 260 0 59
-60 59 -60 136 0 135 0 160 160 160 160 115 0 115 0 159 159 158 158 -16 32
c-9 17 -20 31 -24 31 -4 0 -81 -74 -172 -165 l-165 -165 -210 0 -211 0 -33
-34 -33 -34 20 -30 c31 -43 37 -100 15 -142 -72 -139 -274 -83 -260 73 6 72
67 127 139 127 27 0 43 10 83 50 l49 50 211 0 210 0 164 164 163 163 -23 36
c-13 20 -26 37 -29 37 -3 0 -79 -74 -170 -165 l-165 -165 -254 0 -255 0 -146
-145 -147 -145 -149 0 -149 0 -175 176 c-96 96 -192 184 -213 195 -42 22 -77
71 -77 107 0 38 30 92 61 107 15 8 46 15 68 15 98 0 152 -127 84 -202 -16 -18
-12 -24 127 -163 l145 -145 125 0 125 0 140 140 140 140 255 0 255 0 163 163
162 162 -27 38 -27 38 -151 -151 -152 -151 -268 1 -268 1 -131 -130 -131 -131
-121 0 -120 0 -77 73 -77 72 0 246 0 245 -29 28 -30 29 -31 -27 c-58 -49 -131
-47 -174 4 -50 60 -46 120 10 169 28 25 44 31 80 31 39 0 51 -5 80 -34 19 -19
34 -40 34 -48 0 -7 27 -40 60 -73 l60 -59 0 -246 0 -246 53 -52 53 -52 107 0
107 0 127 130 126 130 271 0 271 0 144 144 144 144 -19 26 c-11 14 -21 26 -24
26 -3 0 -61 -56 -130 -125 l-125 -125 -325 0 -326 0 -38 -39 c-33 -34 -37 -42
-31 -74 8 -43 -15 -98 -53 -123 -34 -22 -100 -22 -134 0 -34 22 -60 86 -51
126 9 45 57 89 106 97 33 5 55 19 103 65 l61 58 319 0 319 0 117 117 117 117
-21 29 -21 29 -111 -111 -111 -111 -374 0 c-366 0 -375 0 -418 22 -80 40 -107
103 -73 173 30 62 92 83 159 55 36 -15 57 -45 66 -94 l7 -36 297 0 296 0 94
94 c95 96 97 99 63 139 -14 16 -22 11 -112 -78 l-97 -95 -219 0 -219 0 -165
165 -165 165 -325 0 -326 0 -49 -50 -49 -50 -161 0 -161 0 -57 58 -57 58 0
174 0 175 93 93 94 93 -20 40 c-17 35 -18 46 -8 79 36 119 196 120 232 1 22
-73 -40 -151 -121 -151 -31 0 -46 -11 -123 -88 l-87 -87 0 -155 0 -154 42 -43
42 -43 131 0 131 0 54 55 54 55 346 0 345 0 165 -165 165 -165 200 0 200 0 89
89 88 88 -25 28 -24 29 -84 -87 -83 -87 -160 0 -160 0 -176 175 -176 175 -421
0 -421 0 -20 -34 c-54 -91 -197 -59 -218 49 -15 81 74 160 151 135 36 -12 85
-61 85 -86 0 -12 66 -14 438 -14 l437 0 170 -170 170 -170 140 0 140 0 78 78
c72 72 76 79 63 97 -14 19 -18 17 -93 -57 l-78 -78 -110 0 -110 0 -83 83 -82
82 0 116 0 115 -48 47 -48 47 -174 0 -175 0 -87 87 c-86 86 -87 86 -117 73
-60 -25 -126 1 -157 62 -18 35 -18 62 2 104 20 42 59 64 115 64 34 0 47 -6 76
-35 31 -31 34 -39 32 -85 l-3 -51 79 -79 80 -80 175 0 176 0 67 -68 67 -68 0
-115 0 -115 68 -67 68 -67 80 0 80 0 73 74 74 74 -49 63 -49 62 -5 -44 c-8
-59 -23 -83 -64 -103 -42 -20 -57 -20 -101 -2 -40 17 -75 68 -75 109 0 77 78
138 150 117 17 -5 30 -6 30 -3 0 2 -16 25 -36 49 -34 42 -39 44 -88 44 l-51 0
-120 120 c-66 66 -125 120 -132 120 -7 0 -19 -13 -28 -30 -41 -79 -169 -79
-210 0 -25 49 -19 96 18 135 56 62 149 55 191 -15 11 -19 25 -30 39 -30 15 0
63 -40 147 -125 107 -107 150 -142 150 -120 0 3 -48 67 -107 143 -60 75 -139
179 -177 230 l-68 92 -502 0 -501 0 -250 250 -250 250 -80 0 -80 0 -222 -222
-223 -223 0 -267 0 -268 95 0 95 0 0 -265 0 -264 -92 -3 -93 -3 -3 -313 c-1
-173 1 -312 5 -310 73 37 88 40 128 27 24 -9 48 -27 62 -48 81 -121 -87 -252
-187 -146 -20 22 -32 25 -87 25 l-63 0 0 385 0 385 -185 0 -185 0 0 -447 0
-448 108 -112 108 -113 455 0 455 0 67 -68 67 -68 0 -497 0 -497 -70 0 -71 0
3 -92 3 -93 117 -81 118 -82 40 20 c128 64 247 -100 154 -212 -53 -62 -151
-59 -201 7 -22 29 -27 45 -27 89 l1 53 -128 87 -129 88 0 108 0 108 -70 0 -70
0 -2 237 -3 237 -105 28 -105 28 -102 -102 -103 -103 0 -605 0 -605 -145 -145
-145 -145 0 -127 0 -128 -90 0 -90 0 0 168 0 167 85 85 c47 47 85 87 85 90 0
3 -35 5 -77 5 l-78 0 -3 246 -2 246 -66 18 -66 18 -134 -134 -134 -134 0 -305
0 -306 -58 -57 -58 -57 -1912 0 -1912 0 0 471 0 472 -102 103 -102 104 -698 0
-698 0 0 510 0 510 26 0 26 0 -5 103 c-3 56 -9 117 -12 135 -10 47 18 116 63
150 49 37 140 39 191 3 57 -41 74 -96 79 -253 l4 -138 39 0 c37 0 38 -1 43
-42 3 -24 7 -175 10 -336 2 -162 7 -296 11 -300 3 -3 87 75 185 173 l180 180
0 865 0 865 150 150 150 150 0 87 0 88 -275 0 -275 0 0 90 0 90 -220 0 -219 0
-35 31 c-43 37 -54 81 -32 132 28 68 51 74 253 69 l178 -4 55 56 54 56 1077 0
1077 0 11 31 c6 18 11 38 11 45 0 17 -138 95 -178 100 -92 12 -139 104 -92
181 32 54 63 63 207 63 l128 0 98 -98 97 -97 0 -108 0 -107 55 0 55 0 0 -275
0 -275 -271 0 c-149 0 -269 -3 -267 -7 2 -5 10 -20 17 -35 l14 -28 314 0 313
0 0 347 0 348 83 -83 82 -82 682 0 681 0 107 63 106 62 -325 3 -326 2 0 65 0
65 -165 0 -165 0 0 115 0 115 127 0 128 0 72 72 73 72 0 136 0 135 150 150
150 150 0 110 0 110 -165 165 -165 165 0 1376 0 1376 -46 7 c-26 3 -69 6 -95
6 l-49 0 0 -581 0 -582 60 -104 60 -105 0 -561 0 -562 -82 -82 -81 -82 -1 -55
c-1 -63 -26 -98 -83 -116 -47 -16 -87 -4 -123 36 -58 67 -30 166 56 194 19 7
38 9 42 6 3 -4 41 28 84 71 l78 78 0 521 0 522 -60 104 -60 103 0 601 0 601
-57 6 c-31 3 -60 4 -65 1 -4 -3 -8 -323 -8 -711 l0 -706 40 -72 c30 -55 40
-83 40 -119 0 -35 4 -46 15 -46 29 0 75 -30 90 -60 56 -108 -57 -221 -165
-165 -73 38 -79 168 -10 205 35 19 27 83 -20 161 l-40 67 0 726 0 726 -50 0
-50 0 0 -938 0 -938 148 -147 c82 -81 154 -147 160 -147 19 0 52 -62 52 -98 0
-94 -107 -153 -184 -103 -38 25 -55 57 -56 101 0 42 30 96 60 105 20 6 8 21
-109 139 l-131 133 0 946 0 947 -55 0 -55 0 0 -727 0 -727 -42 -43 -42 -43 14
-52 c8 -35 24 -62 46 -83 85 -81 34 -205 -84 -205 -37 0 -50 6 -78 34 -28 28
-34 42 -34 75 0 57 22 95 65 116 30 14 36 21 31 38 -4 12 -9 40 -12 62 -5 37
-2 43 35 80 l41 39 0 718 0 718 -50 0 -50 0 0 -739z m-833 -2375 c43 -47 46
-109 7 -155 -77 -91 -224 -31 -211 87 12 108 132 147 204 68z m1454 21 c62
-42 76 -108 36 -168 -44 -66 -139 -70 -191 -8 -48 56 -28 151 38 183 44 22 78
20 117 -7z m-3426 -989 c86 -79 34 -208 -83 -208 -115 0 -159 153 -63 217 51
34 103 31 146 -9z m500 2 c81 -76 30 -210 -80 -210 -80 0 -140 80 -115 154 11
33 41 68 70 79 31 13 101 -1 125 -23z m440 20 c48 -18 75 -58 75 -110 0 -111
-120 -165 -200 -90 -58 54 -47 148 22 190 37 22 64 25 103 10z m541 -21 c80
-75 27 -209 -82 -209 -79 0 -139 80 -114 154 11 33 41 68 70 79 31 13 101 -1
126 -24z m-2387 -25 c30 -33 33 -40 29 -85 -11 -115 -139 -155 -213 -68 -48
58 -22 159 49 190 42 18 99 3 135 -37z m7262 -441 c64 -38 75 -130 23 -184
-49 -51 -124 -51 -175 1 -25 24 -29 37 -29 80 0 46 4 56 34 86 28 28 42 34 76
34 23 0 55 -8 71 -17z m-7264 -39 c64 -40 71 -135 14 -186 -57 -51 -112 -49
-168 7 -28 28 -33 40 -33 78 0 98 103 153 187 101z m7256 -431 c30 -15 57 -66
57 -105 0 -35 -36 -87 -74 -104 -65 -32 -136 0 -160 70 -23 67 12 136 78 155
34 10 56 6 99 -16z m-6807 -12 c79 -36 94 -148 28 -200 -103 -81 -244 27 -188
144 12 26 30 43 58 56 50 23 52 23 102 0z m-456 -6 c16 -9 36 -29 45 -45 43
-84 -13 -180 -105 -180 -92 0 -148 96 -105 180 29 55 105 76 165 45z m472
-524 c40 -22 64 -88 48 -135 -21 -65 -89 -98 -155 -76 -103 34 -110 176 -11
221 44 19 72 17 118 -10z m-472 4 c16 -9 36 -29 45 -45 43 -84 -13 -180 -105
-180 -92 0 -148 96 -105 180 29 55 105 76 165 45z m7270 -464 c14 -10 31 -36
39 -58 29 -81 -27 -156 -114 -156 -38 0 -52 5 -76 29 -40 40 -50 81 -33 129
27 79 116 106 184 56z m497 4 c14 -9 31 -33 40 -52 50 -122 -103 -225 -196
-132 -104 104 32 265 156 184z m-8260 -500 c33 -22 56 -80 48 -121 -3 -18 -19
-46 -35 -62 -50 -51 -120 -50 -170 0 -104 103 34 264 157 183z m953 -1907 c51
-27 80 -74 80 -131 0 -137 -167 -196 -259 -92 -26 30 -31 44 -31 86 0 58 19
100 57 127 52 37 94 40 153 10z m630 -1 c124 -66 96 -251 -42 -273 -50 -9 -81
1 -123 37 -102 90 -39 252 101 258 11 1 40 -9 64 -22z m8 -497 c91 -55 96
-172 12 -244 -25 -21 -42 -26 -83 -26 -67 0 -112 27 -137 83 -24 52 -24 66 -4
117 33 82 136 116 212 70z m5690 -960 c34 -21 72 -87 72 -125 0 -38 -38 -104
-72 -125 -72 -44 -173 -15 -210 60 -66 130 85 266 210 190z m-2438 -448 c107
-53 107 -207 0 -263 -96 -51 -210 20 -210 131 0 81 67 150 145 150 17 0 46 -8
65 -18z m-3370 -21 c107 -56 107 -210 0 -263 -98 -50 -210 21 -210 132 0 79
68 150 145 150 17 0 46 -8 65 -19z m467 0 c105 -48 109 -200 7 -258 -62 -36
-122 -27 -177 25 -74 71 -45 202 53 241 38 15 71 13 117 -8z m502 -8 c47 -36
66 -71 66 -123 0 -75 -55 -137 -132 -147 -80 -11 -163 65 -163 148 0 111 142
186 229 122z m441 8 c107 -56 107 -206 0 -262 -96 -52 -210 19 -210 131 0 112
114 183 210 131z m1440 1 c50 -25 80 -75 80 -132 0 -57 -30 -107 -80 -132 -98
-50 -210 21 -210 132 0 110 113 181 210 132z m-3360 -494 c158 -82 57 -325
-112 -269 -158 52 -120 283 47 290 12 1 41 -9 65 -21z m507 2 c110 -49 112
-208 3 -262 -97 -49 -210 21 -210 129 0 53 20 94 57 121 51 36 92 39 150 12z
m470 -1 c152 -74 74 -306 -92 -275 -114 22 -160 170 -77 249 51 49 105 57 169
26z m502 -6 c67 -51 86 -117 52 -186 -53 -109 -199 -115 -258 -11 -28 49 -29
86 -2 140 37 78 141 106 208 57z m448 -464 c72 -27 113 -105 93 -178 -13 -48
-66 -98 -115 -107 -49 -9 -119 19 -147 59 -32 44 -32 129 -1 173 39 55 108 77
170 53z"/>
<path d="M6180 11413 l0 -1338 165 -165 165 -165 0 -175 0 -175 -150 -150
-150 -150 0 -102 0 -103 543 0 542 0 93 -93 92 -92 0 -388 0 -387 185 0 185 0
0 298 0 297 263 263 262 262 140 0 140 0 250 -250 250 -250 423 0 c416 0 423
0 412 19 -8 15 -5 32 10 70 l20 51 -338 0 -337 0 -165 165 c-91 91 -171 165
-178 165 -8 0 -29 15 -47 33 -56 56 -58 111 -7 168 50 56 146 48 188 -16 18
-28 21 -94 5 -123 -8 -16 9 -38 122 -150 l132 -132 327 0 c199 0 329 4 333 10
3 5 12 49 19 97 15 103 9 118 -40 108 -39 -7 -90 12 -119 45 -30 34 -28 120 4
154 34 36 83 51 123 37 17 -6 32 -11 33 -11 4 0 -14 100 -20 110 -3 6 -51 10
-108 10 l-102 0 -98 -98 c-89 -89 -97 -101 -97 -136 0 -30 -7 -45 -34 -72 -29
-29 -41 -34 -80 -34 -84 0 -147 85 -116 159 29 72 110 101 173 63 l35 -20 93
94 94 94 117 0 118 0 -6 28 c-3 15 -7 32 -9 38 -2 6 -19 14 -39 18 -73 14
-119 83 -101 153 3 15 22 42 41 60 30 28 35 38 29 63 l-7 30 -77 0 -76 0 -78
-78 c-68 -68 -77 -82 -77 -114 0 -68 -74 -124 -144 -111 -38 8 -84 57 -92 100
-9 49 19 101 68 128 32 17 42 18 80 8 l43 -12 80 80 80 79 83 0 c97 0 94 -21
25 168 l-45 122 -57 0 -56 0 -271 -272 c-225 -227 -273 -280 -282 -314 -27
-95 -135 -129 -202 -63 -56 56 -46 148 22 189 39 24 73 25 112 4 l30 -15 281
281 280 280 53 0 52 0 -77 154 -77 154 -17 -38 c-30 -67 -111 -90 -176 -50
-45 27 -56 54 -50 115 l5 52 -94 94 -94 94 0 180 -1 180 -49 55 -49 55 -1
-185 0 -185 -120 -120 -120 -120 0 -179 0 -180 -347 -347 c-345 -345 -347
-348 -345 -386 9 -114 -138 -171 -212 -82 -40 47 -36 108 8 157 33 35 38 37
95 37 l61 0 325 325 325 325 0 180 0 180 125 125 125 125 0 210 0 211 -50 49
-50 49 0 -250 0 -249 -150 -150 c-141 -141 -150 -152 -150 -188 0 -24 7 -46
20 -59 86 -93 -34 -243 -148 -184 -84 44 -80 180 7 216 28 11 31 17 31 54 0
40 5 46 155 196 l155 155 0 266 0 266 -25 23 -25 23 0 -194 0 -195 -74 -73
c-70 -70 -74 -75 -64 -103 35 -100 -76 -193 -172 -143 -42 22 -60 53 -60 105
0 72 49 120 122 120 28 0 44 11 96 63 l62 63 0 219 0 220 -83 66 c-109 88
-221 169 -234 169 -5 0 -19 -10 -31 -23 l-22 -23 0 -554 0 -555 -87 -87 c-82
-83 -86 -88 -75 -113 27 -58 6 -127 -48 -159 -77 -45 -180 15 -180 104 0 64
52 120 112 120 16 0 51 28 111 88 l87 87 0 555 0 554 31 32 30 31 -49 32 c-27
17 -53 31 -58 31 -5 0 -38 -28 -72 -63 l-62 -63 0 -394 0 -395 33 -18 c112
-61 73 -227 -53 -227 -68 0 -120 53 -120 122 0 34 32 98 50 98 7 0 10 145 10
428 l0 428 65 64 c36 35 65 67 65 70 0 3 -25 20 -56 39 l-56 34 -79 -79 -79
-79 0 -850 0 -849 71 -72 c70 -71 74 -73 120 -72 82 2 136 -56 126 -135 -14
-104 -137 -140 -207 -60 -29 32 -32 41 -28 84 l5 47 -89 89 -88 88 0 880 0
880 80 80 c44 44 80 83 80 88 0 5 -46 30 -102 57 l-103 49 -52 -52 -53 -51 0
-541 0 -542 25 -23 c50 -47 40 -145 -19 -181 -18 -11 -49 -19 -74 -19 -37 0
-50 6 -78 34 -28 28 -34 41 -34 77 0 54 30 106 65 115 l25 6 0 551 0 551 56
57 56 56 -87 37 c-48 20 -92 36 -99 36 -6 0 -35 -24 -64 -53 l-52 -53 0 -684
0 -685 156 -155 c190 -189 220 -241 179 -320 -39 -75 -160 -79 -209 -8 -32 46
-12 144 35 169 20 10 14 19 -110 143 l-131 131 0 725 0 724 51 52 51 52 -58
22 c-32 12 -71 24 -86 27 l-28 6 0 -829 0 -829 85 -90 84 -90 1 -197 0 -196
89 -51 c48 -28 100 -51 115 -51 68 0 124 -68 112 -138 -12 -77 -105 -124 -174
-88 -45 23 -66 68 -59 131 l5 51 -84 48 -84 48 0 205 0 206 -85 86 -85 87 0
862 0 862 -27 11 c-16 6 -40 13 -55 16 l-28 6 0 -863 0 -863 65 -112 65 -112
0 -249 0 -250 213 -212 c150 -149 220 -212 235 -212 50 0 102 -59 102 -115 0
-59 -63 -125 -118 -125 -38 0 -92 30 -107 61 -20 37 -19 99 1 127 15 22 10 27
-195 230 l-211 207 0 254 0 254 -65 113 -65 113 0 891 c0 883 0 890 -20 890
-20 0 -20 -7 -20 -1168 l0 -1168 -75 -74 c-74 -74 -75 -75 -75 -126 0 -43 -5
-57 -28 -82 -96 -102 -256 6 -197 132 22 46 63 68 121 65 42 -3 47 0 109 61
l65 64 0 1162 0 1162 -44 11 c-25 6 -47 11 -50 11 -3 0 -6 -350 -6 -777 1
-668 3 -781 15 -797 8 -11 15 -40 15 -64 0 -37 -6 -50 -34 -78 -28 -28 -42
-34 -75 -34 -106 0 -163 92 -111 178 20 32 20 51 20 821 l0 788 -37 7 c-21 3
-48 6 -60 6 l-23 0 0 -938 0 -937 88 -88 c74 -74 92 -87 120 -87 73 0 122 -50
122 -126 0 -39 -5 -51 -34 -80 -28 -28 -42 -34 -76 -34 -79 0 -139 63 -127
135 5 30 -2 39 -99 136 l-104 104 0 967 c0 532 -3 969 -7 971 -5 3 -32 8 -60
12 l-53 7 0 -1339z m521 -2176 c97 -65 51 -217 -67 -217 -36 0 -51 6 -80 33
-48 43 -56 97 -22 147 43 63 109 78 169 37z m488 9 c41 -22 61 -59 61 -112 0
-39 -5 -51 -34 -80 -28 -28 -42 -34 -75 -34 -85 0 -138 56 -128 133 11 84 101
131 176 93z m465 0 c54 -22 79 -63 73 -119 -10 -113 -138 -153 -212 -66 -50
60 -25 152 49 185 40 17 49 17 90 0z m516 -1 c55 -28 79 -123 44 -173 -20 -29
-66 -52 -104 -52 -100 0 -157 115 -93 190 42 51 98 63 153 35z"/>
<path d="M9300 10970 l0 -105 84 -84 c79 -79 86 -83 130 -85 25 -1 46 0 46 3
0 8 -206 312 -234 346 l-25 30 -1 -105z"/>
<path d="M11385 6019 l-210 -212 99 52 c149 79 206 122 269 204 32 42 64 132
55 157 -1 5 -98 -85 -213 -201z"/>
<path d="M8887 3832 l-47 -48 0 -159 0 -160 -185 -185 -185 -185 0 -705 0
-706 38 -37 c33 -33 44 -37 87 -37 l49 0 -62 63 -62 63 0 554 0 555 106 106
106 107 -12 37 c-17 53 -7 111 26 146 59 62 136 59 194 -7 58 -66 33 -172 -50
-209 -32 -15 -47 -16 -74 -8 -34 10 -34 10 -140 -96 l-106 -106 0 -525 0 -525
78 -78 77 -77 65 0 65 0 -93 93 -92 92 0 460 0 460 338 338 337 337 578 0
c317 0 577 3 577 8 0 4 3 17 6 30 l6 22 -613 0 -613 0 -67 66 -67 67 -44 -22
c-52 -25 -67 -26 -113 -7 -45 19 -75 69 -75 124 0 57 25 98 75 122 90 43 185
-23 185 -129 0 -35 7 -48 61 -106 l61 -65 608 0 608 0 10 28 c5 15 13 35 17
45 7 16 -25 17 -591 17 l-598 0 -43 42 -43 42 0 77 0 77 -44 26 c-41 24 -53
26 -168 26 l-124 0 -47 -48z"/>
<path d="M9043 3017 l-323 -323 0 -435 0 -434 108 -108 107 -107 68 0 67 0 0
239 0 240 35 60 35 59 0 304 0 303 168 168 167 167 544 0 543 0 -6 23 c-3 12
-6 25 -6 30 0 4 -249 7 -553 7 l-552 0 -243 -243 -242 -242 0 -136 0 -135 36
-17 c70 -34 92 -139 43 -201 -74 -95 -209 -59 -234 61 -10 49 25 118 69 140
l36 17 0 145 0 146 263 263 262 262 543 0 c587 0 560 -3 532 51 -10 18 -27 19
-578 19 l-567 0 -322 -323z"/>
<path d="M9342 2937 l-152 -152 0 -299 0 -299 -35 -63 -35 -63 2 -223 3 -223
30 0 30 0 3 241 2 240 45 44 45 44 0 146 1 145 74 43 75 42 437 0 437 0 66
-65 c63 -63 66 -65 99 -55 55 15 116 -17 142 -75 26 -58 17 -108 -26 -152 -42
-42 -92 -51 -141 -27 -71 35 -101 112 -70 175 l16 33 -57 58 -57 58 -409 0
-409 0 -64 -36 -64 -36 0 -142 0 -142 -45 -44 -45 -45 2 -225 c3 -256 -4 -238
96 -225 l54 7 -41 42 -41 42 0 154 0 155 91 91 91 91 -21 34 c-25 41 -27 107
-6 149 31 59 130 82 183 43 106 -77 64 -233 -66 -250 -34 -5 -53 -19 -127 -93
l-87 -88 1 -133 2 -134 52 -52 51 -53 100 0 100 0 -34 35 c-23 24 -43 35 -62
35 -38 0 -81 23 -107 56 -16 20 -21 41 -21 82 0 50 3 58 39 93 33 33 45 39 82
39 115 0 177 -124 111 -218 l-21 -29 47 -46 c45 -45 50 -47 104 -47 31 0 59 4
62 8 3 5 -22 35 -54 67 l-60 59 0 186 0 186 75 55 74 54 -6 51 c-16 140 135
213 226 108 25 -28 31 -44 31 -80 0 -25 -7 -58 -14 -73 -30 -56 -101 -82 -160
-57 l-37 15 -69 -52 -70 -52 6 -160 6 -160 66 -67 67 -66 80 27 c44 15 107 39
139 54 l59 27 -23 25 c-31 33 -43 32 -63 -10 -32 -66 -113 -93 -178 -60 -92
48 -90 193 2 241 67 34 167 -5 183 -72 5 -18 13 -24 33 -24 17 0 40 -13 63
-35 l36 -35 37 25 c20 14 37 31 37 36 0 6 8 27 17 46 19 40 66 73 105 73 31 0
83 55 158 167 56 84 90 167 97 241 l6 54 -164 164 -164 164 -140 0 -140 -1
-17 -37 c-10 -21 -32 -46 -49 -56 -40 -24 -105 -23 -138 2 -33 23 -61 78 -61
117 0 60 71 135 128 135 42 0 92 -28 113 -65 l21 -35 151 0 152 0 153 -152
154 -153 -7 60 c-9 76 -35 181 -82 323 l-36 112 -411 0 -411 0 -79 -79 c-72
-73 -77 -80 -66 -101 7 -14 10 -44 7 -73 -4 -42 -10 -56 -41 -84 -30 -28 -43
-33 -86 -33 -43 0 -56 5 -87 33 -31 29 -37 41 -40 88 -4 45 -1 60 19 89 31 46
94 70 140 52 33 -12 33 -12 118 73 l85 85 413 0 c405 0 412 0 412 20 0 20 -7
20 -548 20 l-547 0 -153 -153z"/>
<path d="M1428 940 c-3 -16 -1 -30 4 -30 4 0 8 14 8 30 0 17 -2 30 -4 30 -2 0
-6 -13 -8 -30z"/>
<path d="M1300 258 c-24 -117 -45 -223 -48 -235 l-4 -23 623 1 624 0 -165 58
c-323 114 -565 213 -844 345 -76 36 -140 66 -141 66 -1 0 -21 -96 -45 -212z"/>
</g>
</svg>
            </div>
        </Tilt>
    )
} 

export default Logo;