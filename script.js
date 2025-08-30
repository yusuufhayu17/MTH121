const questions = [

  {
    "question": "The vector equation of a line passing through a point with position vector a and parallel to vector b is:",
    "options": ["r = a + tb", "r = b + ta", "r · b = q", "(r - a) × b = 0"],
    "answer": 0
  },
  {
    "question": "The shortest distance between the skew lines r = a₁ + tb₁ and r = a₂ + sb₂ is given by:",
    "options": ["|(a₂ - a₁) · (b₁ × b₂)| / |b₁ × b₂|", "|(a₂ - a₁) × (b₁ × b₂)| / |b₁ × b₂|", "|(a₂ - a₁) · (b₁ × b₂)|", "|a₂ - a₁| / |b₁ × b₂|"],
    "answer": 0
  },
  {
    "question": "The condition for two lines r = a₁ + tb₁ and r = a₂ + sb₂ to be coplanar is:",
    "options": ["(a₂ - a₁) · (b₁ × b₂) = 0", "(a₂ - a₁) × (b₁ × b₂) = 0", "b₁ · b₂ = 0", "a₁ · a₂ = 0"],
    "answer": 0
  },
  {
    "question": "The vector equation of a plane passing through a point with position vector a and parallel to vectors b and c is:",
    "options": ["r = a + sb + tc", "r · (b × c) = a · (b × c)", "(r - a) · (b × c) = 0", "All of the above"],
    "answer": 3
  },
  {
    "question": "The Cartesian equation of a plane passing through (x₁, y₁, z₁) and perpendicular to a line with direction ratios (a, b, c) is:",
    "options": ["a(x - x₁) + b(y - y₁) + c(z - z₁) = 0", "(x - x₁)/a = (y - y₁)/b = (z - z₁)/c", "ax + by + cz + d = 0", "a(x + x₁) + b(y + y₁) + c(z + z₁) = 0"],
    "answer": 0
  },
  {
    "question": "The distance from the point (x₁, y₁, z极) to the plane ax + by + cz + d = 0 is:",
    "options": ["|ax₁ + by₁ + cz₁ + d| / √(a² + b² + c²)", "|ax₁ + by₁ + cz₁| / √(a² + b² + c²)", "|ax₁ + by₁ + cz₁ + d|", "(ax₁ + by₁ + cz₁ + d) / √(a² + b² + c²)"],
    "answer": 0
  },
  {
    "question": "The angle between two planes a₁x + b₁y + c₁z + d₁ = 0 and a₂x + b₂y + c₂z + d₂ = 0 is given by the angle between their:",
    "options": ["Normal vectors", "Direction vectors", "Lines of intersection", "Points of contact"],
    "answer": 0
  },
  {
    "question": "The equation of the plane passing through the intersection of the planes P₁: a₁x+b₁y+c₁z+d₁=0 and P₂: a₂x+b₂y+c₂z+d₂=0 is:",
    "options": ["P₁ + kP₂ = 0", "P₁ - kP₂ = 0", "kP₁ + P₂ = 0", "Any of the above"],
    "answer": 0
  },
  {
    "question": "The condition for the line (x - x₁)/l = (y - y₁)/m = (z - z₁)/n to be parallel to the plane ax + by + cz + d = 0 is:",
    "options": ["al + bm + cn = 0", "(x₁, y₁, z₁) satisfies the plane equation", "l/m = a/b", "l = a, m = b, n = c"],
    "answer": 0
  },
  {
    "question": "The condition for the line (x - x₁)/l = (y - y₁)/m = (z - z₁)/n to lie in the plane ax + by + cz + d = 0 is:",
    "options": ["al + bm + cn = 0 and ax₁ + by₁ + cz₁ + d = 0", "al + bm + cn ≠ 0", "(x₁, y₁, z₁) is the origin", "l = m = n"],
    "answer": 0
  },
  {
    "question": "The image of the point (x₁, y₁, z₁) in the plane ax + by + cz + d = 0 is given by:",
    "options": ["(x - 2aλ, y - 2bλ, z - 2cλ) where λ = (ax₁+by₁+cz₁+d)/(a²+b²+c²)", "(x + 2aλ, y + 2bλ, z + 2cλ) where λ = (ax₁+by₁+cz₁+d)/(a²+b²+c²)", "(x₁ - aλ, y₁ - bλ, z₁ - cλ) where λ = (ax₁+by₁+cz₁+d)/(a²+b²+c²)", "(x₁ + aλ, y₁ + bλ, z₁ + cλ) where λ = (ax₁+by₁+cz₁+d)/(a²+b²+c²)"],
    "answer": 0
  },
  {
    "question": "The distance between the parallel planes ax + by + cz + d₁ = 0 and ax + by + cz + d₂ = 0 is:",
    "options": ["|d₁ - d₂| / √(a² + b² + c²)", "|d₁ + d₂| / √(a² + b² + c²)", "|d₁ - d₂|", "(d极 - d₂) / √(a² + b² + c²)"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere with center (a, b, c) and radius r is:",
    "options": ["(x - a)² + (y - b)² + (z - c)² = r²", "x² + y² + z² + 2ax + 2by + 2cz + d = 0", "ax + by + cz = r²", "(x + a)² + (y + b)² + (z + c)² = r²"],
    "answer": 0
  },
  {
    "question": "The general equation of a sphere is x² + y² + z² + 2ux + 2vy + 2wz + d = 0. Its center is:",
    "options": ["(-u, -v, -w)", "(u, v, w)", "(-2u, -2v, -2w)", "(u/2, v/2, w/2)"],
    "answer": 0
  },
  {
    "question": "The radius of the sphere x² + y² + z² + 2ux + 2vy + 2wz + d = 0 is:",
    "options": ["√(u² + v² + w² - d)", "√(u² + v² + w² + d)", "u² + v² + w² - d", "u² + v² + w² + d"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere with (x₁, y₁, z₁) and (x₂, y₂, z₂) as endpoints of a diameter is:",
    "options": ["(x - x₁)(x - x₂) + (y - y₁)(y - y₂) + (z - z₁)(z - z₂) = 0", "(x - x₁)² + (y - y₁)² + (z - z₁)² = (x - x₂)² + (y - y₂)² + (z - z₂)²", "x² + y² + z² = x₁x₂ + y₁y₂ + z₁z₂", "(x - x₁)/(x₂ - x₁) = (y - y₁)/(y₂ - y₁) = (z - z₁)/(z₂ -极)"],
    "answer": 0
  },
  {
    "question": "The angle between two lines with direction cosines (l₁, m₁, n₁) and (l₂, m₂, n₂) is given by:",
    "options": ["cosθ = l₁l₂ + m₁m₂ + n₁n₂", "sinθ = √[(m₁n₂ - m₂n极)² + (n₁l₂ - n₂l₁)² + (l₁m₂ - l₂m₁)²]", "tanθ = |(l₁l₂ + m₁m₂ + n₁n₂)| / √[(m₁n₂ - m₂n₁)² + (n₁l₂ - n₂l₁)² + (l₁m₂ - l₂m₁)²]", "Both a and b"],
    "answer": 3
  },
  {
    "question": "The direction ratios of the line of intersection of the planes a₁x+b₁y+c₁z+d₁=0 and a₂x+b₂y+c₂z+d₂=0 are proportional to:",
    "options": ["(b₁c₂ - b₂c₁, c₁a₂ - c₂a₁, a₁b₂ - a₂b₁)", "(a₁a₂, b₁b₂, c₁c₂)", "(a₁ + a₂, b₁ + b₂, c₁ + c₂)", "(a₁ - a₂, b₁ - b₂, c₁ - c₂)"],
    "answer": 0
  },
  {
    "question": "The condition for the planes a₁x+b₁y+c₁z+d₁=0 and a₂x+b₂y+c₂z+d₂=0 to be perpendicular is:",
    "options": ["a₁a₂ + b₁b₂ + c₁c₂ = 0", "a₁/a₂ = b₁/b₂ = c₁/c₂", "a₁a₂ = b₁b₂ = c₁c₂", "(a₁ + a₂)(b₁ + b₂)(c₁ + c₂) = 0"],
    "answer": 0
  },
  {
    "question": "The distance between the parallel lines (x - x₁)/l = (y - y₁)/m = (z - z₁)/n and (x - x₂)/l = (y - y₂)/m = (z - z₂)/n is:",
    "options": ["|(AB × b)| / |b| where A=(x₁,y₁,z₁), B=(x₂,y₂,z₂), b=(l,m,n)", "|AB · b| / |b|", "|AB|", "|AB| / |b|"],
    "answer": 0
  },
  {
    "question": "The equation of the plane containing the line (x - x₁)/l = (y - y₁)/m = (z - z₁)/n and parallel to another line with direction ratios (l₂, m₂, n₂) is:",
    "options": ["|x - x₁ y - y₁ z - z₁| |l m n | = 0 |l₂ m₂ n₂ |", "l(x - x₁) + m(y - y₁) + n(z - z₁) = 0", "l₂(x - x₁) + m₂(y - y₁) + n₂(z - z₁) = 0", "(x - x₁)/l = (y - y₁)/m = (z - z₁)/n"],
    "answer": 0
  },
  {
    "question": "The equation of the plane through the point (x₁, y₁, z₁) and perpendicular to the planes a₁x+b₁y+c₁z+d₁=0 and a₂x+b₂y+c₂z+d₂=0 is:",
    "options": ["|x - x₁ y - y₁ z - z₁| |a₁ b₁ c₁ | = 0 |a₂ b₂ c₂ |", "a₁(x - x₁) + b₁(y - y₁) + c₁(z - z₁) = 0", "a₂(x - x₁) + b₂(y - y₁) + c₂(z - z₁) = 0", "(a₁ + a₂)(x - x₁) + (b₁ + b₂)(y - y₁) + (c₁ + c₂)(z - z₁) = 0"],
    "answer": 0
  },
  {
    "question": "The condition for the four points (x₁,y₁,z₁), (x₂,y₂,z₂), (x₃,y₃,z₃), (x₄,y₄,z₄) to be coplanar is that the volume of the tetrahedron formed by them is zero, which is given by the determinant:",
    "options": ["|x₁ y₁ z₁ 1| |x₂ y₂ z₂ 1| |x₃ y₃ z₃ 1| |x₄ y₄ z₄ 1| = 0", "|x₁ y₁ z₁| |x₂ y₂ z₂| |x₃ y₃ z₃| = 0", "|x₁ - x₄, y₁ - y₄, z₁ - z₄| |x₂ - x₄, y₂ -极₄, z₂ - z₄| |x₃ - x₄, y₃ - y₄, z₃ - z₄| = 0", "All of the above"],
    "answer": 3
  },
  {
    "question": "The equation of the sphere passing through the circle x²+y²+z²+2ux+2vy+2wz+d=0, lx+my+nz=p is:",
    "options": ["x²+y²+z²+2ux+2vy+2wz+d + λ(lx+my+nz-p)=0", "x²+y²+z²+2ux+2vy+2wz+d = λ(lx+my+nz-p)", "(x²+y²+z²+2ux+2vy+2wz+d)(lx+my+nz-p)=0", "x²+y²+z²+2ux+2vy+2wz+d + λ = lx+my+nz-p"],
    "answer": 0
  },
  {
    "question": "The angle between the line (x - x₁)/l = (y - y₁)/m = (z - z₁)/n and the plane ax + by + cz + d = 0 is given by:",
    "options": ["sinφ = |al + bm + cn| / √(a²+b²+c²)√(l²+m²+n²)", "cosφ = |al + bm + cn| / √(a²+b²+c²)√(l²+m²+n²)", "tanφ = √(a²+b²+c²)√(l²+m²+n²) / |al + bm + cn|", "cotφ = |al + bm + cn| / √(a²+b²+c²)√(l²+m²+n²)"],
    "answer": 0
  },
  {
    "question": "The equation of the tangent plane to the sphere x²+y²+z²+2ux+2vy+2wz+d=0 at the point (x₁,y₁,z₁) is:",
    "options": ["xx₁ + yy₁ + zz₁ + u(x+x₁) + v(y+y₁) + w(z+z₁) + d = 0", "xx₁ + yy₁ + zz₁ + u(x - x₁) + v(y - y₁) + w(z - z₁) + d = 0", "x² + y² + z² + 2ux + 2vy + 2wz + d = xx₁ + yy₁ + zz₁", "(x - x₁)² + (y - y₁)² + (z - z₁)² = r²"],
    "answer": 0
  },
  {
    "question": "The condition for the plane lx + my + nz = p to touch the sphere x²+y²+z²+2ux+2vy+2wz+d=极 is that the perpendicular distance from the center to the plane equals the radius, i.e.:",
    "options": ["|(-u)l + (-v)m + (-w)n - p| / √(l²+m²+n²) = √(u²+v²+w² - d)", "|ul + vm + wn + p| / √(l²+m²+n²) = √(u²+v²+w² - d)", "|ul + vm + wn - p| / √(l²+m²+n²) = √(u²+v²+w² + d)", "|(-u)l + (-v)m + (-w)n + p| / √(l²+m²+n²) = √(u²+v²+w² + d)"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere with center on the line x/1 = y/2 = z/3 and passing through the points (0,0,0) and (1,0,0) is:",
    "options": ["x² + y² + z² - x = 0", "x² + y² + z² - y = 0", "x² + y² + z² - z = 0", "x² + y² + z² - x - y - z = 0"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere concentric with x²+y²+z²-4x-6y-8z-4=0 and passing through (1,1,1) is:",
    "options": ["x²+y²+z²-4x-6y-8z+6=0", "x²+y²+z²-4x-6y-8z-6=0", "x²+y²+z²-4x-6y-8z+4=0", "x²+y²+z²-4x-6y-8z-4=0"],
    "answer": 0
  },
  {
    "question": "The locus of a point which moves such that the ratio of its distances from two fixed points is constant is a:",
    "options": ["Circle", "Plane", "Sphere", "None of these"],
    "answer": 2
  },
  {
    "question": "The equation of the sphere having the circle x²+y²+z²=9, x+y+z=1 as a great circle is:",
    "options": ["x²+y²+z² - 9 + λ(x+y+z-1)=0", "x²+y²+z² - 9 = λ(x+y+z-1)", "(x²+y²+z²-9)(x+y+z-1)=0", "x²+y²+z² + λ(x+y+z-1)=9"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere passing through the points (0,0,0), (1,0,0), (0,1,0), (0,0,1) is:",
    "options": ["x²+y²+z² - x - y - z = 0", "x²+y²+z² + x + y + z = 0", "x²+y²+z² - xy - yz - zx = 0", "x²+y²+z² + xy + yz + zx = 0"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere with center (1,2,3) and touching the plane 2x+3y+4z=5 is:",
    "options": ["(x-1)²+(y-2)²+(z-3)² = |2(1)+3(2)+4(3)-5|² / (2²+3²+4²)", "(x-1)²+(y-2)²+(z-3)² = |2(1)+3(2)+4(3)-5| / √(2²+3²+4²)", "(x-1)²+(y-2)²+(z-3)² = [2(1)+3(2)+4(3)-5]² / (2²+3²+4²)", "(x-1)²+(y-2)²+(z-3)² = [2(1)+3(2)+4(3)-5] / (2²+3²+4²)"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere through the circle x²+y²+z²=1, x+y+z=1 and the point (1,1,1) is:",
    "options": ["x²+y²+z² - 1 + λ(x+y+z-1)=0 with λ determined by (1,1,1)", "x²+y²+z² - 1 = λ(x+y+z-1)", "(x²+y²+z²-1)(x+y+z-1)=0", "x²+y²+z² + λ(x+y+z-1)=1"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere with center on the plane x+y+z=3 and passing through the points (1,0,0), (0,1,0), (0,0,1) is:",
    "options": ["x²+y²+z² - x - y - z = 0", "x²+y²+z² - 2x - 2y - 2z + 2 = 0", "x²+y²+z² - 4x - 4y - 4z + 4 = 0", "x²+y²+z² - x - y - z + 1 = 0"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere with center (2,3,4) and touching the x-axis is:",
    "options": ["(x-2)²+(y-3)²+(z-4)² = 3²+4²", "(x-2)²+(y-3)²+(z-4)² = 2²", "(x-2)²+(y-3)²+(z-4)² = 4²", "(x-2)²+(y-3)²+(z-4)² = 5²"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere with center on the z-axis and passing through the points (a,0,0), (0,b,0), (0,0,c) is:",
    "options": ["x²+y²+z² - 2λz + (a²+b²+c²)/2 = 0", "x²+y²+z极 - 2λz = 0", "x²+y²+z² - 2λz + λ² = a²+b²+c²", "x²+y²+z² - 2λ极 + λ² - (a²+b²+c²)/2 = 0"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere passing through (1,1,1) and (2,2,2) and having the smallest possible radius is:",
    "options": ["x²+y²+z² - 3x - 3y - 3z + 6 = 0", "x²+y²+z² - 3x - 3y - 3z + 3 = 0", "x²+y²+z² - x - y - z = 0", "x²+y²+z² - 2x - 2y - 2z + 2 = 0"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere with center (1,2,3) and cutting the plane x+y+z=1 in a circle of radius 2 is:",
    "options": ["(x-1)²+(y-2)²+(z-3)² = 4 + [|1+2+3-1|/√3]²", "(x-1)²+(y-2)²+(z-3)² = 4 + [|1+2+3-1|/√3]", "(x-1)²+(y-2)²+(z-3)² = 2 + [|1+2+3-1|/√3]²", "(x-1)²+(y-2)²+(z-3)² = 2 + [|1+2+3-1|/√3]"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere with center (1,1,1) and touching the sphere x²+y²+z²-2x-4y-6z+10=0 externally is:",
    "options": ["(x-1)²+(y-1)²+(z-1)² = [√(1+1+1-10) - 1]²", "(x-1)²+(y-1)²+(z-1)² = [√(1+4+9-10) - 1]²", "(x-1)²+(y-1)²+(z-1)² = [√(1+1+1-10) + 1]²", "(x-1)²+(y-1)²+(z-1)² = [√(1+4+9-10) + 1]²"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere through the points (0,0,0), (a,0,0), (0,b,0), (0,0,c) is:",
    "options": ["x²+y²+z² - ax - by - cz = 0", "x²+y²+z² + ax + by + cz = 极", "x²+y²+z² - (a+b+c)(x+y+z) = 0", "x²+y²+z² + (a+b+c)(x+y+z) = 0"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere with center (1,2,3) and touching the line (x-0)/1 = (y-0)/1 = (z-0)/1 is:",
    "options": ["(x-1)²+(y-2)²+(z-3)² = [|(1×1+2×1+3×1)|/√3]²", "(x-1)²+(y-2)²+(z-3)² = [|(1×1+2×1+3×1 - 0)|/√3]²", "(x-1)²+(y-2)²+(z-3)² = [distance from (1,2,3) to line]²", "(x-1)²+(y-2)²+(z-3)² = [|(1-0)×1 + (2-0)×1 + (3-0)×1|/√3]²"],
    "answer": 2
  },
  {
    "question": "The equation of the sphere with center on the line x/1 = y/2 = z/3 and radius √14 which touches the plane x+y+z=3 is:",
    "options": ["(x-1)²+(y-2)²+(z-3)² = 14", "(x-2)²+(y-4)²+(z-6)² = 14", "(x-1)²+(y-2)²+(z-3)² = 14 and (x+1)²+(y+2)²+(z+3)² = 14", "(x-2)²+(y-4)²+(z-6)² = 14 and (x+2)²+(y+4)²+(z+6)² = 14"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere passing through the points (1,0,0), (0,1,0), (0,0,1) and having the smallest possible radius is:",
    "options": ["x²+y²+z² - x - y - z = 0", "x²+y²+z² - x - y - z + 1/2 = 0", "x²+y²+z² - x - y - z + 1/4 = 0", "x²+y²+z² - x - y - z + 1 = 0"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere with center (1,1,1) and intersecting the sphere x²+y²+z²+2x+4y+6z+10=0 orthogonally is:",
    "options": ["(x-1)²+(y-1)²+(z-1)² = 3 + 2(1)(-1) + 2(1)(-2) + 2(1)(-3) - 10", "(x-1)²+(y-1)²+(z-1)² = 3 - 2(1)(1) - 2(1)(2) - 2(1)(3) + 10", "(x-1)²+(y-1)²+(z-1)² = 3 + 2(1)(1) + 2(1)(2) + 2(1)(3) - 10", "(x-1)²+(y-1)²+(z-1)² = 3 - 2(1)(-1) - 2(1)(-2) - 2(1)(-3) + 10"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere through the circle x²+y²+z²=4, x+y+z=1 and with center on the plane x+y+z=0 is:",
    "options": ["x²+y²+z² - 4 + λ(x+y+z-1)=0 with center (-λ/2, -λ/2, -λ/2) satisfying -λ/2 -λ/2 -λ/2=0", "x²+y²+z² - 4 = λ(x+y+z-1)", "(x²+y²+z²-4)(x+y+z-1)=0", "x²+y²+z² + λ(x+y+z-1)=4"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere with center (2,3,4) and touching the sphere x²+y²+z²-4x-6y-8z+4=0 internally is:",
    "options": ["(x-2)²+(y-3)²+(z-4)² = [√(4+9+16-4) - √(4+9+16)]²", "(x-2)²+(y-3)²+(z-4)² = [√(4+9+16-4) + √(4+9+16)]²", "(x-2)²+(y-3)²+(z-4)² = [√(4+9+16) - √(4+9+16-4)]²", "(x-2)²+(y-3)²+(z-4)² = [√(4+9+16) + √(4+9+16-4)]²"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere with center on the line x=2y=3z and passing through the points (0,0,0) and (1,1,1) is:",
    "options": ["x²+y²+z² - (6/7)(x+2y+3z)=0", "x²+y²+z² - (6/7)(x+2y+3z)=1", "x²+y²+z² - (7/6)(x+2y+3z)=0", "x²+y²+z² - (7/6)(x+2y+3z)=1"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere through the points (0,0,0), (1,1,0), (1,0,1), (0,1,1) is:",
    "options": ["x²+y²+z² - x - y - z = 0", "x²+y²+z² - x - y - z + 1 = 0", "x²+y²+z² - xy - yz - zx = 0", "x²+y²+z² + xy + y极 + zx = 0"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere with center (1,2,3) and cutting the sphere x²+y²+z²=14 orthogonally is:",
    "options": ["(x-1)²+(y-2)²+(z-3)² = 14 - 2(1×0+2×0+3×0) + 0", "(x-1)²+(y-2)²+(z-3)² = 14 - 2(1×0+2×0+3×0) - 0", "(x-1)²+(y-2)²+(z-3)² = 14 + 2(1×0+2×0+3×0) + 0", "(x-1)²+(y-2)²+(z-3)² = 14 + 2(1×0+2×0+3×0) - 0"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere through the circle x²+y²+z²+2x+4y+6z+11=0, x+y+z+3=0 and the point (1,1,1) is:",
    "options": ["x²+y²+z²+2x+4y+6z+11 + λ(x+y+z+3)=0 with λ from (1,1,1)", "x²+y²+z²+2x+4y+6z+11 = λ(x+y+z+3)", "(x²+y²+z²+2x+4y+6z+11)(x+y+z+3)=0", "x²+y²+z²+2x+4y+6z+11 + λ = x+y+z+3"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere with center (1,1,1) and radius equal to the distance from (1,1,1) to the line (x-0)/1 = (y-0)/1 = (z-0)/1 is:",
    "options": ["(x-1)²+(y-1)²+(z-1)² = [|(1×1+1×1+1×1)|/√3]²", "(x-1)²+(y-1)²+(z-1)² = [|(1×1+1×1+1×1 - 0)|/√3]²", "(x-1)²+(极-1)²+(z-1)² = [distance from (1,1,1) to line]²", "(x-1)²+(y-1)²+(z-1)² = [|(1-0)×1 + (1-0)×1 + (1-0)×1|/√3]²"],
    "answer": 2
  },
  {
    "question": "The equation of the sphere with center on the plane x=0 and passing through the points (1,1,1), (1,-1,1), (1,1,-1) is:",
    "options": ["x²+y²+z² - 2x = 0", "x²+y²+z² + 2x = 0", "x²+y²+z² - 2y = 0", "x²+y²+z² - 2z = 0"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere through the points (0,0,0), (1,1,0), (1,0,1), (0,1,1) and having the smallest possible radius is:",
    "options": ["x²+y²+z² - x - y - z = 0", "x²+y²+z² - x - y - z + 1/2 = 0", "x²+y²+z² - x - y - z + 1/4 = 0", "x²+y²+z² - x - y - z + 1 = 0"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere with center (1,2,3) and touching the sphere x²+y²+z²-2x-4y-6z+10=0 externally is:",
    "options": ["(x-1)²+(y-2)²+(z-3)² = [√(1+4+9-10) - √(1+4+9)]²", "(x-1)²+(y-2)²+(z-3)² = [√(1+4+9-10) + √(1+4+9)]²", "(x-1)²+(y-2)²+(z-3)² = [√(1+4+9) - √(1+4+9-10)]²", "(x-1)²+(y-2)²+(z-3)² = [√(1+4+9) + √(1+4+9-10)]²"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere through the circle x²+y²+z²=9, x+y+z=1 and with center on the line x/1 = y/2 = z/3 is:",
    "options": ["x²+y²+z²-9 + λ(x+y+z-1)=0 with center (-λ/2, -λ/2, -λ/2) satisfying (-λ/2)/1 = (-λ/2)/2 = (-λ/2)/3", "x²+y²+z²-9 = λ(x+y+z-1)", "(x²+y²+z²-9)(x+y+z-1)=0", "x²+y²+z² + λ(x+y+z-1)=9"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere with center (1,1,1) and cutting the plane x+y+z=1 in a circle of radius 1 is:",
    "options": ["(x-1)²+(y-1)²+(z-1)² = 极 + [|1+1+1-1|/√3]²", "(x-1)²+(y-1)²+(z-1)² = 1 + [|1+1+1-1|/√3]", "(x-1)²+(y-1)²+(z-1)² = 1 + [|1+1+1-1|/3]", "(x-1)²+(y-1)²+(z-1)² = 1 + [|1+1+1-1|/3]²"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere through the points (0,0,0), (a,0,0), (0,b,0), (0,0,c) and having the smallest possible radius is:",
    "options": ["x²+y²+z² - (a+b+c)(x+y+z)/3 = 0", "x²+y²+z² - (a+b+c)(x+y+z)/2 = 0", "x²+y²+z² - (a+b+c)(x+y+z) = 0", "x²+y²+z² - (a²+b²+c²)(x+y+z)/(a+b+c) = 0"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere with center on the line x=1, y=2 and passing through the points (0,0,0), (1,1,1) is:",
    "options": ["(x-1)²+(y-2)²+(z-3)² = 14", "(x-1)²+(y-2)²+(z-0)² = 5", "(x-1)²+(y-2)²+(z-1)² = 6", "(x-1)²+(y-2)²+(z-2)² = 9"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere through the circle x²+y²+z²+2x+4y+6z+11=0, x+y+z+3=0 and with center on the plane x=0 is:",
    "options": ["x²+y²+z²+2x+4y+6z+11 + λ(x+y+z+3)=0 with center (-1-λ/2, -2-λ/2, -3-λ/2) satisfying -1-λ/2=0", "x²+y²+z²+2x+4y+6z+11 = λ(x+y+z+3)", "(x²+y²+z²+2x+4y+6z+11)(x+y+z+3)=0", "x²+y²+z²+2x+4y+6z+11 + λ = x+y+z+3"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere with center (1,2,3) and touching the sphere x²+y²+z²-2x-4y-6z+10=0 internally is:",
    "options": ["(x-1)²+(y-2)²+(z-3)² = [√(1+4+9-10) - √(1+4+9)]²", "(x-1)²+(y-2)²+(z-3)² = [√(1+4+9-10) + √(1+4+9)]²", "(x-1)²+(y-2)²+(z-3)² = [√(1+4+9) - √(1+4+9-10)]²", "(x-1)²+(y-2)²+(z-3)² = [√(1+4+9) + √(1+4+9-10)]²"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere through the points (0,0,0), (1,0,0), (0,1,0), (0,0,1) and having the largest possible radius is:",
    "options": ["x²+y²+z² - x - y - z = 0", "x²+y²+z² - x - y - z + 1/2 = 0", "x²+y²+z² - x - y - z + 1/4 = 0", "x²+y²+z² - x - y - z + 1 = 0"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere with center (1,1,1) and cutting the sphere x²+y²+z²=3 orthogonally is:",
    "options": ["(x-1)²+(y-1)²+(z-1)² = 3 - 2(1×0+1×0+1×0) + 0", "(x-1)²+(y-1)²+(z-1)² = 3 - 2(1×0+1×0+1×0) - 0", "(x-1)²+(y-1)²+(z-1)² = 3 + 2(1×0+1×0+1×0) + 0", "(x-1)²+(y-1)²+(z-1)² = 3 + 2(1×0+1×0+1×0) - 0"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere through the circle x²+y²+z²=4, x+y+z=1 and with center on the line x/1 = y/1 = z/1 is:",
    "options": ["x²+y²+z²-4 + λ(x+y+z-1)=0 with center (-λ/2, -λ/2, -λ/2) satisfying -λ/2 = -λ/2 = -λ/2", "x²+y²+z²-4 = λ(x+y+z-1)", "(x²+y²+z²-4)(x+y+z-1)=0", "x²+y²+z² + λ(x+y+z-1)=4"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere with center (2,3,4) and touching the sphere x²+y²+z²-4x-6y-8z+4=0 externally is:",
    "options": ["(x-2)²+(y-3)²+(z-4)² = [√(4+9+16-4) - √(4+9+16)]²", "(x-2)²+(y-3)²+(z-4)² = [√(4+9+16-4) + √(4+9+16)]²", "(x-2)²+(y-3)²+(z-4)² = [√(4+9+16) - √(4+9+16-4)]²", "(x-2)²+(y-3)²+(z-4)² = [√(4+9+16) + √(4极9+16-4)]²"],
    "answer": 0
  },
  {
    "question": "The equation of the sphere through the points (0,0,0), (1,1,0), (1,0,1), (0,1,1) and having the largest possible radius is:",
    "options": ["x²+y²+z² - x - y - z = 0", "x²+y²+z² - x - y - z + 1/2 = 0", "x²+y²+z² - x - y - z + 1/4 = 0", "x²+y²+z² - x - y - z + 1 = 0"],
    "answer": 0
  },

{
"question": "The vector equation of a line passing through a point with position vector a and parallel to vector b is:",
"options": ["r = a + tb", "r = b + ta", "r · b = q", "(r - a) × b = 0"],
"answer": 0
},
{
"question": "The shortest distance between the skew lines r = a₁ + tb₁ and r = a₂ + sb₂ is given by:",
"options": ["|(a₂ - a₁) · (b₁ × b₂)| / |b₁ × b₂|", "|(a₂ - a极) × (b₁ × b₂)| / |b₁ × b₂|", "|(a₂ - a₁) · (b₁ × b₂)|", "|a₂ - a₁| / |b₁ × b₂|"],
"answer": 0
},
{
"question": "The condition for two lines r = a₁ + tb₁ and r = a₂ + sb₂ to be coplanar is:",
"options": ["(a₂ - a₁) · (b₁ × b₂) = 0", "(a₂ - a₁) × (b₁ × b₂) = 0", "b₁ · b₂ = 0", "a₁ · a₂ = 0"],
"answer": 0
},
{
"question": "The vector equation of a plane passing through a point with position vector a and parallel to vectors b and c is:",
"options": ["r = a + sb + tc", "r · (b × c) = a · (b × c)", "(r - a) · (b × c) = 0", "All of the above"],
"answer": 3
},
{
"question": "The Cartesian equation of a plane passing through (x₁, y₁, z₁) and perpendicular to a line with direction ratios (a, b, c) is:",
"options": ["a(x - x₁) + b(y - y₁) + c(z - z₁) = 0", "(x - x₁)/a = (y - y₁)/b = (z - z₁)/极", "ax + by + cz + d = 0", "a(x + x₁) + b(y + y₁) + c(z + z₁) = 0"],
"answer": 0
},
{
"question": "The distance from the point (x₁, y₁, z₁) to the plane ax + by + cz + d = 0 is:",
"options": ["|ax₁ + by₁ + cz₁ + d| / √(a² + b² + c²)", "|ax₁ + by₁ + cz₁| / √(a² + b² + c²)", "|ax₁ + by₁ + cz₁ + d|", "(ax₁ + by₁ + cz₁ +极) / √(a² + b² + c²)"],
"answer": 0
},
{
"question": "The angle between two planes a₁x + b₁y + c₁z + d₁ = 0 and a₂x + b₂y + c₂z + d₂ = 0 is given by the angle between their:",
"options": ["Normal vectors", "Direction vectors", "Lines of intersection", "Points of contact"],
"answer": 0
},
{
"question": "The equation of the plane passing through the intersection of the planes P₁: a₁x+b₁y+c₁z+d₁=极 and P₂: a₂x+b₂y+c₂z+d₂=0 is:",
"options": ["P₁ + kP₂ = 0", "P₁ - k极₂ = 0", "kP₁ + P₂ = 0", "Any of the above"],
"answer": 0
},
{
"question": "The condition for the line (x - x₁)/l = (y - y₁)/m = (z - z₁)/n to be parallel to the plane ax + by + cz + d = 0 is:",
"options": ["al + bm + cn = 0", "(x₁, y₁, z₁) satisfies the plane equation", "l/m = a/b", "l = a, m = b, n = c"],
"answer": 0
},
{
"question": "The condition for the line (x - x₁)/l = (y - y₁)/m = (z - z₁)/n to lie in the plane ax + by + cz + d = 0 is:",
"options": ["al + bm + cn = 0 and ax₁ + by₁ + cz₁ + d = 0", "al + bm + cn ≠ 0", "(x₁, y₁, z₁) is the origin", "l = m = n"],
"answer": 0
},
{
"question": "The image of the point (x₁, y₁, z₁) in the plane ax + by + cz + d = 0 is given by:",
"options": ["(x - 2aλ, y - 2bλ, z - 2cλ) where λ = (ax₁+by₁+cz₁+d)/(a²+b²+c²)", "(x + 2aλ, y + 2bλ, z + 2cλ) where λ = (ax₁+by₁+cz₁+d)/(a²+b²+c²)", "(x₁ - aλ, y₁ - bλ, z₁ - cλ) where λ = (ax₁+by₁+cz₁+d)/(a²+b²+c²)", "(x₁ + aλ, y₁ + bλ, z₁ + cλ) where λ = (ax₁+by₁+cz₁+d)/(a²+b²+c²)"],
"answer": 0
},
{
"question": "The distance between the parallel planes ax + by + cz + d₁ = 0 and ax + by + cz + d₂ = 0 is:",
"极options": ["|d₁ - d₂| / √(a² + b² + c²)", "|d₁ + d₂| / √(a² + b² + c²)", "|d极 - d₂|", "(d₁ - d₂) / √(a² + b² + c²)"],
"answer": 0
},
{
"question": "The equation of the sphere with center (a, b, c) and radius r is:",
"options": ["(x - a)² + (y - b)² + (z - c)² = r²", "x² + y² + z² + 2ax + 2by + 2cz + d = 0", "ax + by + cz = r²", "(x + a)² + (y + b)² + (z + c)² = r²"],
"answer": 0
},
{
"question": "The general equation of a sphere is x² + y² + z² + 2ux + 2vy + 2w极 + d = 0. Its center is:",
"options": ["(-u, -v, -w)", "(u, v, w)", "(-2u, -2v, -2w)", "(u/2, v/2, w/2)"],
"answer": 0
},
{
"question": "The radius of the sphere x² + y² + z² + 2ux + 2vy + 2wz + d = 0 is:",
"options": ["√(u² + v² + w² - d)", "√(u² + v² + w² + d)", "u² + v² + w² - d", "u² + v² + w² + d"],
"answer": 0
},
{
"question": "The equation of the sphere with (x₁, y₁, z₁) and (x₂, y₂, z₂) as endpoints of a diameter is:",
"options": ["(x - x₁)(x - x₂) + (y - y₁)(y - y₂) + (z - z₁)(z - z₂) = 0", "(x - x₁)² + (y - y₁)² + (z - z₁)² = (极 - x₂)² + (y - y₂)² + (z - z₂)²", "x² + y² + z² = x₁x₂ + y₁y₂ + z₁z₂", "(x - x₁)/(x₂ - x₁) = (y - y极)/(y₂ - y₁) = (z - z₁)/(z₂ - z₁)"],
"answer": 0
},
{
"question": "The angle between two lines with direction cosines (l₁, m₁, n₁) and (l₂, m₂, n₂) is given by:",
"options": ["cosθ = l₁l₂ + m₁m₂ + n₁n₂", "sinθ = √[(m₁n₂ - m₂n₁)² + (n₁l₂ - n₂l₁)² + (l₁m₂ - l₂m₁)²]", "tanθ = |(l₁l₂ + m₁m₂ + n₁n₂)| / √[(m₁n₂ - m₂n₁)² + (n₁l₂ - n₂l₁)² + (l₁m₂ - l₂m₁)²]", "Both a and b"],
"answer": 3
},
{
"question": "The direction ratios of the line of intersection of the planes a₁x+b₁y+c₁z+d₁=0 and a₂x+b₂y+c₂z+d₂=0 are proportional to:",
"options": ["(b₁c₂ - b₂c₁, c₁a₂ - c₂a₁, a₁b₂ - a₂b₁)", "(a₁a₂, b₁b₂, c₁c₂)", "(a₁ + a₂, b₁ + b₂, c₁ + c₂)", "(a₁ - a₂, b₁ - b₂, c₁ - c₂)"],
"answer": 0
},
{
"question": "The condition for the planes a₁x+b₁y+c₁z+d₁=0 and a₂x+b₂y+c₂z+d₂=0 to be perpendicular is:",
"options": ["a₁a₂ + b₁b₂ + c₁c₂ = 0", "a₁/a₂ = b₁/b₂ = c₁/c₂", "a₁a₂ = b₁b₂ = c₁c₂", "(a极 + a₂)(b₁ + b₂)(c₁ + c₂) = 0"],
"answer": 0
},
{
"question": "The distance between the parallel lines (x - x₁)/l = (y - y₁)/m = (z - z₁)/n and (x - x₂)/l = (y - y₂)/m = (z - z₂)/n is:",
"options": ["|(AB × b)| / |b| where A=(x₁,y₁,z₁), B=(x₂,y₂,z₂), b=(l,m,n)", "|AB · b| / |b|", "|AB|", "|AB| / |b|"],
"answer": 0
},
{
"question": "The equation of the plane containing the line (x - x₁)/l = (y - y₁)/m = (z - z₁)/n and parallel to another line with direction ratios (l₂, m₂, n₂) is:",
"options": ["|x - x₁ y - y₁ z - z₁| |l m n | = 0 |l₂ m₂ n₂ |", "l(x - x₁) + m(y - y₁) + n(z - z₁) = 0", "l₂(x - x₁) + m₂(y - y₁) + n₂(z - z₁) = 0", "(x - x₁)/l = (y - y₁)/m = (z - z₁)/n"],
"answer": 0
},
{
"question": "The equation of the plane through the point (x₁, y极, z₁) and perpendicular to the planes a₁x+b₁y+c₁z+d₁=0 and a₂x+b₂y+c₂z+d₂=0 is:",
"options": ["|x - x₁ y - y₁ z - z₁| |a₁ b₁ c₁ | = 0 |a₂ b₂ c₂ |", "a₁(x - x₁) + b₁(y - y₁) + c₁(z - z₁) = 0", "a₂(x - x₁) + b₂(y - y₁) + c₂(z - z₁) = 0", "(a₁ + a₂)(x - x₁) + (b₁ + b₂)(y - y₁) + (c₁ + c₂)(z - z₁) = 0"],
"answer": 0
},
{
"question": "The condition for the four points (x₁,y₁,z₁), (x₂,y₂,z₂), (x₃,y₃,z₃), (x₄,y₄,z₄) to be coplanar is that the volume of the tetrahedron formed by them is zero, which is given by the determinant:",
"options": ["|x₁ y₁ z₁ 1| |x₂ y₂ z₂ 1| |x₃ y₃ z₃ 1| |x₄ y₄ z₄ 1| = 0", "|x₁ y₁ z₁| |x₂ y₂ z₂| |x₃ y₃ z₃| = 0", "|x₁ - x₄, y₁ - y₄, z₁ - z₄| |x₂ - x₄, y₂ - y₄, z₂ - z₄| |x₃ - x₄, y₃ - y₄, z₃ - z₄| = 0", "All of the above"],
"answer": 3
},
{
"question": "The equation of the sphere passing through the circle x²+y²+z²+2ux+2vy+2wz+d=0, lx+my+nz=p is:",
"options": ["x²+y²+z²+2ux+2vy+2wz+d + λ(lx+my+nz-p)=0", "x²+y²+z²+2ux+2vy+2wz+d = λ(lx+my+nz-p)", "(x²+y²+z²+2ux+2vy+2wz+d)(lx+my+nz-p)=0", "x²+y²+z²+2ux+2vy+2wz+d + λ = lx+my+nz-p"],
"answer": 0
},
{
"question": "The angle between the line (x - x₁)/l = (y - y₁)/m = (z - z₁)/n and the plane ax + by + cz + d = 0 is given by:",
"options": ["sinφ = |al + bm + cn| / √(a²+b²+c²)√(l²+m²+n²)", "cosφ = |al + bm + cn| / √(a²+b²+c²)√(l²+m²+n²)", "tanφ = √(a²+b²+c²)√(l²+m²+n²) / |al + bm + cn|", "cotφ = |al + bm + cn| / √(a²+b²+c²)√(l²+m²+n²)"],
"answer": 0
},
{
"question": "The equation of the tangent plane to the sphere x²+y²+z²+2ux+2vy+2wz+d=0 at the point (x₁,y₁,z₁) is:",
"options": ["xx₁ + yy₁ + zz₁ + u(x+x₁) + v(y+y₁) + w(z+z₁) + d = 0", "xx₁ + yy₁ + zz₁ + u(x - x₁) + v(y - y₁) + w(z - z₁) + d = 0", "x² + y² + z² + 2ux + 2vy + 2w极 + d = xx₁ + yy₁ + zz₁", "(x - x₁)² + (y - y₁)² + (极 - z₁)² = r²"],
"answer": 0
},
{
"question": "The condition for the plane lx + my + nz = p to touch the sphere x²+y²+z²+2ux+2vy+2wz+d=0 is that the perpendicular distance from the center to the plane equals the radius, i.e.:",
"options": ["|(-u)l + (-v)m + (-w)n - p| / √(l²+m²+n²) = √(u²+v²+w² - d)", "|ul + vm + wn + p| / √(l²+m²+n²) = √(u²+v²+w² - d)", "|ul + vm + wn - p| / √(l²+m²+n²) = √(u²+v²+w² + d)", "|(-u)l + (-v)m + (-w)n + p| / √(l²+m²+n²) = √(u²+v²+w² + d)"],
"answer": 0
},
{
"question": "The equation of the sphere with center on the line x/1 = y/2 = z/3 and passing through the points (0,0,0) and (1,0,0) is:",
"options": ["x² + y² + z² - x = 0", "x² + y² + z² - y = 0", "x² + y² + z² - z = 0", "x² + y² + z² - x - y - z = 0"],
"answer": 2
},
{
"question": "The equation of the sphere concentric with x²+y²+z²-4x-6y-8z-4=0 and passing through (1,1,1) is:",
"options": ["x²+y²+z²-4x-6y-8z+6=0", "x²+y²+z²-4x-6y-8z-6=0", "x²+y²+z²-4x-6y-8z+4=0", "x²+y²+z²-4x-6y-8z-4=0"],
"answer": 0
},
{
"question": "The locus of a point which moves such that the ratio of its distances from two fixed points is constant is a:",
"options": ["Circle", "Plane", "Sphere", "None of these"],
"answer": 2
},
{
"question": "The equation of the sphere having the circle x²+y²+z²=9, x+y+z=1 as a great circle is:",
"options": ["x²+y²+z² - 9 + λ(x+y+z-1)=0", "x²+y²+z² - 9 = λ(x+y+z-1)", "(x²+y²+z²-9)(x+y+z-1)=0", "x²+y²+z² + λ(x+y+z-1)=9"],
"answer": 0
},
{
"question": "The equation of the sphere passing through the points (0,0,0), (1,0,0), (0,1,极), (0,0,1) is:",
"options": ["x²+y²+z² - x - y - z = 0", "x²+y²+z² + x + y + z = 0", "x²+y²+z² - xy - yz - zx = 0", "x²+y²+z² + xy + yz + zx = 0"],
"answer": 0
},
{
"question": "The equation of the sphere with center (1,2,3) and touching the plane 2x+3极+4z=5 is:",
"options": ["(x-1)²+(y-2)²+(z-3)² = |2(1)+3(2)+4(3)-5|² / (2²+3²+4²)", "(x-1)²+(y-2)²+(z-3)² = |2(1)+3(2)+4(3)-5| / √(2²+3²+4²)", "(x-1)²+(y-2)²+(z-3)² = [2(1)+3(2)+4(3)-5]² / (2²+3²+4²)", "(x-1)²+(y-2)²+(z-3)² = [2(1)+3(2)+4(3)-5] / (2²+3²+4²)"],
"answer": 0
},
{
"question": "The equation of the sphere through the circle x²+y²+z²=1, x+y+z=1 and the point (1,1,1) is:",
"options": ["x²+y²+z² - 1 + λ(x+y+z-1)=0 with λ determined by (1,1,1)", "x²+y²+z² - 1 = λ(x+y+z-1)", "(x²+y²+z²-1)(x+y+z-1)=0", "x²+y²+z² + λ(x+y+z-1)=1"],
"answer": 0
},
{
"question": "The equation of the sphere with center on the plane x+y+z=3 and passing through the points (1,0,0), (0,1,0), (0,0,1) is:",
"options": ["x²+y²+z² - x - y -极 = 0", "x²+y²+z极 - 2x - 2y - 2z + 2 = 0", "x²+y²+z² - 4x - 4y - 4z + 4 = 0", "x²+y²+z² - x - y - z + 1 = 0"],
"answer": 0
},
{
"question": "The equation of the sphere with center (2,3,4) and touching the x-axis is:",
"options": ["(x-2)²+(y-3)²+(z-4)² = 3²+4²", "(x-2)²+(y-3)²+(z-4)² = 2²", "(x-2)²+(y-3)²+(z-4)² = 4²", "(x-2)²+(y-3)²+(z-4)² = 5²"],
"answer": 0
},
{
"question": "The equation of the sphere with center on the z-axis and passing through the points (a,0,0), (0,b,0), (0,0,c) is:",
"options": ["x²+y²+z² - 2λz + (a²+b²+c²)/2 = 0", "x²+y²+z² - 2λz = 0", "x²+y²+z² - 2λz + λ² = a²+b²+c²", "x²+y²+z² - 2λz + λ² - (a²+b²+c²)/2 = 0"],
"answer": 0
},
{
"question": "The equation of the sphere passing through (1,1,1) and (2,2,2) and having the smallest possible radius is:",
"options": ["极²+y²+z² - 3x - 3y - 3z + 6 = 0", "x²+y²+z² - 3x - 3y - 3极 + 3 = 0", "x²+y²+z² - x - y - z = 0", "x²+y²+z² - 2x - 2y - 2z + 2 = 0"],
"answer": 0
},
{
"question": "The equation of the sphere with center (1,2,3) and cutting the plane x+y+z=1 in a circle of radius 2 is:",
"options": ["(x-1)²+(y-2)²+(z-3)极 = 4 + [|1+2+3-极|/√3]²", "(x-1)²+(y-2)²+(z-3)² = 4 + [|1+2+3-1|/√3]", "(x-1)²+(y-2)²+(z-3)² = 2 + [|1+2+3-1|/√3]²", "(x-1)²+(y-2)²+(z-3)² = 2 + [|1+2+3-1|/√3]"],
"answer": 0
},
{
"question": "The equation of the sphere with center (1,1,1) and touching the sphere x²+y²+z²-2x-4y-6z+10=0 externally is:",
"options": ["(x-1)²+(y-1)²+(z-1)² = [√(1+1+1-10) - 1]²", "(x-1)²+(y-1)²+(z-1)² = [√(1+4+9-10) - 1]²", "(x-1)²+(y-1)²+(z-1)² = [√(1+1+1-10) + 1]²", "(x-1)²+(y-1)²+(z-1)² = [√(1+4极9-10) + 1]²"],
"answer": 0
},
{
"question": "The equation of the sphere through the points (0,0,0), (a,0,0), (0,b,0), (0,0,c) is:",
"options": ["x²+y²+z² - ax - by - cz = 0", "x²+y²+z² + ax + by + cz = 0", "x²+y²+z² - (a+b+c)(x+y+z) = 极", "x²+y²+z² + (a+b+c)(x+y+z) = 0"],
"answer": 0
},
{
"question": "The equation of the sphere with center (1,2,3) and touching the line (x-0)/1 = (y-0)/1 = (z-0)/1 is:",
"options": ["(x-1)²+(y-2)²+(z-3)² = [|(1×1+2×1+3×1)|/√3]²", "(x-1)²+(y-2)²+(z-3)² = [|(1×1+2×1+3×1 - 0)|/√3]²", "(x-1)²+(y-2)²+(z-3)² = [distance from (1,2,3) to line]²", "(x-1)²+(y-2)²+(z-3)² = [|(1-0)×1 + (2-0)×1 + (3-0)×1|/√3]²"],
"answer": 2
},
{
"question": "The equation of the sphere with center on the line x/1 = y/2 = z/3 and radius √14 which touches the plane x+y+z=3 is:",
"options": ["(x-1)²+(y-2)²+(z-3)² = 14", "(x-2)²+(y-4)²+(z-6)² = 14", "(x-1)²+(y-2)²+(z-3)² = 14 and (x+1)²+(y+2)²+(z+3)² = 14", "(x-2)²+(y-4)²+(z-6)² = 14 and (x+2)²+(y+4)²+(z+6)² = 14"],
"answer": 0
},
{
"question": "The equation of the sphere passing through the points (1,0,0), (0,1,0), (0,0,1) and having the smallest possible radius is:",
"options": ["x²+y²+z² - x - y - z = 0", "x²+y²+z² - x - y - z + 1/2 = 0", "x²+y²+z² - x - y - z + 1/4 = 0", "x²+y²+z² - x - y - z + 1 = 0"],
"answer": 0
},
{
"question": "The equation of the sphere with center (1,1,1) and intersecting the sphere x²+y²+z²+2x+4y+6z+10=0 orthogonally is:",
"options": ["(x-1)²+(y-1)²+(z-1)² = 3 + 2(1)(-1) + 2(1)(-2) + 2(1)(-3) - 10", "(x-1)²+(y-1)²+(z-1)² = 3 - 2(1)(1) - 2(1)(2) - 2(1)(3) + 10", "(x-1)²+(y-1)²+(z-1)² = 3 + 2(1)(1) + 2(1)(2) + 2(1)(3) - 10", "(x-1)²+(y-1)²+(z-1)² = 3 - 2(1)(-1) - 2(1)(-2) - 2(1)(-3) + 10"],
"answer": 0
},
{
"question": "The equation of the sphere through the circle x²+y²+z²=4, x+y+z=1 and with center on the plane x+y+z=0 is:",
"options": ["x²+y²+z² - 4 + λ(x+y+z-1)=0 with center (-λ/2, -λ/2, -λ/2) satisfying -λ/2 -λ/2 -λ/2=0", "x²+y²+z² - 4 = λ(x+y+z-1)", "(x²+y²+z²-4)(极+y+z-1)=0", "x²+y²+z² + λ(x+y+z-1)=4"],
"answer": 0
},
{
"question": "极 equation of the sphere with center (2,3,4) and touching the sphere x²+y²+z²-4x-6y-8z+4=0 internally is:",
"options": ["(x-2)²+(y-3)²+(z-4)² = [√(4极9+16-4) - √(4+9+16)]²", "(x-2)²+(y-3)²+(z-4)² = [√(4+9+16-4) + √(4+9+16)]²", "(x-2)²+(y-3)²+(z-4)² = [√(4+9+16) - √(4+9+16-4)]²", "(x-2)²+(y-3)²+(z-4)² = [√(4+9+16) + √(4+9+16-4)]²"],
"answer": 0
},
{
"question": "The equation of the sphere with center on the line x=2y=3z and passing through the points (0,0,0) and (1,1,1) is:",
"options": ["x²+y²+z² - (6/7)(x+2y+3z)=0", "x²+y²+z² - (6/7)(x+2y+3z)=1", "x²+y²+z² - (7/6)(x+2y+3z)=0", "x²+y²+z² - (7/6)(x+2y+3z)=1"],
"answer": 0
},
{
"question": "The equation of the sphere through the points (0,0,0), (1,1,0), (1,0,1), (0,1,1) is:",
"options": ["x²+y²+z² - x - y - z = 0", "x²+y²+z² - x - y - z + 1 = 0", "x²+y²+z² - xy - yz - zx = 0", "x²+y²+z² + xy + yz + zx = 0"],
"answer": 0
},
{
"question": "The equation of the sphere with center (1,2,3) and cutting the sphere x²+y²+z²=14 orthogonally is:",
"options": ["(x-1)²+(y-2)²+(z-3)² = 14 - 2(1×0+2×0+3×0) + 0", "(x-1)²+(y-2)²+(z-3)² = 14 - 2(1×0+2×0+3×0) - 0", "(x-1)²+(y-2)²+(z-3)² = 14 + 2(1×0+2×0+3×0) + 0", "(x-1)²+(y-2)²+(z-3)² = 14 + 2(1×0+2×0+3×0) - 0"],
"answer": 0
},
{
"question": "The equation of the sphere through the circle x²+y²+z²+2x+4y+6z+11=0, x+y+z+3=0 and the point (1,1,1) is:",
"options": ["x²+y²+z²+2x+4y+6z+11 + λ(x+y+z+3)=0 with λ from (1,1,1)", "x²+y²+z²+2x+4y+6z+11 = λ(x+y+z+3)", "(x²+y²+z²+2x+4y+6z+11)(x+y+z+3)=0", "x²+y²+z²+2x+4y+6z+11 + λ = x+y+z+3"],
"answer": 0
},
{
"question": "The equation of the sphere with center (1,1,1) and radius equal to the distance from (1,1,1) to the line (x-0)/1 = (y-0)/1 = (z-0)/1 is:",
"options": ["(x-1)²+(y-1)²+(z-1)² = [|(1×1+1×1+1×1)|/√3]²", "(x-1)²+(y-1)²+(z-1)² = [|(1×1+1×1+1×1 - 0)|/√3]²", "(x-1)²+(y-1)²+(z-1)² = [distance from (1,1,1) to line]²", "(x-1)²+(y-1)²+(z-1)² = [|(1-0)×1 + (1-0)×1 + (1-0)×1|/√3]²"],
"answer": 2
},
{
"question": "The equation of the sphere with center on the plane x=0 and passing through the points (1,1,1), (1,-1,1), (1,1,-1) is:",
"options": ["x²+y²+z² - 2x = 0", "x²+y²+z² + 2x = 0", "x²+y²+z² - 2y = 0", "x²+y²+z² - 2z = 0"],
"answer": 0
},
{
"question": "The equation of the sphere through the points (0,0,0), (1,1,0), (1,0,1), (0,1,1) and having the smallest possible radius is:",
"options": ["x²+y²+z² - x - y - z = 0", "x²+y²+z² - x - y - z + 1/2 = 0", "x²+y²+z² - x - y - z + 1/极 = 0", "x²+y²+z² - x - y - z + 1 = 0"],
"answer": 0
},
{
"question": "The equation of the sphere with center (1,2,3) and touching the sphere x²+y²+z²-2x-4y-6z+10=0 externally is:",
"options": ["(x-1)²+(y-2)²+(z-3)² = [√(1+4+9-10) - √(1+4+9)]²", "(x-1)²+(y-2)²+(z-3)² = [√(1+4+9-10) + √(1+4+9)]²", "(x-1)²+(y-2)²+(z-3)² = [√(1+4+9) - √(1+4+9-10)]²", "(x-1)²+(y-2)²+(z-3)² = [√(1+4+9) + √(1+4+9-10)]²"],
"answer": 0
},
{
"question": "The equation of the sphere through the circle x²+y²+z²=9, x+y+z=1 and with center on the line x/1 = y/2 = z/3 is:",
"options": ["x²+y²+z²-9 + λ(x+y+z-1)=0 with center (-λ/2, -λ/2, -λ/2) satisfying (-λ/2)/1 = (-λ/2)/2 = (-λ/2)/3", "x²+y²+z²-9 = λ(x+y+z-1)", "(x²+y²+z²-9)(x+y+z-1)=0", "x²+y²+z² + λ(x+y+z-1)=9"],
"answer": 0
},
{
"question": "The equation of the sphere with center (1,1,1) and cutting the plane x+y+z=1 in a circle of radius 1 is:",
"options": ["(x-1)²+(y-1)²+(z-1)² = 1 + [|1+1+1-1|/√3]²", "(x-1)²+(y-1)²+(z-1)² = 1 + [|1+1+1-1|/√3]", "(x-1)²+(y-1)²+(z-1)² = 1 + [|1+1+1-1|/3]", "(x-1)²+(y-1)²+(z-1)² = 1 + [|1+1+1-1|/3]²"],
"answer": 0
},
{
"question": "The equation of the sphere through the points (0,0,0), (a,0,0), (0,b,0), (0,0,c) and having the smallest possible radius is:",
"options": ["x²+y²+z² - (a+b+c)(x+y+z)/3 = 0", "x²+y²+z² - (a+b+c)(x+y+z)/2 = 0", "x²+y²+z² - (a+b+c)(x+y+z) = 0", "x²+y²+z² - (a²+b²+c²)(x+y+z)/(a+b+c) = 0"],
"answer": 0
},
{
"question": "The equation of the sphere with center on the line x=1, y=2 and passing through the points (0,0,0), (1,1,1) is:",
"options": ["(x-1)²+(y-2)²+(z-3)² = 14", "(x-1)²+(y-2)²+(z-0)² = 5", "(x-1)²+(y-2)²+(z-1)² = 6", "(x-1)²+(y-2)²+(z-2)² = 9"],
"answer": 0
},
{
"question": "The equation of the sphere through the circle x²+y²+z²+2x+4y+6z+11=0,极+y+z+3=0 and with center on the plane x=极 is:",
"options": ["x²+y²+z²+2x+4y+6z+11 + λ(x+y+z+3)=0 with center (-1-λ/2, -2-λ/2, -3-λ/2) satisfying -1-λ/2=0", "x²+y²+z²+2x+4y+6z+11 = λ(x+y+z+3)", "(x²+y²+z²+2x+4y+6z+11)(x+y+z+3)=0", "x²+y²+z²+2x+4y+极z+11 + λ = x+y+z+3"],
"answer": 0
},
{
"question": "The equation of the sphere with center (1,2,3) and touching the sphere x²+y²+z²-2x-4y-6z+10=0 internally is:",
"options": ["(x-1)²+(y-2)²+(z-3)² = [√(1+4+9-10) - √(1+4+9)]²", "(x-1)²+(y-2)²+(z-3)² = [√(1+4+9-10) + √(1+4+9)]²", "(x-1)²+(y-2)²+(z-3)² = [√(1+4+9) - √(1+4+9-10)]²", "(x-1)²+(y-2)²+(z-3)² = [√(1+4+9) + √(1+4+9-10)]²"],
"answer": 0
},
{
"question": "The equation of the sphere through the points (0,0,0), (1,0,0), (0,1,0), (0,0,1) and having the largest possible radius is:",
"options": ["x²+y²+z² - x - y - z = 0", "x²+y²+z² - x - y - z + 1/2 = 0", "x²+y²+z² - x - y - z + 1/4 = 0", "x²+y²+z² - x - y - z + 1 = 0"],
"answer": 0
},
{
"question": "The equation of the sphere with center (1,1,1) and cutting the sphere x²+y²+z²=3 orthogonally is:",
"options": ["(x-1)²+(y-1)²+(z-1)² = 3 - 2(1×0+1×0+1×0) + 0", "(x-1)²+(y-1)²+(z-1)² = 3 - 2(1×0+1×0+1×0) - 0", "(x-1)²+(y-1)²+(z-1)² = 3 + 2(1×0+1×0+1×极) + 0", "(x-1)²+(y-1)²+(z-1)² = 3 + 2(1×0+1×0+1×0) - 0"],
"answer": 0
},
{
"question": "The equation of the sphere through the circle x²+y²+z²=4, x+y+z=1 and with center on the line x/1 = y/1 = z/1 is:",
"options": ["x²+y²+z²-4 + λ(x+y+z-1)=0 with center (-λ/2, -λ/2, -λ/2) satisfying -λ/2 = -λ/2 = -λ/2", "x²+y²+z²-4 = λ(x+y+z-1)", "(x²+y²+z²-4)(x+y+z-1)=0", "x²+y²+z² + λ(x+y+z-1)=4"],
"answer": 0
},
{
"question": "The equation of the sphere with center (2,3,4) and touching the sphere x²+y²+z²-4x-6y-8z+4=0 externally is:",
"options": ["(x-2)²+(y-3)²+(z-4)² = [√(4+9+16-4) - √(4+9+16)]²", "(x-2)²+(y-3)²+(z-4)² = [√(4+9+16-4) + √(4+9+16)]²", "(x-2)²+(y-3)²+(z-4)² = [√(4+9+16) - √(4+9+16-4)]²", "(x-2)²+(y-3)²+(z-4)² = [√(4+9+16) + √(4+9+16-4)]²"],
"answer": 0
},
{
"question": "The equation of the sphere through the points (0,0,0), (1,1,0), (1,0,1), (0,极,1) and having the largest possible radius is:",
"options": ["x²+y²+z² - x - y - z = 0", "x²+y²+z² - x - y - z + 1/2 = 0", "x²+y²+z² - x - y - z + 1/4 = 0", "x²+y²+z² - x - y - z + 1 = 0"],
"answer": 0
},

  {
    "question": "In the Cartesian coordinate system, the point P(-5, 2) is located in which quadrant?",
    "options": [
      "First",
      "Second",
      "Third",
      "Fourth"
    ],
    "answer": 1
  },
  {
    "question": "The distance between points A(4, -7) and B(-1, 5) is:",
    "options": [
      "13",
      "17",
      "15",
      "12"
    ],
    "answer": 0
  },
  {
    "question": "The coordinates of the point which divides the line joining (8, 9) and (-7, 4) internally in the ratio 2:3 are:",
    "options": [
      "(2, 7)",
      "(1, 5)",
      "(3, 6)",
      "(4, 8)"
    ],
    "answer": 0
  },
  {
    "question": "The midpoint of the line segment joining A(0, 0) and B(8, -5) is:",
    "options": [
      "(8, -5)",
      "(4, -2.5)",
      "(0, 0)",
      "(4, 5)"
    ],
    "answer": 1
  },
  {
    "question": "The area of a triangle with vertices A(2, 4), B(-4, -6), C(6, 0) is:",
    "options": [
      "25 square units",
      "30 square units",
      "35 square units",
      "40 square units"
    ],
    "answer": 1
  },
  {
    "question": "Points are said to be collinear if:",
    "options": [
      "They form a right-angled triangle",
      "The area of the triangle formed by them is zero",
      "Their distances are equal",
      "They lie on the x-axis"
    ],
    "answer": 1
  },
  {
    "question": "The gradient (slope) of the line passing through A(-5, 2) and B(3, 7) is:",
    "options": [
      "5/8",
      "8/5",
      "3/2",
      "2/3"
    ],
    "answer": 0
  },
  {
    "question": "The gradient of a line that makes an angle of 60° with the positive x-axis is:",
    "options": [
      "1/√3",
      "√3",
      "1",
      "0"
    ],
    "answer": 1
  },
  {
    "question": "If two lines are parallel, then their slopes m1 and m2 are:",
    "options": [
      "m1 * m2 = -1",
      "m1 = m2",
      "m1 = 1/m2",
      "m1 + m2 = 0"
    ],
    "answer": 1
  },
  {
    "question": "If two lines are perpendicular, the relationship between their slopes m1 and m2 is:",
    "options": [
      "m1 = m2",
      "m1 = -1/m2",
      "m1 + m2 = 1",
      "m1 * m2 = 1"
    ],
    "answer": 1
  },
  {
    "question": "In polar coordinates, the point (r, θ) is equivalent to:",
    "options": [
      "(r, θ + 360°)",
      "(-r, θ)",
      "(r, -θ)",
      "All of the above can represent the same point"
    ],
    "answer": 3
  },
  {
    "question": "The polar coordinates (r, θ) are related to rectangular coordinates (x, y) by:",
    "options": [
      "x = r cosθ, y = r sinθ",
      "x = r sinθ, y = r cosθ",
      "r = x + y, θ = tan(x/y)",
      "r = xy, θ = sin(x/y)"
    ],
    "answer": 0
  },
  {
    "question": "The rectangular coordinates of the polar point (3, 135°) are:",
    "options": [
      "(3√2/2, 3√2/2)",
      "(-3√2/2, 3√2/2)",
      "(3/2, -3/2)",
      "(0, 3)"
    ],
    "answer": 1
  },
  {
    "question": "A Cartesian equation is any equation of the form:",
    "options": [
      "r = f(θ)",
      "y = f(x)",
      "f(x, y) = 0",
      "Both b and c"
    ],
    "answer": 3
  },
  {
    "question": "To convert the Cartesian equation x² + y² = 9 to a polar equation, we get:",
    "options": [
      "r = 9",
      "r = 3",
      "r² = 9",
      "θ = 9"
    ],
    "answer": 2
  },
  {
    "question": "Parametric equations define a curve using:",
    "options": [
      "A single equation in x and y",
      "A third variable called a parameter",
      "Only polar coordinates",
      "The gradient of the tangent"
    ],
    "answer": 1
  },
  {
    "question": "The Cartesian equation of the curve defined by x = 3cos t, y = 3sin t is:",
    "options": [
      "y = x²",
      "x² + y² = 9",
      "x² - y² = 9",
      "y = 3x"
    ],
    "answer": 1
  },
  {
    "question": "The equation of a straight line with gradient 2 and y-intercept -5 is:",
    "options": [
      "y = -5x + 2",
      "y = 2x - 5",
      "2y = x - 5",
      "y = 5x - 2"
    ],
    "answer": 1
  },
  {
    "question": "The equation of the line passing through points (-2, -1) and (3, 4) is:",
    "options": [
      "y = x + 1",
      "y = x - 1",
      "y = -x + 1",
      "y = 2x + 3"
    ],
    "answer": 0
  },
  {
    "question": "The intercept form of a line cutting axes at (a, 0) and (0, b) is:",
    "options": [
      "y = mx + c",
      "x/a + y/b = 1",
      "(y - y1) = m(x - x1)",
      "Ax + By + C = 0"
    ],
    "answer": 1
  },
  {
    "question": "The distance from the point (2, 1) to the line 3x + 4y - 5 = 0 is:",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 0
  },
  {
    "question": "The gradient of the tangent to the curve y = (1-x)(2+x) at x=2 is:",
    "options": [
      "-5",
      "5",
      "-3",
      "0"
    ],
    "answer": 0
  },
  {
    "question": "A circle is defined as the locus of points that are:",
    "options": [
      "Equidistant from two fixed points",
      "At a constant distance from a fixed point",
      "At a constant ratio of distance from a fixed point and line",
      "The sum of distances to two points is constant"
    ],
    "answer": 1
  },
  {
    "question": "The equation of a circle with center (5, -2) and radius 2 is:",
    "options": [
      "(x-5)² + (y+2)² = 4",
      "(x+5)² + (y-2)² = 4",
      "(x-5)² + (y+2)² = 2",
      "x² + y² = 25"
    ],
    "answer": 0
  },
  {
    "question": "The general form of the equation of a circle is:",
    "options": [
      "x² + y² = r²",
      "(x-h)² + (y-k)² = r²",
      "x² + y² + 2gx + 2fy + c = 0",
      "Ax + By + C = 0"
    ],
    "answer": 2
  },
  {
    "question": "A parabola is the locus of points that are:",
    "options": [
      "Equidistant from a fixed point and a fixed line",
      "The sum of distances to two points is constant",
      "The difference of distances to two points is constant",
      "At a constant distance from a fixed point"
    ],
    "answer": 0
  },
  {
    "question": "For the parabola y² = 12x, the focus is at:",
    "options": [
      "(3, 0)",
      "(0, 3)",
      "(-3, 0)",
      "(0, -3)"
    ],
    "answer": 0
  },
  {
    "question": "The directrix of the parabola y² = -12x is:",
    "options": [
      "x = 3",
      "x = -3",
      "y = 3",
      "y = -3"
    ],
    "answer": 0
  },
  {
    "question": "An ellipse is the locus of points where the __________ of distances to two fixed points (foci) is constant.",
    "options": [
      "sum",
      "difference",
      "product",
      "ratio"
    ],
    "answer": 0
  },
  {
    "question": "For the ellipse x²/25 + y²/9 = 1, the length of the semi-major axis is:",
    "options": [
      "3",
      "5",
      "4",
      "6"
    ],
    "answer": 1
  },
  {
    "question": "A hyperbola is the locus of points where the __________ of distances to two fixed points (foci) is constant.",
    "options": [
      "sum",
      "difference",
      "product",
      "ratio"
    ],
    "answer": 1
  },
  {
    "question": "A quantity that has both magnitude and direction is called a:",
    "options": [
      "Scalar",
      "Vector",
      "Tensor",
      "Unit"
    ],
    "answer": 1
  },
  {
    "question": "The magnitude of the vector a = (3, -4) is:",
    "options": [
      "7",
      "1",
      "5",
      "12"
    ],
    "answer": 2
  },
  {
    "question": "Two vectors are equal if they have the same:",
    "options": [
      "Magnitude only",
      "Direction only",
      "Both magnitude and direction",
      "Initial point"
    ],
    "answer": 2
  },
  {
    "question": "For vectors a = (2, 1) and b = (3, -2), the resultant a + b is:",
    "options": [
      "(5, -1)",
      "(-1, 3)",
      "(6, -2)",
      "(5, 3)"
    ],
    "answer": 0
  },
  {
    "question": "A vector with magnitude zero is called the:",
    "options": [
      "Unit vector",
      "Position vector",
      "Null vector",
      "Negative vector"
    ],
    "answer": 2
  },
  {
    "question": "The unit vector in the direction of a = (3, -4) is:",
    "options": [
      "(3, -4)",
      "(1, 1)",
      "(3/5, -4/5)",
      "(5, 5)"
    ],
    "answer": 2
  },
  {
    "question": "A matrix is a:",
    "options": [
      "Set of numbers",
      "Rectangular array of numbers",
      "Solution to equations",
      "Type of vector"
    ],
    "answer": 1
  },
  {
    "question": "A matrix with an equal number of rows and columns is called a:",
    "options": [
      "Row matrix",
      "Column matrix",
      "Square matrix",
      "Diagonal matrix"
    ],
    "answer": 2
  },
  {
    "question": "The matrix [1 0; 0 1] is an example of a(n):",
    "options": [
      "Identity matrix",
      "Zero matrix",
      "Scalar matrix",
      "Diagonal matrix"
    ],
    "answer": 0
  },
  {
    "question": "For matrices to be added or subtracted, they must be:",
    "options": [
      "Square",
      "Of the same order",
      "Invertible",
      "Symmetric"
    ],
    "answer": 1
  },
  {
    "question": "Matrix multiplication is:",
    "options": [
      "Always commutative (AB = BA)",
      "Never commutative",
      "Not necessarily commutative",
      "Only commutative for square matrices"
    ],
    "answer": 2
  },
  {
    "question": "The determinant of the matrix A = [4 3; 2 2] is:",
    "options": [
      "2",
      "14",
      "8",
      "6"
    ],
    "answer": 0
  },
  {
    "question": "A matrix whose determinant is zero is called:",
    "options": [
      "Identity",
      "Singular",
      "Non-singular",
      "Symmetric"
    ],
    "answer": 1
  },
  {
    "question": "The method that uses determinants to solve a system of linear equations is called:",
    "options": [
      "Gauss elimination",
      "Matrix inversion",
      "Cramer's rule",
      "Gaussian Jordan"
    ],
    "answer": 2
  },
  {
    "question": "The process of solving a system by transforming the augmented matrix into reduced row-echelon form is:",
    "options": [
      "Cramer's rule",
      "Gauss-Jordan elimination",
      "Matrix addition",
      "Finding the adjoint"
    ],
    "answer": 1
  },
  {
    "question": "The point (-2, 3) lies in which quadrant?",
    "options": [
      "I",
      "II",
      "III",
      "IV"
    ],
    "answer": 1
  },
  {
    "question": "The distance between points (1, 2) and (4, 6) is:",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": 0
  },
  {
    "question": "The midpoint between ( -3, 5) and (7, -1) is:",
    "options": [
      "(2, 2)",
      "(4, 4)",
      "(5, 2)",
      "(2, 4)"
    ],
    "answer": 0
  },
  {
    "question": "The gradient of the line joining (1, 1) and (4, 13) is:",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": 1
  },
  {
    "question": "What is the distance between the points (3, -2) and (-1, 5)?",
    "options": [
      "5",
      "√65",
      "8",
      "7"
    ],
    "answer": 1
  },
  {
    "question": "The point that divides the line joining (2, 3) and (5, 7) internally in the ratio 1:2 is:",
    "options": [
      "(3, 13/3)",
      "(4, 5)",
      "(3, 4)",
      "(4, 17/3)"
    ],
    "answer": 0
  },
  {
    "question": "The area of the triangle with vertices (0, 0), (4, 0), and (0, 3) is:",
    "options": [
      "6",
      "12",
      "7.5",
      "5"
    ],
    "answer": 0
  },
  {
    "question": "The points (1, 2), (3, 4), and (5, 6) are:",
    "options": [
      "Collinear",
      "Not collinear",
      "Vertices of a right triangle",
      "Vertices of an equilateral triangle"
    ],
    "answer": 0
  },
  {
    "question": "The gradient of the line passing through (4, 1) and (6, 5) is:",
    "options": [
      "2",
      "3",
      "4",
      "1"
    ],
    "answer": 0
  },
  {
    "question": "The angle between two lines with slopes m1 = 1 and m2 = -1 is:",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2
  },
  {
    "question": "If two lines are perpendicular and one has slope 2, the other has slope:",
    "options": [
      "2",
      "-2",
      "1/2",
      "-1/2"
    ],
    "answer": 3
  },
  {
    "question": "The polar coordinates (5, 30°) correspond to Cartesian coordinates:",
    "options": [
      "(5√3/2, 5/2)",
      "(5/2, 5√3/2)",
      "(5, 5)",
      "(0, 5)"
    ],
    "answer": 0
  },
  {
    "question": "The Cartesian point (0, -4) in polar coordinates is:",
    "options": [
      "(4, 90°)",
      "(4, 270°)",
      "(4, 0°)",
      "(4, 180°)"
    ],
    "answer": 1
  },
  {
    "question": "The polar equation r = 4 represents:",
    "options": [
      "A circle of radius 4",
      "A line",
      "A point",
      "A parabola"
    ],
    "answer": 0
  },
  {
    "question": "The parametric equations x = t, y = t^2 represent:",
    "options": [
      "A line",
      "A circle",
      "A parabola",
      "An ellipse"
    ],
    "answer": 2
  },
  {
    "question": "The Cartesian equation for x = 2cos t, y = 2sin t is:",
    "options": [
      "x^2 + y^2 = 4",
      "x^2 - y^2 = 4",
      "y = x^2",
      "x = y^2"
    ],
    "answer": 0
  },
  {
    "question": "The equation of the line with slope -2 and y-intercept 3 is:",
    "options": [
      "y = 2x + 3",
      "y = -2x + 3",
      "2x + y = 3",
      "x - 2y = 3"
    ],
    "answer": 1
  },
  {
    "question": "The equation of the line passing through (1, -1) and (3, 5) is:",
    "options": [
      "y = 3x - 4",
      "y = 2x - 3",
      "y = 4x - 5",
      "y = 3x + 2"
    ],
    "answer": 0
  },
  {
    "question": "The intercept form of the line that cuts the x-axis at 3 and the y-axis at 4 is:",
    "options": [
      "x/3 + y/4 = 1",
      "4x + 3y = 12",
      "3x + 4y = 12",
      "x/4 + y/3 = 1"
    ],
    "answer": 0
  },
  {
    "question": "The distance from the point (2, 1) to the line 3x + 4y - 5 = 0 is:",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 0
  },
  {
    "question": "The gradient of the tangent to the curve y = x^2 at x = 2 is:",
    "options": [
      "2",
      "4",
      "1",
      "0"
    ],
    "answer": 1
  },
  {
    "question": "The equation of the tangent to the curve y = x^2 at the point (2, 4) is:",
    "options": [
      "y = 4x - 4",
      "y = 2x - 4",
      "y = 4x + 4",
      "y = 2x + 4"
    ],
    "answer": 0
  },
  {
    "question": "The center of the circle x^2 + y^2 - 6x + 4y - 12 = 0 is:",
    "options": [
      "(3, -2)",
      "(-3, 2)",
      "(3, 2)",
      "(-3, -2)"
    ],
    "answer": 0
  },
  {
    "question": "The radius of the circle x^2 + y^2 + 8x - 6y = 0 is:",
    "options": [
      "5",
      "10",
      "25",
      "100"
    ],
    "answer": 0
  },
  {
    "question": "The focus of the parabola y^2 = 16x is:",
    "options": [
      "(4, 0)",
      "(0, 4)",
      "(-4, 0)",
      "(0, -4)"
    ],
    "answer": 0
  },
  {
    "question": "The directrix of the parabola x^2 = -12y is:",
    "options": [
      "y = 3",
      "y = -3",
      "x = 3",
      "x = -3"
    ],
    "answer": 0
  },
  {
    "question": "For the ellipse x^2/16 + y^2/9 = 1, the length of the major axis is:",
    "options": [
      "6",
      "8",
      "4",
      "3"
    ],
    "answer": 1
  },
  {
    "question": "The foci of the ellipse x^2/25 + y^2/16 = 1 are at:",
    "options": [
      "(±3, 0)",
      "(0, ±3)",
      "(±5, 0)",
      "(0, ±5)"
    ],
    "answer": 0
  },
  {
    "question": "The equation of a hyperbola with foci (±5, 0) and vertices (±3, 0) is:",
    "options": [
      "x^2/9 - y^2/16 = 1",
      "x^2/16 - y^2/9 = 1",
      "y^2/9 - x^2/16 = 1",
      "x^2/25 - y^2/16 = 1"
    ],
    "answer": 0
  },
  {
    "question": "The magnitude of the vector a = (6, 8) is:",
    "options": [
      "10",
      "14",
      "48",
      "100"
    ],
    "answer": 0
  },
  {
    "question": "If a = (2, 3) and b = (4, 1), then a - b is:",
    "options": [
      "(6, 4)",
      "(-2, 2)",
      "(2, -2)",
      "(-2, -2)"
    ],
    "answer": 1
  },
  {
    "question": "The unit vector in the direction of (1, 1) is:",
    "options": [
      "(1, 1)",
      "(0.5, 0.5)",
      "(1/√2, 1/√2)",
      "(2, 2)"
    ],
    "answer": 2
  },
  {
    "question": "Two vectors are parallel if:",
    "options": [
      "Their dot product is zero",
      "They have the same direction",
      "One is a scalar multiple of the other",
      "Both b and c"
    ],
    "answer": 3
  },
  {
    "question": "The dot product of (2, 3) and (4, 5) is:",
    "options": [
      "10",
      "23",
      "22",
      "40"
    ],
    "answer": 2
  },
  {
    "question": "A matrix with only one row is called a:",
    "options": [
      "Column matrix",
      "Row matrix",
      "Square matrix",
      "Diagonal matrix"
    ],
    "answer": 1
  },
  {
    "question": "The identity matrix of order 3 has:",
    "options": [
      "All elements 1",
      "1s on the diagonal and 0s elsewhere",
      "0s on the diagonal and 1s elsewhere",
      "All elements 0"
    ],
    "answer": 1
  },
  {
    "question": "If A = [1 2; 3 4] and B = [5 6; 7 8], then A + B is:",
    "options": [
      "[6 8; 10 12]",
      "[5 12; 21 32]",
      "[6 10; 8 12]",
      "[1 5; 3 7]"
    ],
    "answer": 0
  },
  {
    "question": "The product of A = [1 2; 3 4] and B = [2 0; 1 2] is:",
    "options": [
      "[4 4; 10 8]",
      "[2 0; 3 8]",
      "[4 0; 10 16]",
      "[3 2; 7 4]"
    ],
    "answer": 0
  },
  {
    "question": "The transpose of the matrix [1 2 3; 4 5 6] is:",
    "options": [
      "[1 4; 2 5; 3 6]",
      "[1 2 3; 4 5 6]",
      "[1 3; 4 6]",
      "[1 4 2; 5 3 6]"
    ],
    "answer": 0
  },
  {
    "question": "The determinant of the matrix [3 1; 2 4] is:",
    "options": [
      "10",
      "14",
      "12",
      "5"
    ],
    "answer": 0
  },
  {
    "question": "The matrix [2 4; 1 2] is singular because its determinant is:",
    "options": [
      "0",
      "4",
      "8",
      "2"
    ],
    "answer": 0
  },
  {
    "question": "The adjoint of the matrix [a b; c d] is:",
    "options": [
      "[d -b; -c a]",
      "[a c; b d]",
      "[d b; c a]",
      "[a -b; -c d]"
    ],
    "answer": 0
  },
  {
    "question": "The inverse of the matrix [2 0; 0 2] is:",
    "options": [
      "[0.5 0; 0 0.5]",
      "[2 0; 0 2]",
      "[1 0; 0 1]",
      "[0 2; 2 0]"
    ],
    "answer": 0
  },
  {
    "question": "To solve a system of equations using Cramer's rule, the determinant of the coefficient matrix must be:",
    "options": [
      "Zero",
      "Non-zero",
      "Positive",
      "Negative"
    ],
    "answer": 1
  },
  {
    "question": "The system of equations 2x + 3y = 5 and 4x + 6y = 10 has:",
    "options": [
      "A unique solution",
      "No solution",
      "Infinitely many solutions",
      "Exactly two solutions"
    ],
    "answer": 2
  },
  {
    "question": "Gauss elimination method involves:",
    "options": [
      "Finding determinants",
      "Transforming the augmented matrix to row-echelon form",
      "Finding the inverse matrix",
      "Using graphs"
    ],
    "answer": 1
  },
  {
    "question": "The augmented matrix for the system 2x + y = 3, x - y = 1 is:",
    "options": [
      "[2 1; 1 -1]",
      "[2 1 3; 1 -1 1]",
      "[2 1; 1 -1; 3 1]",
      "[2 3; 1 1]"
    ],
    "answer": 1
  },
  {
    "question": "The solution to the system x + y = 2, x - y = 0 is:",
    "options": [
      "(1, 1)",
      "(2, 0)",
      "(0, 2)",
      "(1, -1)"
    ],
    "answer": 0
  },
  {
    "question": "The vector from point A(1,2) to point B(4,6) is:",
    "options": [
      "(3,4)",
      "(5,8)",
      "(4,6)",
      "(1,2)"
    ],
    "answer": 0
  },
  {
    "question": "If u = (1,2) and v = (3,4), then 2u + 3v is:",
    "options": [
      "(11,16)",
      "(5,6)",
      "(4,12)",
      "(6,8)"
    ],
    "answer": 0
  },
  {
    "question": "The magnitude of the vector (0,0) is:",
    "options": [
      "0",
      "1",
      "Undefined",
      "Infinite"
    ],
    "answer": 0
  },
  {
    "question": "The dot product of two perpendicular vectors is:",
    "options": [
      "0",
      "1",
      "-1",
      "Equal to the product of their magnitudes"
    ],
    "answer": 0
  },
  {
    "question": "The cross product of two vectors in 2D is:",
    "options": [
      "A scalar",
      "A vector",
      "Not defined",
      "Zero"
    ],
    "answer": 2
  },
  {
    "question": "The area of a parallelogram formed by vectors u and v is given by the magnitude of:",
    "options": [
      "u · v",
      "u × v",
      "u + v",
      "u - v"
    ],
    "answer": 1
  },
  {
    "question": "The vector projection of a = (3, 4) onto b = (1, 0) is:",
    "options": [
      "(3, 0)",
      "(0, 4)",
      "(3, 4)",
      "(1, 0)"
    ],
    "answer": 0
  },
  {
    "question": "The scalar projection (component) of a = (3, 4) onto b = (1, 0) is:",
    "options": [
      "3",
      "4",
      "5",
      "0"
    ],
    "answer": 0
  },
  {
    "question": "The angle between the vectors a = (1, √3) and b = (1, 0) is:",
    "options": [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
    "answer": 2
  },
  {
    "question": "A matrix that is both symmetric and skew-symmetric must be:",
    "options": [
      "The identity matrix",
      "A diagonal matrix",
      "The zero matrix",
      "A square matrix"
    ],
    "answer": 2
  },
  {
    "question": "The trace of the matrix A = [2 5; -1 3] is:",
    "options": [
      "5",
      "1",
      "6",
      "8"
    ],
    "answer": 0
  },
  {
    "question": "For a square matrix A, if A = Aᵀ, then A is called a:",
    "options": [
      "Skew-symmetric matrix",
      "Symmetric matrix",
      "Orthogonal matrix",
      "Diagonal matrix"
    ],
    "answer": 1
  },
  {
    "question": "The determinant of a 3x3 identity matrix is:",
    "options": [
      "0",
      "1",
      "3",
      "-1"
    ],
    "answer": 1
  },
  {
    "question": "If two rows of a square matrix are identical, then its determinant is:",
    "options": [
      "1",
      "0",
      "Positive",
      "Negative"
    ],
    "answer": 1
  },
  {
    "question": "The cofactor of the element a₂₂ in the matrix [1 2 3; 0 4 5; 1 0 6] is:",
    "options": [
      "-6",
      "6",
      "3",
      "-3"
    ],
    "answer": 3
  },
  {
    "question": "The formula for the inverse of a 2x2 matrix A = [a b; c d] is:",
    "options": [
      "(1/det(A)) * [d -b; -c a]",
      "(1/det(A)) * [a c; b d]",
      "(1/det(A)) * [d b; c a]",
      "(1/det(A)) * [-a -b; -c -d]"
    ],
    "answer": 0
  },
  {
    "question": "If A is a 3x3 matrix and |A| = 5, then |2A| is:",
    "options": [
      "10",
      "20",
      "40",
      "5"
    ],
    "answer": 2
  },
  {
    "question": "The system of equations x + 2y = 3 and 2x + 4y = 6 is:",
    "options": [
      "Consistent with a unique solution",
      "Inconsistent",
      "Consistent with infinitely many solutions",
      "Not a linear system"
    ],
    "answer": 2
  },
  {
    "question": "The system of equations x + y = 1 and x + y = 2 is:",
    "options": [
      "Consistent with a unique solution",
      "Inconsistent",
      "Consistent with infinitely many solutions",
      "Not a linear system"
    ],
    "answer": 1
  },
  {
    "question": "In Gauss-Jordan elimination, the final augmented matrix is reduced to:",
    "options": [
      "Row-echelon form",
      "Reduced row-echelon form",
      "Diagonal form",
      "Symmetric form"
    ],
    "answer": 1
  },
  {
    "question": "The number of solutions for a system of linear equations represented by an augmented matrix [1 0 | 3; 0 1 | -2] is:",
    "options": [
      "0",
      "1",
      "Infinitely many",
      "2"
    ],
    "answer": 1
  },
  {
    "question": "The number of solutions for a system represented by [1 2 | 3; 0 0 | 1] is:",
    "options": [
      "0",
      "1",
      "Infinitely many",
      "2"
    ],
    "answer": 0
  },
  {
    "question": "The number of solutions for a system represented by [1 3 | 2; 0 0 | 0] is:",
    "options": [
      "0",
      "1",
      "Infinitely many",
      "2"
    ],
    "answer": 2
  },
  {
    "question": "Cramer's Rule can be applied only if the coefficient matrix is:",
    "options": [
      "Square and singular",
      "Square and non-singular",
      "Rectangular",
      "Symmetric"
    ],
    "answer": 1
  },
  {
    "question": "The equation of a circle with center at the origin and radius 5 is:",
    "options": [
      "x² + y² = 5",
      "x² + y² = 25",
      "(x-5)² + (y-5)² = 0",
      "x² + y² = 10"
    ],
    "answer": 1
  },
  {
    "question": "The center and radius of the circle x² + y² - 6x + 4y - 3 = 0 are:",
    "options": [
      "(3, -2), r = 4",
      "(-3, 2), r = 4",
      "(3, -2), r = 2",
      "(-3, 2), r = 2"
    ],
    "answer": 0
  },
  {
    "question": "The locus of a point moving so that its distance from (2,0) is always twice its distance from (0,0) is a:",
    "options": [
      "Circle",
      "Parabola",
      "Ellipse",
      "Hyperbola"
    ],
    "answer": 0
  },
  {
    "question": "The focus of the parabola x² = 8y is at:",
    "options": [
      "(0, 2)",
      "(2, 0)",
      "(0, -2)",
      "(-2, 0)"
    ],
    "answer": 0
  },
  {
    "question": "The directrix of the parabola y² = -4x is:",
    "options": [
      "x = 1",
      "x = -1",
      "y = 1",
      "y = -1"
    ],
    "answer": 0
  },
  {
    "question": "The vertex of the parabola (y - 2)² = 8(x + 3) is at:",
    "options": [
      "(-3, 2)",
      "(3, -2)",
      "(2, -3)",
      "(-2, 3)"
    ],
    "answer": 0
  },
  {
    "question": "The length of the latus rectum of the parabola y² = 12x is:",
    "options": [
      "3",
      "6",
      "12",
      "24"
    ],
    "answer": 2
  },
  {
    "question": "For an ellipse, the relationship between a, b, and c is:",
    "options": [
      "c² = a² + b²",
      "a² = b² + c²",
      "b² = a² + c²",
      "c² = a² - b²"
    ],
    "answer": 1
  },
  {
    "question": "The eccentricity of an ellipse is always:",
    "options": [
      "Equal to 1",
      "Greater than 1",
      "Between 0 and 1",
      "Less than 0"
    ],
    "answer": 2
  },
  {
    "question": "The foci of the ellipse x²/9 + y²/4 = 1 are at:",
    "options": [
      "(±√5, 0)",
      "(0, ±√5)",
      "(±√13, 0)",
      "(0, ±√13)"
    ],
    "answer": 0
  },
  {
    "question": "The length of the major axis of the ellipse 16x² + 25y² = 400 is:",
    "options": [
      "10",
      "16",
      "8",
      "20"
    ],
    "answer": 0
  },
  {
    "question": "For a hyperbola, the relationship between a, b, and c is:",
    "options": [
      "c² = a² + b²",
      "a² = b² + c²",
      "b² = a² + c²",
      "c² = a² - b²"
    ],
    "answer": 0
  },
  {
    "question": "The eccentricity of a hyperbola is always:",
    "options": [
      "Equal to 1",
      "Greater than 1",
      "Between 0 and 1",
      "Less than 0"
    ],
    "answer": 1
  },
  {
    "question": "The equations of the asymptotes for the hyperbola x²/16 - y²/9 = 1 are:",
    "options": [
      "y = ±(3/4)x",
      "y = ±(4/3)x",
      "y = ±(9/16)x",
      "y = ±(16/9)x"
    ],
    "answer": 0
  },
  {
    "question": "The vertices of the hyperbola y²/25 - x²/16 = 1 are at:",
    "options": [
      "(±5, 0)",
      "(0, ±5)",
      "(±4, 0)",
      "(0, ±4)"
    ],
    "answer": 1
  },
  {
    "question": "The polar equation r = 3/(1 + cosθ) represents a:",
    "options": [
      "Circle",
      "Parabola",
      "Ellipse",
      "Hyperbola"
    ],
    "answer": 1
  },
  {
    "question": "The polar equation r = 6/(2 + sinθ) represents a(n):",
    "options": [
      "Circle",
      "Parabola",
      "Ellipse",
      "Hyperbola"
    ],
    "answer": 2
  },
  {
    "question": "The Cartesian equation y² = 4ax can be written in parametric form as:",
    "options": [
      "x = at², y = 2at",
      "x = 2at, y = at²",
      "x = a cos t, y = a sin t",
      "x = a sec t, y = b tan t"
    ],
    "answer": 0
  },
  {
    "question": "The parametric equations x = a cos θ, y = b sin θ represent a(n):",
    "options": [
      "Circle",
      "Parabola",
      "Ellipse",
      "Hyperbola"
    ],
    "answer": 2
  },
  {
    "question": "The curve given by x = t² - 1, y = t + 2 can be described in Cartesian form by eliminating t as:",
    "options": [
      "y = √(x+1) + 2",
      "x = (y-2)² - 1",
      "y² = x + 1",
      "x² = y - 2"
    ],
    "answer": 1
  },
  {
    "question": "The derivative dy/dx for the parametric equations x = 2t, y = t² is:",
    "options": [
      "t",
      "2t",
      "1/t",
      "t/2"
    ],
    "answer": 0
  },
  {
    "question": "The second derivative d²y/dx² for the parametric equations x = cos t, y = sin t is:",
    "options": [
      "-sec³t",
      "sec³t",
      "-csc³t",
      "csc³t"
    ],
    "answer": 0
  },
  {
    "question": "The angle between the curves y = x² and y = x³ at their point of intersection (1,1) is given by:",
    "options": [
      "tan⁻¹(|(2-3)/(1+6)|)",
      "tan⁻¹(|(3-2)/(1+6)|)",
      "tan⁻¹(|(1-1)/(1+1)|)",
      "90°"
    ],
    "answer": 0
  },
  {
    "question": "The condition for the line y = mx + c to be tangent to the circle x² + y² = r² is:",
    "options": [
      "c² = r²(1 + m²)",
      "c² = r²(1 - m²)",
      "c = r√(1 + m²)",
      "c = r√(1 - m²)"
    ],
    "answer": 0
  },
  {
    "question": "The condition for the line y = mx + c to be tangent to the parabola y² = 4ax is:",
    "options": [
      "c = a/m",
      "c = am",
      "c = a + m",
      "c = a - m"
    ],
    "answer": 0
  },
  {
    "question": "The condition for the line y = mx + c to be tangent to the ellipse x²/a² + y²/b² = 1 is:",
    "options": [
      "c² = a²m² + b²",
      "c² = a²m² - b²",
      "c² = a² - b²m²",
      "c² = b² - a²m²"
    ],
    "answer": 0
  },
  {
    "question": "The condition for the line y = mx + c to be tangent to the hyperbola x²/a² - y²/b² = 1 is:",
    "options": [
      "c² = a²m² - b²",
      "c² = a²m² + b²",
      "c² = b² - a²m²",
      "c² = b²m² - a²"
    ],
    "answer": 0
  },
  {
    "question": "The equation of the tangent to the circle x² + y² = 25 at the point (3,4) is:",
    "options": [
      "3x + 4y = 25",
      "4x + 3y = 25",
      "3x - 4y = 25",
      "4x - 3y = 25"
    ],
    "answer": 0
  },
  {
    "question": "The equation of the normal to the parabola y² = 4ax at the point (at², 2at) is:",
    "options": [
      "y = tx + 2at + at³",
      "y = -tx + 2at + at³",
      "y = tx - 2at - at³",
      "y = -tx - 2at - at³"
    ],
    "answer": 1
  },
  {
    "question": "The product of the slopes of the tangents drawn from an external point to a parabola is given by:",
    "options": [
      "-1",
      "1",
      "A constant depending on the point",
      "0"
    ],
    "answer": 2
  },
  {
    "question": "The chord of contact of tangents from the point (x₁, y₁) to the circle x² + y² = r² has the equation:",
    "options": [
      "xx₁ + yy₁ = r²",
      "xy₁ + yx₁ = r²",
      "xx₁ - yy₁ = r²",
      "x₁y - y₁x = r²"
    ],
    "answer": 0
  },
  {
    "question": "The director circle of the ellipse x²/a² + y²/b² (where a ≠ b) is:",
    "options": [
      "x² + y² = a² + b²",
      "x² + y² = a² - b²",
      "x² + y² = ab",
      "Does not exist"
    ],
    "answer": 3
  },
  {
    "question": "The angle between the pair of tangents drawn from the point (x₁, y₁) to the circle x² + y² = r² is given by:",
    "options": [
      "2 tan⁻¹(r/√(x₁²+y₁²-r²))",
      "2 tan⁻¹(√(x₁²+y₁²-r²)/r)",
      "tan⁻¹(r/√(x₁²+y₁²-r²))",
      "tan⁻¹(√(x₁²+y₁²-r²)/r)"
    ],
    "answer": 1
  },
  {
    "question": "The polar of the point (x₁, y₁) with respect to the circle x² + y² = r² is:",
    "options": [
      "xx₁ + yy₁ = r²",
      "xy₁ + yx₁ = r²",
      "xx₁ - yy₁ = r²",
      "x₁y - y₁x = r²"
    ],
    "answer": 0
  },
  {
    "question": "The pole of the line lx + my + n = 0 with respect to the circle x² + y² = r² is:",
    "options": [
      "(-r²l/n, -r²m/n)",
      "(r²l/n, r²m/n)",
      "(-r²n/l, -r²n/m)",
      "(r²n/l, r²n/m)"
    ],
    "answer": 0
  },
  {
    "question": "The condition for the circles x²+y²+2g₁x+2f₁y+c₁=0 and x²+y²+2g₂x+2f₂y+c₂=0 to cut orthogonally is:",
    "options": [
      "2g₁g₂ + 2f₁f₂ = c₁ + c₂",
      "2g₁g₂ + 2f₁f₂ = c₁c₂",
      "g₁g₂ + f₁f₂ = c₁ + c₂",
      "2(g₁g₂ + f₁f₂) = c₁ + c₂"
    ],
    "answer": 3
  },
  {
    "question": "The radical axis of two circles has the equation:",
    "options": [
      "S₁ - S₂ = 0",
      "S₁ + S₂ = 0",
      "S₁/S₂ = 1",
      "S₁S₂ = 0"
    ],
    "answer": 0
  },
  {
    "question": "The family of circles passing through the intersection of two circles S₁=0 and S₂=0 is given by:",
    "options": [
      "S₁ + kS₂ = 0",
      "S₁ - kS₂ = 0",
      "S₁ + k = 0",
      "S₂ + k = 0"
    ],
    "answer": 0
  },
  {
    "question": "The equation of the chord of the circle x²+y²=r² whose midpoint is (x₁,y₁) is:",
    "options": [
      "xx₁ + yy₁ = x₁² + y₁²",
      "xx₁ + yy₁ = r²",
      "xy₁ + yx₁ = r²",
      "x² + y² = x₁² + y₁²"
    ],
    "answer": 0
  },
  {
    "question": "The condition for the line y=mx+c to be a normal to the parabola y²=4ax is:",
    "options": [
      "c = -2am - am³",
      "c = 2am + am³",
      "c = -2am + am³",
      "c = 2am - am³"
    ],
    "answer": 1
  },
  {
    "question": "The number of distinct normals that can be drawn from a point to a parabola is at most:",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 2
  },
  {
    "question": "The chord of the parabola y²=4ax which passes through the focus and is perpendicular to the axis is called the:",
    "options": [
      "Latus rectum",
      "Directrix",
      "Focal chord",
      "Double ordinate"
    ],
    "answer": 0
  },
  {
    "question": "The focal distance of any point (x,y) on the parabola y²=4ax is:",
    "options": [
      "x + a",
      "x - a",
      "a - x",
      "√(x² + y²)"
    ],
    "answer": 0
  },
  {
    "question": "The eccentricity of the parabola y²=4ax is:",
    "options": [
      "0",
      "1",
      "Between 0 and 1",
      "Greater than 1"
    ],
    "answer": 1
  },
  {
    "question": "The distance between the foci of the ellipse x²/25 + y²/16 = 1 is:",
    "options": [
      "6",
      "8",
      "10",
      "12"
    ],
    "answer": 0
  },
  {
    "question": "The sum of the focal distances of any point on an ellipse is equal to:",
    "options": [
      "The length of the major axis",
      "The length of the minor axis",
      "The distance between the foci",
      "The length of the latus rectum"
    ],
    "answer": 0
  },
  {
    "question": "The equation of the tangent to the ellipse x²/a² + y²/b² = 1 at the point (x₁,y₁) is:",
    "options": [
      "xx₁/a² + yy₁/b² = 1",
      "xx₁/a + yy₁/b = 1",
      "x/a² + y/b² = 1",
      "x²/a² + y²/b² = x₁²/a² + y₁²/b²"
    ],
    "answer": 0
  },
  {
    "question": "The product of the slopes of the tangents drawn from the point (x₁,y₁) to the ellipse x²/a² + y²/b² = 1 is given by:",
    "options": [
      "(b² - x₁²)/(a² - y₁²)",
      "(a² - x₁²)/(b² - y₁²)",
      "(b²x₁² - a²)/(a²y₁² - b²)",
      "(a²y₁² - b²)/(b²x₁² - a²)"
    ],
    "answer": 1
  },
  {
    "question": "The director circle of the hyperbola x²/a² - y²/b² = 1 is:",
    "options": [
      "x² + y² = a² + b²",
      "x² + y² = a² - b²",
      "x² + y² = ab",
      "Does not exist"
    ],
    "answer": 3
  },
  {
    "question": "The asymptotes of the hyperbola x²/a² - y²/b² = 1 are:",
    "options": [
      "y = ±(b/a)x",
      "y = ±(a/b)x",
      "y = ±(a²/b²)x",
      "y = ±(b²/a²)x"
    ],
    "answer": 0
  },
  {
    "question": "The rectangular hyperbola is characterized by:",
    "options": [
      "a = b",
      "a ≠ b",
      "Asymptotes perpendicular to each other",
      "Both a and c"
    ],
    "answer": 3
  },
  {
    "question": "The eccentricity of the rectangular hyperbola x² - y² = a² is:",
    "options": [
      "√2",
      "2",
      "1",
      "1/√2"
    ],
    "answer": 0
  },
  {
    "question": "The parametric equations of the rectangular hyperbola xy = c² are:",
    "options": [
      "x = ct, y = c/t",
      "x = c cos t, y = c sin t",
      "x = c sec t, y = c tan t",
      "x = c t², y = c/t²"
    ],
    "answer": 0
  },
  {
    "question": "The equation of the tangent to the hyperbola x²/a² - y²/b² = 1 at the point (x₁,y₁) is:",
    "options": [
      "xx₁/a² - yy₁/b² = 1",
      "xx₁/a - yy₁/b = 1",
      "x/a² - y/b² = 1",
      "x²/a² - y²/b² = x₁²/a² - y₁²/b²"
    ],
    "answer": 0
  },
  {
    "question": "The product of the slopes of the tangents drawn from the point (x₁,y₁) to the hyperbola x²/a² - y²/b² = 1 is given by:",
    "options": [
      "(b² + x₁²)/(a² + y₁²)",
      "(a² + x₁²)/(b² + y₁²)",
      "(b²x₁² - a²)/(a²y₁² + b²)",
      "(a²y₁² + b²)/(b²x₁² - a²)"
    ],
    "answer": 2
  },
  {
    "question": "The polar equation r = ed/(1 + e cosθ) represents a conic with eccentricity e. If e=1, it is a:",
    "options": [
      "Circle",
      "Parabola",
      "Ellipse",
      "Hyperbola"
    ],
    "answer": 1
  },
  {
    "question": "The Cartesian equation of the polar curve r = 4 sinθ is:",
    "options": [
      "x² + y² = 4y",
      "x² + y² = 4x",
      "x² + y² = 4",
      "y = 4x"
    ],
    "answer": 0
  },
  {
    "question": "The Cartesian equation of the polar curve r = 2/(1 - cosθ) is:",
    "options": [
      "y² = 4(x+1)",
      "x² = 4(y+1)",
      "y² = 4(x-1)",
      "x² = 4(y-1)"
    ],
    "answer": 0
  },
  {
    "question": "The area enclosed by the curve r = a(1 + cosθ) is a:",
    "options": [
      "Cardioid",
      "Limacon",
      "Lemniscate",
      "Rose curve"
    ],
    "answer": 0
  },
  {
    "question": "The curve r = a cos(3θ) is a rose curve with:",
    "options": [
      "3 petals",
      "6 petals",
      "1 petal",
      "4 petals"
    ],
    "answer": 0
  },
  {
    "question": "The Cartesian equation of the curve given by x = t², y = 2t is:",
    "options": [
      "y² = 4x",
      "x² = 4y",
      "y = 2x²",
      "x = 2y²"
    ],
    "answer": 0
  },
  {
    "question": "The derivative dy/dx for the parametric equations x = e^t, y = t e^t is:",
    "options": [
      "(t+1)e^t",
      "(t+1)",
      "e^t",
      "t"
    ],
    "answer": 1
  },
  {
    "question": "The second derivative d²y/dx² for the parametric equations x = cos t, y = sin t is:",
    "options": [
      "-sec³t",
      "sec³t",
      "-csc³t",
      "csc³t"
    ],
    "answer": 0
  },
  {
    "question": "The angle between the curves r = a(1+cosθ) and r = b(1-cosθ) at the origin is:",
    "options": [
      "0°",
      "45°",
      "90°",
      "180°"
    ],
    "answer": 2
  },
  {
    "question": "The length of the latus rectum of the conic r = ed/(1+e cosθ) is:",
    "options": [
      "2ed",
      "2ed/(1+e²)",
      "2ed/(1-e²)",
      "ed/(1+e²)"
    ],
    "answer": 2
  },
  {
    "question": "The area of the triangle formed by the lines y = m₁x + c₁, y = m₂x + c₂, and the y-axis is:",
    "options": [
      "|(c₁-c₂)²/(2(m₁-m₂))|",
      "|(c₁-c₂)²/(m₁-m₂)|",
      "|(c₁-c₂)/(m₁-m₂)|",
      "|(c₁²-c₂²)/(m₁-m₂)|"
    ],
    "answer": 0
  },
  {
    "question": "The distance between the parallel lines 3x+4y+5=0 and 3x+4y+10=0 is:",
    "options": [
      "1",
      "2",
      "3",
      "5"
    ],
    "answer": 0
  },
  {
    "question": "The equation of the line through the point of intersection of lines 2x+3y-5=0 and x-y-2=0 and parallel to the x-axis is:",
    "options": [
      "y = 1",
      "y = -1",
      "x = 1",
      "x = -1"
    ],
    "answer": 1
  },
  {
    "question": "The condition for the lines a₁x+b₁y+c₁=0 and a₂x+b₂y+c₂=0 to be perpendicular is:",
    "options": [
      "a₁a₂ + b₁b₂ = 0",
      "a₁b₂ + a₂b₁ = 0",
      "a₁/a₂ = b₁/b₂",
      "a₁/a₂ = -b₁/b₂"
    ],
    "answer": 0
  },
  {
    "question": "The distance of the point (2,3) from the line 4x-3y+5=0 is:",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": 2
  },
  {
    "question": "The equation of the line through (1,2) making equal intercepts on the axes is:",
    "options": [
      "x+y=3",
      "x-y=1",
      "2x+y=4",
      "x+2y=5"
    ],
    "answer": 0
  },
  {
    "question": "The lines represented by the equation y² - xy - 6x² = 0 are:",
    "options": [
      "Parallel",
      "Perpendicular",
      "Coincident",
      "Inclined at 45°"
    ],
    "answer": 1
  },
  {
    "question": "The angle between the lines represented by x² + 2xy secθ + y² = 0 is:",
    "options": [
      "θ",
      "2θ",
      "θ/2",
      "90°-θ"
    ],
    "answer": 0
  },
  {
    "question": "The product of the perpendiculars from (x₁,y₁) to the pair of lines ax²+2hxy+by²=0 is:",
    "options": [
      "|(ax₁²+2hx₁y₁+by₁²)/√((a-b)²+4h²)|",
      "|(ax₁²+2hx₁y₁+by₁²)/√(a+b)|",
      "|(ax₁²+2hx₁y₁+by₁²)/(a+b)|",
      "|(ax₁²+2hx₁y₁+by₁²)/√(ab-h²)|"
    ],
    "answer": 0
  },
  {
    "question": "The condition for the equation ax²+2hxy+by²+2gx+2fy+c=0 to represent a pair of lines is that the determinant of the matrix:",
    "options": [
      "[a h g; h b f; g f c] = 0",
      "[a h; h b] = 0",
      "[a g; g c] = 0",
      "[b f; f c] = 0"
    ],
    "answer": 0
  },
  {
    "question": "The point of intersection of the lines represented by x² - 3xy + 2y² = 0 is:",
    "options": [
      "(0,0)",
      "(1,2)",
      "(2,1)",
      "(3,2)"
    ],
    "answer": 0
  },
  {
    "question": "The equation of the pair of lines through the origin perpendicular to the lines x² - 3xy + 2y² = 0 is:",
    "options": [
      "2x² - 3xy + y² = 0",
      "x² - 3xy + 2y² = 0",
      "2x² + 3xy + y² = 0",
      "x² + 3xy + 2y² = 0"
    ],
    "answer": 2
  },
  {
    "question": "The area of the triangle formed by the lines y² - 9xy + 18x² = 0 and y = 3 is:",
    "options": [
      "1/2",
      "1",
      "3/2",
      "2"
    ],
    "answer": 1
  },
  {
    "question": "The distance between the lines represented by x² + 2√3xy + 3y² = 0 is:",
    "options": [
      "0",
      "1",
      "2",
      "√3"
    ],
    "answer": 0
  },
  {
    "question": "The equation of the line joining the origin to the point of intersection of the curves ax²+2hxy+by²+2gx=0 and a'x²+2h'xy+b'y²+2g'x=0 can be found by:",
    "options": [
      "Making the equation homogeneous",
      "Using Cramer's rule",
      "Solving the equations simultaneously",
      "Eliminating x or y"
    ],
    "answer": 0
  },
  {
    "question": "The joint equation of the lines through (1,1) and parallel to the lines x² - 5xy + 6y² = 0 is:",
    "options": [
      "x² - 5xy + 6y² - 3x + 3y = 0",
      "x² - 5xy + 6y² + 3x - 3y = 0",
      "x² - 5xy + 6y² - 3x - 3y = 0",
      "x² - 5xy + 6y² + 3x + 3y = 0"
    ],
    "answer": 0
  },
  {
    "question": "The angle between the lines joining the origin to the points of intersection of the curve x²+2xy+y²+2x+2y-5=0 and the line x-y+1=0 is:",
    "options": [
      "0°",
      "45°",
      "90°",
      "60°"
    ],
    "answer": 2
  }

];
  // KaTeX rendering function
  function renderLatex(str) {
    if (!str) return str;

    // Render LaTeX between $...$
    return str.replace(/\$(.*?)\$/g, (match, latex) => {
      try {
        return katex.renderToString(latex, {
          throwOnError: false,
          displayMode: false
        });
      } catch (e) {
        console.error("KaTeX error:", e);
        return match;
      }
    });
  }

  // KaTeX rendering function - IMPROVED
function renderLatex(str) {
  if (!str || typeof str !== 'string') return str;
  
  // Handle both inline $...$ and display $$...$$ math
  let result = str;
  
  // Render display math ($$...$$)
  result = result.replace(/\$\$(.*?)\$\$/g, (match, latex) => {
    try {
      return katex.renderToString(latex, {
        throwOnError: false,
        displayMode: true
      });
    } catch (e) {
      console.error("KaTeX display mode error:", e);
      return match;
    }
  });
  
  // Render inline math ($...$)
  result = result.replace(/\$(.*?)\$/g, (match, latex) => {
    try {
      return katex.renderToString(latex, {
        throwOnError: false,
        displayMode: false
      });
    } catch (e) {
      console.error("KaTeX inline mode error:", e);
      return match;
    }
  });
  
  return result;
}

// Function to render all math expressions in an element
function renderMathInElement(element) {
  if (!element) return;
  
  // Find all text nodes that contain LaTeX
  const walker = document.createTreeWalker(
    element, 
    NodeFilter.SHOW_TEXT, 
    null, 
    false
  );
  
  let nodes = [];
  let node;
  while (node = walker.nextNode()) {
    if (node.textContent.includes('$')) {
      nodes.push(node);
    }
  }
  
  // Process each node with LaTeX
  nodes.forEach(node => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = renderLatex(node.textContent);
    
    // Replace the text node with the rendered HTML
    if (tempDiv.innerHTML !== node.textContent) {
      node.parentNode.replaceChild(tempDiv, node);
    }
  });
}

// UI Elements
const questionNav = document.getElementById('question-nav');
const startScreen = document.getElementById('start-screen');
const startQuizBtn = document.getElementById('start-quiz-btn');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const app = document.getElementById('app');
const timerEl = document.getElementById('timer');
const questionNumberEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const scoreEl = document.getElementById('score');
const resultsList = document.getElementById('results-list');
const retryBtn = document.getElementById('retry-btn');
const customConfirm = document.getElementById('customConfirm');
const confirmYes = document.getElementById('confirmYes');
const confirmNo = document.getElementById('confirmNo');
const reloadConfirm = document.getElementById('reload-confirm');
const reloadSubmit = document.getElementById('reload-submit');
const reloadCancel = document.getElementById('reload-cancel');

// Question count elements
const questionCountInput = document.getElementById('question-count');
const countSlider = document.getElementById('count-slider');
const decreaseBtn = document.getElementById('decrease-btn');
const increaseBtn = document.getElementById('increase-btn');
const countDisplay = document.getElementById('count-display');
const timeEstimate = document.getElementById('time-estimate');

// Quiz variables
let TOTAL_QUESTIONS = 10; // Default value
let timeRemaining; // Will be set dynamically based on question count
let selectedQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timer;
let quizInProgress = false;

// Update question count display
function updateCountDisplay() {
  countDisplay.textContent = `${TOTAL_QUESTIONS} questions`;
  questionCountInput.value = TOTAL_QUESTIONS;
  countSlider.value = TOTAL_QUESTIONS;
  // Show estimated time as 45 seconds per question
  const totalSeconds = TOTAL_QUESTIONS * 45;
  const min = Math.floor(totalSeconds / 60);
  const sec = totalSeconds % 60;
  let timeStr = '';
  if (min > 0) {
    timeStr += `${min} minute${min !== 1 ? 's' : ''}`;
    if (sec > 0) timeStr += ` ${sec} second${sec !== 1 ? 's' : ''}`;
  } else {
    timeStr = `${sec} second${sec !== 1 ? 's' : ''}`;
  }
  timeEstimate.textContent = `Estimated time: ${timeStr} (${TOTAL_QUESTIONS} × 45 sec)`;
}   

// Initialize question count controls
decreaseBtn.addEventListener('click', () => {
  if (TOTAL_QUESTIONS > 10) {
    TOTAL_QUESTIONS = Math.max(10, TOTAL_QUESTIONS - 5);
    updateCountDisplay();
  }
});

increaseBtn.addEventListener('click', () => {
  if (TOTAL_QUESTIONS < 100) {
    TOTAL_QUESTIONS = Math.min(100, TOTAL_QUESTIONS + 5);
    updateCountDisplay();
  }
});

questionCountInput.addEventListener('change', () => {
  let value = parseInt(questionCountInput.value);
  if (isNaN(value) || value < 10) value = 10;
  if (value > 100) value = 100;
  TOTAL_QUESTIONS = value;
  updateCountDisplay();
});

countSlider.addEventListener('input', () => {
  TOTAL_QUESTIONS = parseInt(countSlider.value);
  updateCountDisplay();
});

// Initialize quiz
startQuizBtn.addEventListener('click', () => {
  startScreen.style.display = 'none';
  app.style.display = 'flex';
  initQuiz();
});

function initQuiz() {
  // Set time limit based on number of questions (45s per question)
  timeRemaining = TOTAL_QUESTIONS * 45;
  updateTimerDisplay();

  // Shuffle and pick questions
  const shuffled = shuffleArray([...questions]);
  selectedQuestions = shuffled.slice(0, Math.min(TOTAL_QUESTIONS, questions.length));

  currentQuestionIndex = 0;
  userAnswers = new Array(selectedQuestions.length).fill(null);

  showQuestion();

  prevBtn.disabled = true;
  nextBtn.disabled = false;
  submitBtn.disabled = true;

  quizContainer.style.display = 'flex';
  resultContainer.style.display = 'none';

  startTimer();
  
  quizInProgress = true;
  window.addEventListener('beforeunload', handleBeforeUnload);
  
  // Focus on the quiz container for keyboard events
  document.body.focus();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();
    if (timeRemaining <= 0) {
      clearInterval(timer);
      finishQuiz();
    }
  }, 1000);
}

function updateTimerDisplay() {
  let min = Math.floor(timeRemaining / 60);
  let sec = timeRemaining % 60;
  timerEl.textContent = `Time Left: ${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
}

function renderQuestionNav() {
  questionNav.innerHTML = '';
  selectedQuestions.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.textContent = i + 1;
    if (userAnswers[i] !== null) btn.classList.add('answered');
    if (i === currentQuestionIndex) btn.classList.add('current');
    btn.addEventListener('click', () => {
      currentQuestionIndex = i;
      showQuestion();
      renderQuestionNav();
    });
    questionNav.appendChild(btn);
  });
}

function showQuestion() {
  const q = selectedQuestions[currentQuestionIndex];
  questionNumberEl.textContent = `Question ${currentQuestionIndex + 1} of ${selectedQuestions.length}`;
  
  // Set question text and render LaTeX
  questionTextEl.innerHTML = q.question;
  renderMathInElement(questionTextEl);

  optionsContainer.innerHTML = '';

  q.options.forEach((optionText, i) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    
    const textSpan = document.createElement('span');
    textSpan.innerHTML = String.fromCharCode(65 + i) + ". " + optionText;
    optionDiv.appendChild(textSpan);
    
    // Render LaTeX in the option
    renderMathInElement(textSpan);
    
    const keyBadge = document.createElement('div');
    keyBadge.className = 'key-badge';
    keyBadge.textContent = String.fromCharCode(65 + i);
    optionDiv.appendChild(keyBadge);

    if(userAnswers[currentQuestionIndex] === i) {
      optionDiv.classList.add('selected');
    }

    optionDiv.addEventListener('click', () => {
      selectOption(i);
    });

    optionsContainer.appendChild(optionDiv);
  });

  prevBtn.disabled = currentQuestionIndex === 0;
  nextBtn.disabled = currentQuestionIndex === selectedQuestions.length - 1;
  submitBtn.disabled = userAnswers[currentQuestionIndex] === null;

  renderQuestionNav();
}

function selectOption(optionIndex) {
  userAnswers[currentQuestionIndex] = optionIndex;
  
  Array.from(optionsContainer.children).forEach((optEl, idx) => {
    optEl.classList.toggle('selected', idx === optionIndex);
  });

  submitBtn.disabled = false;
  renderQuestionNav();
}

// Navigation buttons
prevBtn.addEventListener('click', () => {
  if(currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
});

nextBtn.addEventListener('click', () => {
  if(currentQuestionIndex < selectedQuestions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  }
});

// Submit button shows custom confirmation dialog
submitBtn.addEventListener('click', () => {
  customConfirm.style.display = 'flex';
});

// Confirm dialog buttons
confirmYes.addEventListener('click', () => {
  customConfirm.style.display = 'none';
  finishQuiz();
});

confirmNo.addEventListener('click', () => {
  customConfirm.style.display = 'none';
});

// Reload confirmation handlers
function handleBeforeUnload(e) {
  if (quizInProgress) {
    e.preventDefault();
    e.returnValue = '';
    reloadConfirm.style.display = 'flex';
    return '';
  }
}

reloadSubmit.addEventListener('click', () => {
  reloadConfirm.style.display = 'none';
  quizInProgress = false;
  window.removeEventListener('beforeunload', handleBeforeUnload);
  finishQuiz();
  setTimeout(() => {
    window.location.reload();
  }, 1000);
});

reloadCancel.addEventListener('click', () => {
  reloadConfirm.style.display = 'none';
});

function finishQuiz() {
  clearInterval(timer);
  quizContainer.style.display = 'none';
  resultContainer.style.display = 'flex';
  
  quizInProgress = false;
  window.removeEventListener('beforeunload', handleBeforeUnload);

  let correctCount = 0;
  resultsList.innerHTML = '';

  selectedQuestions.forEach((q, idx) => {
    const userAnsIndex = userAnswers[idx];
    const isCorrect = userAnsIndex === q.answer;
    if (isCorrect) correctCount++;

    const userAnswerText = userAnsIndex !== null ? q.options[userAnsIndex] : 'No Answer';
    const correctAnswerText = q.options[q.answer];

    const div = document.createElement('div');
    div.className = 'result-question';
    
    const questionDiv = document.createElement('div');
    questionDiv.innerHTML = `<strong>Q${idx + 1}:</strong> ${q.question}`;
    renderMathInElement(questionDiv);
    
    const userAnswerDiv = document.createElement('div');
    userAnswerDiv.innerHTML = `Your answer: <span class="${isCorrect ? 'correct' : 'wrong'}">${userAnswerText}</span>`;
    renderMathInElement(userAnswerDiv);
    
    div.appendChild(questionDiv);
    div.appendChild(userAnswerDiv);
    
    if (!isCorrect) {
      const correctAnswerDiv = document.createElement('div');
      correctAnswerDiv.innerHTML = `Correct answer: <span class="correct">${correctAnswerText}</span>`;
      renderMathInElement(correctAnswerDiv);
      div.appendChild(correctAnswerDiv);
    }
    
    resultsList.appendChild(div);
  });

  scoreEl.textContent = `You answered ${correctCount} out of ${selectedQuestions.length} questions correctly.`;
  
  let comment = "";
  const percentage = Math.round((correctCount / selectedQuestions.length) * 100);
  
  if (percentage >= 80) comment = "Excellent work! You have a strong grasp of this material.";
  else if (percentage >= 60) comment = "Good effort! Review the incorrect answers to improve.";
  else comment = "Keep studying! Focus on the topics you missed.";
  
  scoreEl.innerHTML += `<div style="margin-top:10px;font-weight:normal">${comment}</div>`;
}

retryBtn.addEventListener('click', () => {
  initQuiz();
});

// Toggle mobile menu
document.querySelector('.menu-toggle').addEventListener('click', function () {
  document.querySelector('.nav-links').classList.toggle('show');
});

// Initialize count display when page loads
updateCountDisplay();

// Keyboard shortcuts - FIXED
document.addEventListener('keydown', function(e) {
  // Don't process keyboard shortcuts if user is typing in an input
  if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
  
  const key = e.key.toUpperCase();
  
  // Handle keyboard shortcuts based on what's visible on screen
  if (startScreen.style.display !== 'none') {
    // Start screen is visible
    if (key === 'ENTER') {
      e.preventDefault();
      startQuizBtn.click();
    }
    return;
  }
  
  if (customConfirm.style.display === 'flex') {
    // Custom confirmation dialog is visible
    if (key === 'Y' || key === 'ENTER') {
      e.preventDefault();
      confirmYes.click();
    } else if (key === 'N' || key === 'ESCAPE') {
      e.preventDefault();
      confirmNo.click();
    }
    return;
  }
  
  if (reloadConfirm.style.display === 'flex') {
    // Reload confirmation dialog is visible
    if (key === 'ENTER') {
      e.preventDefault();
      reloadSubmit.click();
    } else if (key === 'ESCAPE') {
      e.preventDefault();
      reloadCancel.click();
    }
    return;
  }
  
  if (resultContainer.style.display === 'flex') {
    // Results screen is visible
    if (key === 'ENTER' || key === 'R') {
      e.preventDefault();
      retryBtn.click();
    }
    return;
  }
  
  if (quizContainer.style.display === 'flex' && quizInProgress) {
    // Quiz is in progress
    // Option selection (A–E)
    if (key >= 'A' && key <= 'E') {
      const optionIndex = key.charCodeAt(0) - 65;
      const currentOptions = selectedQuestions[currentQuestionIndex]?.options || [];
      if (optionIndex < currentOptions.length) {
        e.preventDefault();
        selectOption(optionIndex);
      }
      return;
    }

    // Navigation
    switch (key) {
      case 'P':
        e.preventDefault();
        if (!prevBtn.disabled) prevBtn.click();
        break;
      case 'N':
        e.preventDefault();
        if (!nextBtn.disabled) nextBtn.click();
        break;
      case 'S':
        e.preventDefault();
        if (!submitBtn.disabled) submitBtn.click();
        break;
    }
  }
});


// Add CSS for better math formula display
const style = document.createElement('style');
style.textContent = `
  .katex {
    font-size: 1.1em !important;
  }
  .katex-display {
    margin: 0.5em 0;
    overflow-x: auto;
    overflow-y: hidden;
  }
  .katex-display > .katex {
    display: inline-block;
    white-space: nowrap;
  }
  .option .katex {
    font-size: 1em !important;
  }
`;
document.head.appendChild(style);

// Initialize KaTeX when page loads
document.addEventListener('DOMContentLoaded', function() {
  // Render any math on the start screen
  renderMathInElement(startScreen);
});

// Overlay handling
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.innerHTML = `<div>MTH222 Questions Updated more coming </div>`;
  document.body.appendChild(overlay);

  setTimeout(() => {
    overlay.classList.add("hidden");
    setTimeout(() => overlay.remove(), 600); // wait for fade-out then remove
  }, 3000); // 3 seconds
});
