// Original stylized flat-illustration portrait, hand-built to reflect
// Vrutik's photo (glasses, short dark hair, light beard, collared shirt).
// No AI image generation or third-party assets used.

const AvatarPortrait = () => (
  <g>
    {/* shoulders / shirt */}
    <path d="M 60 460 L 90 300 Q 200 260 310 300 L 340 460 Z" fill="#7a8a71" />
    {/* collar */}
    <path
      d="M 150 300 L 200 350 L 250 300 L 235 292 L 200 320 L 165 292 Z"
      fill="#5f6e58"
    />
    {/* buttons */}
    <circle cx="200" cy="365" r="4" fill="#3f4a3a" />
    <circle cx="200" cy="395" r="4" fill="#3f4a3a" />
    <circle cx="200" cy="425" r="4" fill="#3f4a3a" />

    {/* neck */}
    <rect x="175" y="255" width="50" height="60" rx="10" fill="#caa277" />

    {/* ears */}
    <ellipse cx="112" cy="195" rx="14" ry="20" fill="#caa277" />
    <ellipse cx="288" cy="195" rx="14" ry="20" fill="#caa277" />

    {/* head */}
    <path
      d="M 200 70
         C 260 70 288 115 285 175
         C 283 220 270 255 240 275
         C 220 288 180 288 160 275
         C 130 255 117 220 115 175
         C 112 115 140 70 200 70 Z"
      fill="#d1a97e"
    />

    {/* beard: thin crescent band hugging the jaw contour */}
    <path
      d="M 132 178
         C 130 215 140 248 162 270
         C 180 285 220 285 238 270
         C 260 248 270 215 268 178
         C 264 208 253 236 236 254
         C 226 264 214 270 200 270
         C 186 270 174 264 164 254
         C 147 236 136 208 132 178 Z"
      fill="#20242b"
      fillOpacity={0.88}
    />
    <path
      d="M 200 270
         C 214 270 226 264 236 254
         C 246 242 254 226 258 208
         C 250 240 234 262 210 268
         C 203 269.5 197 269.5 190 268
         C 166 262 150 240 142 208
         C 146 226 154 242 164 254
         C 174 264 186 270 200 270 Z"
      fill="#d1a97e"
    />

    {/* sideburns */}
    <path
      d="M 122 170 C 120 190 122 205 128 218 C 124 200 124 184 128 168 Z"
      fill="#20242b"
    />
    <path
      d="M 278 170 C 280 190 278 205 272 218 C 276 200 276 184 272 168 Z"
      fill="#20242b"
    />

    {/* hair */}
    <path
      d="M 116 152
         C 105 98 145 60 200 58
         C 258 56 297 100 284 154
         C 279 128 262 116 250 128
         C 246 106 224 90 200 90
         C 178 90 165 98 158 116
         C 149 106 130 118 126 142
         C 122 146 118 149 116 152 Z"
      fill="#1c2027"
    />
    <path
      d="M 200 58 C 217 56 234 60 248 72 C 232 67 216 67 200 71 C 184 67 168 67 152 74 C 165 61 182 56 200 58 Z"
      fill="#2a3038"
    />

    {/* eyebrows */}
    <path
      d="M 150 168 Q 165 160 182 166"
      stroke="#20242b"
      strokeWidth={5}
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M 218 166 Q 235 160 250 168"
      stroke="#20242b"
      strokeWidth={5}
      fill="none"
      strokeLinecap="round"
    />

    {/* glasses */}
    <g fill="none" stroke="#161b21" strokeWidth={5}>
      <rect
        x="140"
        y="178"
        width="60"
        height="42"
        rx="12"
        fill="#dff4ef"
        fillOpacity={0.12}
      />
      <rect
        x="200"
        y="178"
        width="60"
        height="42"
        rx="12"
        fill="#dff4ef"
        fillOpacity={0.12}
      />
      <path d="M 200 192 L 200 200" />
      <path d="M 140 198 L 118 190" />
      <path d="M 260 198 L 282 190" />
    </g>
    <circle cx="168" cy="199" r="4.5" fill="#20242b" />
    <circle cx="228" cy="199" r="4.5" fill="#20242b" />

    {/* nose */}
    <path
      d="M 197 205 C 194 218 190 228 196 234 C 200 237 205 236 208 233"
      stroke="#b8916a"
      strokeWidth={3}
      fill="none"
      strokeLinecap="round"
    />

    {/* mouth / smile */}
    <path
      d="M 174 250 Q 200 268 226 250 Q 200 262 174 250 Z"
      fill="#7a3d34"
    />
    <path
      d="M 180 251 Q 200 259 220 251"
      stroke="#f2ddd0"
      strokeWidth={4}
      fill="none"
      strokeLinecap="round"
    />

    {/* mustache */}
    <path
      d="M 172 244 Q 200 236 228 244 Q 200 250 172 244 Z"
      fill="#20242b"
    />
  </g>
);

export default AvatarPortrait;
