const questions = [
  {
    "question": "In a Cartesian coordinate system, the horizontal axis is called the:",
    "options": [
      "y-axis",
      "Axis of ordinates",
      "x-axis",
      "Polar axis"
    ],
    "answer": 2
  },
  {
    "question": "The distance between points P₁(x₁, y₁) and P₂(x₂, y₂) is given by:",
    "options": [
      "√((x₂ + x₁)² + (y₂ + y₁)²) ",
      "(x₂ - x₁) + (y₂ - y₁)",
      "√((x₂ - x₁)² + (y₂ - y₁)²) ",
      "(x₂ - x₁)² + (y₂ - y₁)²"
    ],
    "answer": 2
  },
  {
    "question": "The coordinates of the midpoint of the line joining points (x₁, y₁) and (x₂, y₂) are:",
    "options": [
      "(x₁ + x₂, y₁ + y₂)",
      "((x₁ + x₂)/2, (y₁ + y₂)/2)",
      "(x₂ - x₁, y₂ - y₁)",
      "((x₂ - x₁)/2, (y₂ - y₁)/2)"
    ],
    "answer": 1
  },
  {
    "question": "Three points A, B, and C are said to be collinear if:",
    "options": [
      "The area of triangle ABC is positive",
      "The area of triangle ABC is negative",
      "The area of triangle ABC is zero",
      "The perimeter of triangle ABC is zero"
    ],
    "answer": 2
  },
  {
    "question": "The gradient (slope) 'm' of a line passing through points (x₁, y₁) and (x₂, y₂) is defined as:",
    "options": [
      "m = (x₂ - x₁) / (y₂ - y₁)",
      "m = (y₂ - y₁) / (x₂ - x₁)",
      "m = (y₂ + y₁) / (x₂ + x₁)",
      "m = (x₂ + x₁) / (y₂ + y₁)"
    ],
    "answer": 1
  },
  {
    "question": "If a line makes an angle θ with the positive x-axis, its gradient m is:",
    "options": [
      "m = cos θ",
      "m = sin θ",
      "m = cot θ",
      "m = tan θ"
    ],
    "answer": 3
  },
  {
    "question": "Two lines with gradients m₁ and m₂ are parallel if:",
    "options": [
      "m₁ * m₂ = -1",
      "m₁ = m₂",
      "m₁ + m₂ = 0",
      "m₁ / m₂ = 1"
    ],
    "answer": 1
  },
  {
    "question": "Two lines with gradients m₁ and m₂ are perpendicular if:",
    "options": [
      "m₁ * m₂ = 1",
      "m₁ = -m₂",
      "m₁ * m₂ = -1",
      "m₁ / m₂ = -1"
    ],
    "answer": 2
  },
  {
    "question": "The polar coordinate representation of a point is given by:",
    "options": [
      "(x, y)",
      "(r, θ)",
      "(θ, r)",
      "(y, x)"
    ],
    "answer": 1
  },
  {
    "question": "The relationship between Cartesian (x, y) and Polar (r, θ) coordinates is:",
    "options": [
      "x = r cos θ, y = r sin θ",
      "x = r sin θ, y = r cos θ",
      "r = x + y, θ = x/y",
      "r = xy, θ = tan(x+y)"
    ],
    "answer": 0
  },
  {
    "question": "A circle is defined as the set of all points that are equidistant from a fixed point called the:",
    "options": [
      "Radius",
      "Diameter",
      "Circumference",
      "Center"
    ],
    "answer": 3
  },
  {
    "question": "The equation of a circle with center (h, k) and radius r is:",
    "options": [
      "(x - h)² + (y - k)² = r",
      "(x + h)² + (y + k)² = r²",
      "(x - h)² + (y - k)² = r²",
      "(x - h) + (y - k) = r"
    ],
    "answer": 2
  },
  {
    "question": "The equation of a circle with center at the origin (0, 0) and radius r is:",
    "options": [
      "x² + y² = r",
      "x² + y² = r²",
      "x + y = r",
      "(x - 0)² + (y - 0)² = r"
    ],
    "answer": 1
  },
  {
    "question": "The general equation of a circle is:",
    "options": [
      "x² + y² + 2gx + 2fy + c = 0",
      "Ax² + By² + Cx + Dy + E = 0",
      "x + y = c",
      "(x - g)² + (y - f)² = c"
    ],
    "answer": 0
  },
  {
    "question": "For the general equation of a circle x² + y² + 2gx + 2fy + c = 0, the center is:",
    "options": [
      "(-g, -f)",
      "(g, f)",
      "(2g, 2f)",
      "(-2g, -2f)"
    ],
    "answer": 0
  },
  {
    "question": "The radius of the circle x² + y² + 2gx + 2fy + c = 0 is given by:",
    "options": [
      "r = √(g² + f² - c)",
      "r = g² + f² - c",
      "r = √c",
      "r = g + f - c"
    ],
    "answer": 0
  },
  {
    "question": "The polar form of a complex number z = x + iy is:",
    "options": [
      "z = r(cos θ + i sin θ)",
      "z = r(cos θ - i sin θ)",
      "z = x(cos θ + i sin θ)",
      "z = y(cos θ + i sin θ)"
    ],
    "answer": 0
  },
  {
    "question": "In the polar form z = r(cos θ + i sin θ), r is the:",
    "options": [
      "Argument",
      "Imaginary part",
      "Real part",
      "Modulus"
    ],
    "answer": 3
  },
  {
    "question": "In the polar form z = r(cos θ + i sin θ), θ is the:",
    "options": [
      "Modulus",
      "Real part",
      "Imaginary part",
      "Argument"
    ],
    "answer": 3
  },
  {
    "question": "The value of 'i' (the imaginary unit) is:",
    "options": [
      "√1",
      "√(-1)",
      "-1",
      "1"
    ],
    "answer": 1
  },
  {
    "question": "The derivative of a constant function f(x) = c is:",
    "options": [
      "1",
      "c",
      "x",
      "0"
    ],
    "answer": 3
  },
  {
    "question": "The power rule for differentiation states that the derivative of f(x) = xⁿ is:",
    "options": [
      "n*xⁿ",
      "xⁿ⁻¹",
      "n*xⁿ⁻¹",
      "n*xⁿ⁺¹"
    ],
    "answer": 2
  },
  {
    "question": "The product rule for differentiation of two functions u(x) and v(x) is:",
    "options": [
      "u'v + uv'",
      "u'v - uv'",
      "uv' + u'v'",
      "uv - u'v'"
    ],
    "answer": 0
  },
  {
    "question": "The quotient rule for differentiation of two functions u(x) and v(x) is:",
    "options": [
      "(u'v - uv') / v²",
      "(u'v + uv') / v²",
      "(uv' - u'v) / v²",
      "(u'v + uv) / v²"
    ],
    "answer": 0
  },
  {
    "question": "The chain rule for differentiation of a composite function f(g(x)) is:",
    "options": [
      "f'(x) * g'(x)",
      "f'(g(x)) * g'(x)",
      "f(x) * g(x)",
      "f'(x) * g(x)"
    ],
    "answer": 1
  },
  {
    "question": "The derivative of sin(x) is:",
    "options": [
      "cos(x)",
      "-cos(x)",
      "tan(x)",
      "sec(x)"
    ],
    "answer": 0
  },
  {
    "question": "The derivative of cos(x) is:",
    "options": [
      "sin(x)",
      "-sin(x)",
      "tan(x)",
      "cot(x)"
    ],
    "answer": 1
  },
  {
    "question": "The derivative of tan(x) is:",
    "options": [
      "sec²(x)",
      "cot²(x)",
      "-sec²(x)",
      "csc²(x)"
    ],
    "answer": 0
  },
  {
    "question": "The derivative of eˣ is:",
    "options": [
      "x * eˣ⁻¹",
      "eˣ",
      "eˣ / x",
      "eˣ⁻¹"
    ],
    "answer": 1
  },
  {
    "question": "The derivative of ln(x) is:",
    "options": [
      "x",
      "1/x",
      "ln(x)",
      "eˣ"
    ],
    "answer": 1
  },
  {
    "question": "The integral of a constant k is:",
    "options": [
      "k",
      "kx",
      "x",
      "kx + C"
    ],
    "answer": 3
  },
  {
    "question": "The power rule for integration states that the integral of xⁿ is:",
    "options": [
      "(xⁿ⁺¹)/(n+1) + C, for n ≠ -1",
      "xⁿ⁻¹",
      "nxⁿ⁻¹ + C",
      "xⁿ⁺¹ + C"
    ],
    "answer": 0
  },
  {
    "question": "The integral of 1/x is:",
    "options": [
      "ln|x| + C",
      "ln(x) + C",
      "x⁻² + C",
      "eˣ + C"
    ],
    "answer": 0
  },
  {
    "question": "The integral of eˣ is:",
    "options": [
      "eˣ + C",
      "eˣ⁺¹ + C",
      "x * eˣ⁻¹ + C",
      "eˣ / (x+1) + C"
    ],
    "answer": 0
  },
  {
    "question": "The integral of sin(x) is:",
    "options": [
      "cos(x) + C",
      "-cos(x) + C",
      "sec(x) + C",
      "cot(x) + C"
    ],
    "answer": 1
  },
  {
    "question": "The integral of cos(x) is:",
    "options": [
      "sin(x) + C",
      "-sin(x) + C",
      "tan(x) + C",
      "sec(x) + C"
    ],
    "answer": 0
  },
  {
    "question": "A limit exists if the left-hand limit and the right-hand limit:",
    "options": [
      "Are different",
      "Are not equal to zero",
      "Are equal and finite",
      "Are both infinite"
    ],
    "answer": 2
  },
  {
    "question": "A function f(x) is continuous at a point x = a if:",
    "options": [
      "lim(x→a) f(x) exists",
      "f(a) is defined",
      "lim(x→a) f(x) = f(a)",
      "All of the above"
    ],
    "answer": 3
  },
  {
    "question": "The slope of the tangent line to a curve at a point is given by the:",
    "options": [
      "Integral of the function",
      "Derivative of the function",
      "Limit of the function",
      "Area under the curve"
    ],
    "answer": 1
  },
  {
    "question": "The area under a curve from x=a to x=b is given by the:",
    "options": [
      "Definite integral from a to b",
      "Derivative of the function",
      "Limit of the function",
      "Indefinite integral of the function"
    ],
    "answer": 0
  },
  {
    "question": "The domain of a function is the set of all possible:",
    "options": [
      "Output values (y-values)",
      "Input values (x-values)",
      "Intercepts",
      "Roots"
    ],
    "answer": 1
  },
  {
    "question": "The range of a function is the set of all possible:",
    "options": [
      "Input values (x-values)",
      "Output values (y-values)",
      "Intercepts",
      "Roots"
    ],
    "answer": 1
  },
  {
    "question": "A function f(x) is one-to-one if:",
    "options": [
      "Every output has exactly one input",
      "Every input has exactly one output",
      "The graph passes the vertical line test",
      "The graph passes the horizontal line test"
    ],
    "answer": 0
  },
  {
    "question": "The inverse of a function f(x) is denoted by:",
    "options": [
      "f⁻¹(x)",
      "1/f(x)",
      "f'(x)",
      "f(x)⁻¹"
    ],
    "answer": 0
  },
  {
    "question": "The graph of a function and its inverse are symmetric with respect to the line:",
    "options": [
      "y = -x",
      "y = 0",
      "x = 0",
      "y = x"
    ],
    "answer": 3
  },
  {
    "question": "A matrix is a rectangular array of:",
    "options": [
      "Variables",
      "Numbers",
      "Equations",
      "Functions"
    ],
    "answer": 1
  },
  {
    "question": "The determinant of a 2x2 matrix [[a, b], [c, d]] is:",
    "options": [
      "ad - bc",
      "ac - bd",
      "ab - cd",
      "ad + bc"
    ],
    "answer": 0
  },
  {
    "question": "The identity matrix 'I' is a square matrix where all the diagonal elements are:",
    "options": [
      "0",
      "1",
      "-1",
      "Any number"
    ],
    "answer": 1
  },
  {
    "question": "The inverse of a matrix A, denoted as A⁻¹, satisfies the condition:",
    "options": [
      "A * A⁻¹ = I",
      "A + A⁻¹ = I",
      "A / A⁻¹ = I",
      "A - A⁻¹ = I"
    ],
    "answer": 0
  },
  {
    "question": "The transpose of a matrix A is obtained by interchanging its:",
    "options": [
      "Rows and columns",
      "Elements and numbers",
      "Determinant and inverse",
      "Addition and multiplication"
    ],
    "answer": 0
  },
  {
    "question": "A system of linear equations can be represented in matrix form as:",
    "options": [
      "AX = B",
      "A + X = B",
      "A - X = B",
      "A / X = B"
    ],
    "answer": 0
  },
  {
    "question": "Cramer's Rule is used to solve a system of linear equations using:",
    "options": [
      "Matrix addition",
      "Matrix subtraction",
      "Determinants",
      "Matrix multiplication"
    ],
    "answer": 2
  },
  {
    "question": "The solution to a system of equations is the point where the graphs of the equations:",
    "options": [
      "Are parallel",
      "Are perpendicular",
      "Intersect",
      "Do not intersect"
    ],
    "answer": 2
  },
  {
    "question": "An inconsistent system of linear equations has:",
    "options": [
      "One unique solution",
      "Infinitely many solutions",
      "No solution",
      "Zero solutions"
    ],
    "answer": 2
  },
  {
    "question": "The law of sines for a triangle ABC is:",
    "options": [
      "a/sin A = b/sin B = c/sin C",
      "a² = b² + c² - 2bc cos A",
      "a/cos A = b/cos B = c/cos C",
      "sin A / a = sin B / b = sin C / c"
    ],
    "answer": 0
  },
  {
    "question": "The law of cosines for a triangle ABC is:",
    "options": [
      "a² = b² + c² - 2bc sin A",
      "a² = b² + c² - 2bc cos A",
      "a² = b² + c² + 2bc cos A",
      "sin A / a = sin B / b = sin C / c"
    ],
    "answer": 1
  },
  {
    "question": "In a right-angled triangle, the sine of an angle is defined as:",
    "options": [
      "Adjacent / Hypotenuse",
      "Opposite / Hypotenuse",
      "Opposite / Adjacent",
      "Hypotenuse / Opposite"
    ],
    "answer": 1
  },
  {
    "question": "In a right-angled triangle, the cosine of an angle is defined as:",
    "options": [
      "Opposite / Adjacent",
      "Adjacent / Hypotenuse",
      "Opposite / Hypotenuse",
      "Hypotenuse / Adjacent"
    ],
    "answer": 1
  },
  {
    "question": "In a right-angled triangle, the tangent of an angle is defined as:",
    "options": [
      "Adjacent / Hypotenuse",
      "Opposite / Hypotenuse",
      "Opposite / Adjacent",
      "Hypotenuse / Adjacent"
    ],
    "answer": 2
  },
  {
    "question": "The sum of the angles in a triangle is:",
    "options": [
      "90 degrees",
      "180 degrees",
      "270 degrees",
      "360 degrees"
    ],
    "answer": 1
  },
  {
    "question": "The equation of a straight line in slope-intercept form is:",
    "options": [
      "y = mx + c",
      "y - y₁ = m(x - x₁)",
      "Ax + By + C = 0",
      "y - c = m(x - x)"
    ],
    "answer": 0
  },
  {
    "question": "The slope of a horizontal line is:",
    "options": [
      "Undefined",
      "1",
      "-1",
      "0"
    ],
    "answer": 3
  },
  {
    "question": "The slope of a vertical line is:",
    "options": [
      "0",
      "1",
      "-1",
      "Undefined"
    ],
    "answer": 3
  },
  {
    "question": "The distance from the origin (0,0) to the point (x,y) is given by:",
    "options": [
      "√(x² - y²)",
      "x² + y²",
      "√(x² + y²)",
      "√(x + y)"
    ],
    "answer": 2
  },
  {
    "question": "The equation of a parabola with vertex at the origin and opening upwards is:",
    "options": [
      "x² = 4ay",
      "y² = 4ax",
      "x² = -4ay",
      "y² = -4ax"
    ],
    "answer": 0
  },
  {
    "question": "The equation of an ellipse with center at the origin is:",
    "options": [
      "x²/a² + y²/b² = 1",
      "x²/a² - y²/b² = 1",
      "x² + y² = 1",
      "y² / a² + x² / b² = 1"
    ],
    "answer": 0
  },
  {
    "question": "The equation of a hyperbola with center at the origin is:",
    "options": [
      "x²/a² + y²/b² = 1",
      "x²/a² - y²/b² = 1",
      "x² + y² = 1",
      "y² / a² + x² / b² = 1"
    ],
    "answer": 1
  },
  {
    "question": "The eccentricity of a circle is:",
    "options": [
      "e > 1",
      "e = 1",
      "e < 1",
      "e = 0"
    ],
    "answer": 3
  },
  {
    "question": "The eccentricity of a parabola is:",
    "options": [
      "e > 1",
      "e = 1",
      "e < 1",
      "e = 0"
    ],
    "answer": 1
  },
  {
    "question": "The eccentricity of an ellipse is:",
    "options": [
      "e = 1",
      "e < 1",
      "e > 1",
      "e = 0"
    ],
    "answer": 1
  },
  {
    "question": "The eccentricity of a hyperbola is:",
    "options": [
      "e < 1",
      "e = 1",
      "e > 1",
      "e = 0"
    ],
    "answer": 2
  },
  {
    "question": "The equation of a plane in three-dimensional space is of the form:",
    "options": [
      "Ax + By + Cz + D = 0",
      "Ax + By + D = 0",
      "x² + y² + z² = r²",
      "y = mx + c"
    ],
    "answer": 0
  },
  {
    "question": "The distance between two parallel planes Ax + By + Cz + D₁ = 0 and Ax + By + Cz + D₂ = 0 is:",
    "options": [
      "|D₂ - D₁| / √(A² + B² + C²)",
      "|D₂ + D₁| / √(A² + B² + C²)",
      "|D₂ - D₁|",
      "|D₂ + D₁|"
    ],
    "answer": 0
  },
  {
    "question": "A vector is a quantity that has:",
    "options": [
      "Magnitude only",
      "Direction only",
      "Magnitude and direction",
      "None of the above"
    ],
    "answer": 2
  },
  {
    "question": "A scalar is a quantity that has:",
    "options": [
      "Magnitude and direction",
      "Direction only",
      "Magnitude only",
      "None of the above"
    ],
    "answer": 2
  },
  {
    "question": "The dot product of two vectors A and B is defined as:",
    "options": [
      "|A||B|sinθ",
      "|A||B|cosθ",
      "|A||B|tanθ",
      "|A||B|secθ"
    ],
    "answer": 1
  },
  {
    "question": "The cross product of two vectors A and B is defined as:",
    "options": [
      "|A||B|cosθ",
      "|A||B|sinθ",
      "|A||B|tanθ",
      "|A||B|secθ"
    ],
    "answer": 1
  },
  {
    "question": "The magnitude of a vector V = <x, y, z> is:",
    "options": [
      "√(x² + y² + z²)",
      "x + y + z",
      "√(x + y + z)",
      "x² + y² + z²"
    ],
    "answer": 0
  },
  {
    "question": "The angle between two vectors A and B can be found using the formula:",
    "options": [
      "cosθ = (A . B) / (|A||B|)",
      "sinθ = (A . B) / (|A||B|)",
      "tanθ = (A . B) / (|A||B|)",
      "secθ = (A . B) / (|A||B|)"
    ],
    "answer": 0
  },
  {
    "question": "The limit of (sin x) / x as x approaches 0 is:",
    "options": [
      "0",
      "1",
      "-1",
      "Undefined"
    ],
    "answer": 1
  },
  {
    "question": "The limit of (eˣ - 1) / x as x approaches 0 is:",
    "options": [
      "0",
      "1",
      "-1",
      "Undefined"
    ],
    "answer": 1
  },
  {
    "question": "L'Hopital's Rule is used to evaluate limits of the indeterminate forms:",
    "options": [
      "0/0 or ∞/∞",
      "0*∞",
      "∞ - ∞",
      "All of the above"
    ],
    "answer": 0
  },
  {
    "question": "A series is said to converge if its sequence of partial sums has a:",
    "options": [
      "Limit of zero",
      "Limit of one",
      "Finite limit",
      "Infinite limit"
    ],
    "answer": 2
  },
  {
    "question": "The ratio test for convergence of a series Σaₙ states that if lim |aₙ₊₁/aₙ| < 1, the series:",
    "options": [
      "Diverges",
      "Converges absolutely",
      "Converges conditionally",
      "Is inconclusive"
    ],
    "answer": 1
  },
  {
    "question": "The integral test for convergence of a series can be used if the function is:",
    "options": [
      "Continuous, positive, and increasing",
      "Continuous, positive, and decreasing",
      "Discontinuous, positive, and increasing",
      "Continuous, negative, and decreasing"
    ],
    "answer": 1
  },
  {
    "question": "A Taylor series expansion of a function f(x) about x = a is:",
    "options": [
      "Σ(fⁿ(a) / n!) * (x-a)ⁿ",
      "Σ(f(a) / n!) * (x-a)ⁿ",
      "Σ(fⁿ(x) / n!) * (x-a)ⁿ",
      "Σ(f(a) / n!) * (x)ⁿ"
    ],
    "answer": 0
  },
  {
    "question": "The Maclaurin series is a special case of the Taylor series when a =:",
    "options": [
      "1",
      "-1",
      "0",
      "infinity"
    ],
    "answer": 2
  },
  {
    "question": "The probability of an event E is given by:",
    "options": [
      "Number of favorable outcomes / Total number of outcomes",
      "Total number of outcomes / Number of favorable outcomes",
      "Number of unfavorable outcomes / Total number of outcomes",
      "Number of favorable outcomes + Number of unfavorable outcomes"
    ],
    "answer": 0
  },
  {
    "question": "If events A and B are mutually exclusive, then P(A and B) is:",
    "options": [
      "P(A) * P(B)",
      "P(A) + P(B)",
      "0",
      "1"
    ],
    "answer": 2
  },
  {
    "question": "The standard deviation is the square root of the:",
    "options": [
      "Mean",
      "Median",
      "Mode",
      "Variance"
    ],
    "answer": 3
  },
  {
    "question": "In a normal distribution, the mean, median, and mode are:",
    "options": [
      "All different",
      "All equal",
      "Always positive",
      "Always negative"
    ],
    "answer": 1
  },
  {
    "question": "A permutation is an arrangement of objects where the order:",
    "options": [
      "Does not matter",
      "Matters",
      "Is irrelevant",
      "Is always decreasing"
    ],
    "answer": 1
  },
  {
    "question": "A combination is a selection of objects where the order:",
    "options": [
      "Matters",
      "Does not matter",
      "Is irrelevant",
      "Is always increasing"
    ],
    "answer": 1
  },
  {
    "question": "The binomial theorem is used to expand expressions of the form:",
    "options": [
      "(a + b)ⁿ",
      "aⁿ + bⁿ",
      "(a - b)ⁿ",
      "(a + b)⁻ⁿ"
    ],
    "answer": 0
  },
  {
    "question": "The area of a circle with radius r is given by:",
    "options": [
      "πr",
      "2πr",
      "πr²",
      "πd"
    ],
    "answer": 2
  },
  {
    "question": "The circumference of a circle with radius r is given by:",
    "options": [
      "πr²",
      "2πr",
      "πd",
      "2πr²"
    ],
    "answer": 1
  },
  {
    "question": "The volume of a sphere with radius r is:",
    "options": [
      "πr³",
      "(4/3)πr³",
      "(1/3)πr³",
      "4πr²"
    ],
    "answer": 1
  },
  {
    "question": "The volume of a cylinder with radius r and height h is:",
    "options": [
      "πr²h",
      "2πrh",
      "(1/3)πr²h",
      "πdh"
    ],
    "answer": 0
  },
  {
    "question": "The Pythagorean theorem for a right-angled triangle with sides a, b and hypotenuse c is:",
    "options": [
      "a² + b² = c²",
      "a + b = c",
      "a² - b² = c²",
      "a + b² = c²"
    ],
    "answer": 0
  },
  {
    "question": "The equation of a sine wave is of the form:",
    "options": [
      "y = A sin(Bx + C) + D",
      "y = A cos(Bx + C) + D",
      "y = A tan(Bx + C) + D",
      "y = A cot(Bx + C) + D"
    ],
    "answer": 0
  },
  {
    "question": "The period of the function y = A sin(Bx) is:",
    "options": [
      "2π / B",
      "B / 2π",
      "2πB",
      "B"
    ],
    "answer": 0
  },
  {
    "question": "The amplitude of the function y = A sin(Bx) is:",
    "options": [
      "B",
      "A",
      "2π",
      "2π / B"
    ],
    "answer": 1
  },
  {
    "question": "The factorial of a non-negative integer 'n' is denoted by:",
    "options": [
      "n!",
      "n⁻¹",
      "√n",
      "n"
    ],
    "answer": 0
  },
  {
    "question": "The value of 0! (zero factorial) is:",
    "options": [
      "0",
      "1",
      "Undefined",
      "Infinite"
    ],
    "answer": 1
  },
  {
    "question": "The absolute value of a number 'x' is its distance from:",
    "options": [
      "1",
      "x",
      "-1",
      "0"
    ],
    "answer": 3
  },
  {
    "question": "A polynomial is an expression consisting of variables and coefficients, involving only the operations of addition, subtraction, multiplication, and non-negative integer exponents of variables. Which of the following is NOT a polynomial?",
    "options": [
      "x² + 2x + 1",
      "√x + 5",
      "3x³ - 2",
      "7"
    ],
    "answer": 1
  },
  {
    "question": "The degree of a polynomial is the:",
    "options": [
      "Highest power of the variable in the polynomial",
      "Number of terms in the polynomial",
      "Sum of the powers of the variables in the polynomial",
      "Lowest power of the variable in the polynomial"
    ],
    "answer": 0
  },
  {
    "question": "The solutions or roots of a quadratic equation ax² + bx + c = 0 are given by the formula:",
    "options": [
      "x = (-b ± √(b² - 4ac)) / (2a)",
      "x = (b ± √(b² - 4ac)) / (2a)",
      "x = (-b ± √(b² + 4ac)) / (2a)",
      "x = (b ± √(b² + 4ac)) / (2a)"
    ],
    "answer": 0
  },
  {
    "question": "The discriminant of a quadratic equation (b² - 4ac) determines the:",
    "options": [
      "Number and type of roots",
      "Degree of the polynomial",
      "Intercepts of the graph",
      "Slope of the graph"
    ],
    "answer": 0
  },
  {
    "question": "If the discriminant of a quadratic equation is negative, the roots are:",
    "options": [
      "Real and equal",
      "Real and unequal",
      "Imaginary (complex)",
      "No solution"
    ],
    "answer": 2
  },
  {
    "question": "An arithmetic progression (AP) is a sequence of numbers where the difference between consecutive terms is:",
    "options": [
      "Constant",
      "Variable",
      "Zero",
      "Positive"
    ],
    "answer": 0
  },
  {
    "question": "A geometric progression (GP) is a sequence of numbers where each term after the first is found by multiplying the previous one by a fixed, non-zero number called the:",
    "options": [
      "Common difference",
      "Common ratio",
      "Common term",
      "Common factor"
    ],
    "answer": 1
  },
  {
    "question": "The sum of the first 'n' terms of an arithmetic progression is given by:",
    "options": [
      "Sₙ = n/2 * (2a + (n-1)d)",
      "Sₙ = n/2 * (a + l)",
      "Sₙ = n/2 * (a + d)",
      "Sₙ = n/2 * (2a + nd)"
    ],
    "answer": 0
  },
  {
    "question": "The sum of an infinite geometric series with common ratio 'r' (where |r| < 1) is given by:",
    "options": [
      "S = a / (1 - r)",
      "S = a / (1 + r)",
      "S = a * r",
      "S = a / r"
    ],
    "answer": 0
  },
  {
    "question": "The term 'logarithm' is derived from the Greek words 'logos' and 'arithmos', meaning:",
    "options": [
      "Ratio number",
      "Number ratio",
      "Log number",
      "Arithmetic number"
    ],
    "answer": 1
  },
  {
    "question": "The logarithm of a number 'x' to the base 'b' (logₙ x) is the exponent to which 'b' must be raised to produce 'x'. Which of the following is equivalent to bʸ = x?",
    "options": [
      "y = logₓ b",
      "y = logᵧ x",
      "y = logₓ y",
      "y = logₙ x"
    ],
    "answer": 3
  },
  {
    "question": "The product rule for logarithms is:",
    "options": [
      "logₙ (xy) = logₙ x + logₙ y",
      "logₙ (x/y) = logₙ x - logₙ y",
      "logₙ (xⁿ) = n logₙ x",
      "logₙ x = logᵧ x / logᵧ b"
    ],
    "answer": 0
  },
  {
    "question": "The quotient rule for logarithms is:",
    "options": [
      "logₙ (x/y) = logₙ x - logₙ y",
      "logₙ (xy) = logₙ x + logₙ y",
      "logₙ (xⁿ) = n logₙ x",
      "logₙ x = logᵧ x / logᵧ b"
    ],
    "answer": 0
  },
  {
    "question": "The change of base formula for logarithms is:",
    "options": [
      "logₙ x = logᵧ x * logᵧ b",
      "logₙ x = logᵧ x / logᵧ b",
      "logₙ x = logᵧ b / logᵧ x",
      "logₙ x = logᵧ b * logᵧ x"
    ],
    "answer": 1
  },
  {
    "question": "A differential equation is an equation that contains:",
    "options": [
      "Derivatives of a function",
      "Integrals of a function",
      "Limits of a function",
      "None of the above"
    ],
    "answer": 0
  },
  {
    "question": "A separable differential equation can be written in the form:",
    "options": [
      "dy/dx = f(x) + g(y)",
      "dy/dx = f(x) * g(y)",
      "dy/dx = f(x) / g(y)",
      "dy/dx = f(y) / g(x)"
    ],
    "answer": 1
  },
  {
    "question": "The general solution to a differential equation contains:",
    "options": [
      "A specific value for the constant of integration",
      "No constant of integration",
      "An arbitrary constant of integration",
      "Multiple constants of integration"
    ],
    "answer": 2
  },
  {
    "question": "A first-order linear differential equation is of the form:",
    "options": [
      "y' + p(x)y = q(x)",
      "y' + p(x) = q(x)",
      "y' * p(x) = q(x)",
      "y' / p(x) = q(x)"
    ],
    "answer": 0
  },
  {
    "question": "To solve a first-order linear differential equation, you can use an integrating factor, which is given by:",
    "options": [
      "e^(∫p(x) dx)",
      "e^(∫q(x) dx)",
      "∫p(x) dx",
      "∫q(x) dx"
    ],
    "answer": 0
  },
  {
    "question": "The volume of a cone with radius r and height h is:",
    "options": [
      "πr²h",
      "(1/3)πr²h",
      "2πrh",
      "πr²"
    ],
    "answer": 1
  },
  {
    "question": "The surface area of a sphere with radius r is:",
    "options": [
      "πr²",
      "4πr²",
      "(4/3)πr³",
      "2πr"
    ],
    "answer": 1
  },
  {
    "question": "The sum of the angles in a quadrilateral is:",
    "options": [
      "90 degrees",
      "180 degrees",
      "270 degrees",
      "360 degrees"
    ],
    "answer": 3
  },
  {
    "question": "The distance formula in three-dimensional space for points (x₁, y₁, z₁) and (x₂, y₂, z₂) is:",
    "options": [
      "√((x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²)",
      "√((x₂+x₁)² + (y₂+y₁)² + (z₂+z₁)²)",
      "(x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²",
      "|x₂-x₁| + |y₂-y₁| + |z₂-z₁|"
    ],
    "answer": 0
  },
  {
    "question": "The midpoint formula in three-dimensional space for points (x₁, y₁, z₁) and (x₂, y₂, z₂) is:",
    "options": [
      "((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2)",
      "((x₂-x₁)/2, (y₂-y₁)/2, (z₂-z₁)/2)",
      "(x₁+x₂, y₁+y₂, z₁+z₂)",
      "(x₂-x₁, y₂-y₁, z₂-z₁)"
    ],
    "answer": 0
  },
  {
    "question": "A system of linear equations with the same number of equations as variables and a non-zero determinant has:",
    "options": [
      "No solution",
      "Infinitely many solutions",
      "A unique solution",
      "More than one solution"
    ],
    "answer": 2
  },
  {
    "question": "The area of a triangle with base 'b' and height 'h' is:",
    "options": [
      "b * h",
      "2 * b * h",
      "(1/2) * b * h",
      "b + h"
    ],
    "answer": 2
  },
  {
    "question": "The surface area of a cylinder with radius r and height h is:",
    "options": [
      "2πr(r + h)",
      "2πrh",
      "πr²h",
      "2πr²"
    ],
    "answer": 0
  },
  {
    "question": "The volume of a rectangular prism with length l, width w, and height h is:",
    "options": [
      "l + w + h",
      "2(lw + lh + wh)",
      "l * w * h",
      "lwh"
    ],
    "answer": 2
  },
  {
    "question": "The area of a trapezoid with parallel sides a and b and height h is:",
    "options": [
      "h * (a + b)",
      "(1/2) * h * (a + b)",
      "a * b * h",
      "(a + b) / h"
    ],
    "answer": 1
  },
  {
    "question": "The inverse sine function, arcsin(x), has a range of:",
    "options": [
      "(-π/2, π/2)",
      "[-π/2, π/2]",
      "[0, π]",
      "(0, π)"
    ],
    "answer": 1
  },
  {
    "question": "The inverse cosine function, arccos(x), has a range of:",
    "options": [
      "[-π/2, π/2]",
      "[0, π]",
      "(-π/2, π/2)",
      "(0, π)"
    ],
    "answer": 1
  },
  {
    "question": "The inverse tangent function, arctan(x), has a range of:",
    "options": [
      "[-π/2, π/2]",
      "(-π/2, π/2)",
      "[0, π]",
      "(0, π)"
    ],
    "answer": 1
  },
  {
    "question": "The period of the tangent function tan(x) is:",
    "options": [
      "2π",
      "π",
      "π/2",
      "4π"
    ],
    "answer": 1
  },
  {
    "question": "The derivative of sec(x) is:",
    "options": [
      "tan(x)sec(x)",
      "sec(x)cot(x)",
      "csc(x)cot(x)",
      "sec²(x)"
    ],
    "answer": 0
  },
  {
    "question": "The derivative of csc(x) is:",
    "options": [
      "-csc(x)cot(x)",
      "csc(x)cot(x)",
      "sec(x)tan(x)",
      "tan(x)"
    ],
    "answer": 0
  },
  {
    "question": "The integral of sec²(x) is:",
    "options": [
      "tan(x) + C",
      "cot(x) + C",
      "sec(x) + C",
      "csc(x) + C"
    ],
    "answer": 0
  },
  {
    "question": "The integral of csc²(x) is:",
    "options": [
      "cot(x) + C",
      "-cot(x) + C",
      "tan(x) + C",
      "-tan(x) + C"
    ],
    "answer": 1
  },
  {
    "question": "The integral of 1 / (1 + x²) is:",
    "options": [
      "arctan(x) + C",
      "tan(x) + C",
      "arcsin(x) + C",
      "ln(1 + x²) + C"
    ],
    "answer": 0
  },
  {
    "question": "The integral of 1 / √(1 - x²) is:",
    "options": [
      "arctan(x) + C",
      "tan(x) + C",
      "arcsin(x) + C",
      "ln(1 + x²) + C"
    ],
    "answer": 2
  },
  {
    "question": "The sum of the series 1 + x + x²/2! + x³/3! + ... is the Maclaurin series for:",
    "options": [
      "eˣ",
      "sin(x)",
      "cos(x)",
      "ln(1+x)"
    ],
    "answer": 0
  },
  {
    "question": "The Maclaurin series for sin(x) is:",
    "options": [
      "x - x³/3! + x⁵/5! - ...",
      "1 - x²/2! + x⁴/4! - ...",
      "x + x³/3! + x⁵/5! + ...",
      "1 + x + x²/2! + ..."
    ],
    "answer": 0
  },
  {
    "question": "The Maclaurin series for cos(x) is:",
    "options": [
      "x - x³/3! + x⁵/5! - ...",
      "1 - x²/2! + x⁴/4! - ...",
      "x + x³/3! + x⁵/5! + ...",
      "1 + x + x²/2! + ..."
    ],
    "answer": 1
  },
  {
    "question": "The probability of an event 'A' or 'B' (mutually exclusive) is:",
    "options": [
      "P(A) + P(B)",
      "P(A) * P(B)",
      "P(A) - P(B)",
      "P(A) / P(B)"
    ],
    "answer": 0
  },
  {
    "question": "The probability of an event 'A' or 'B' (not mutually exclusive) is:",
    "options": [
      "P(A) + P(B)",
      "P(A) + P(B) - P(A and B)",
      "P(A) * P(B)",
      "P(A) * P(B) - P(A and B)"
    ],
    "answer": 1
  },
  {
    "question": "The conditional probability of event 'A' given event 'B' is:",
    "options": [
      "P(A | B) = P(A and B) / P(B)",
      "P(A | B) = P(A and B) * P(B)",
      "P(A | B) = P(B) / P(A and B)",
      "P(A | B) = P(A) / P(B)"
    ],
    "answer": 0
  },
  {
    "question": "The mean of a data set is the:",
    "options": [
      "Middle value",
      "Most frequent value",
      "Average value",
      "Range of the data"
    ],
    "answer": 2
  },
  {
    "question": "The median of a data set is the:",
    "options": [
      "Average value",
      "Most frequent value",
      "Middle value",
      "Range of the data"
    ],
    "answer": 2
  },
  {
    "question": "The mode of a data set is the:",
    "options": [
      "Middle value",
      "Average value",
      "Most frequent value",
      "Range of the data"
    ],
    "answer": 2
  },
  {
    "question": "The range of a data set is the difference between the:",
    "options": [
      "Mean and median",
      "Highest and lowest values",
      "Median and mode",
      "Mean and mode"
    ],
    "answer": 1
  },
  {
    "question": "The area of a sector of a circle with radius r and central angle θ (in radians) is:",
    "options": [
      "(1/2) * r² * θ",
      "r * θ",
      "πr² * θ",
      "r² * θ"
    ],
    "answer": 0
  },
  {
    "question": "The arc length of a sector of a circle with radius r and central angle θ (in radians) is:",
    "options": [
      "r * θ",
      "(1/2) * r² * θ",
      "πr² * θ",
      "r² * θ"
    ],
    "answer": 0
  },
  {
    "question": "The sum of an arithmetic series is a formula that can be used to find the sum of a sequence of numbers where each term after the first is obtained by adding a constant, non-zero number to the preceding term. What is the formula to find the sum of the first 'n' terms of an arithmetic progression?",
    "options": [
      "Sₙ = n/2 * (2a + (n-1)d)",
      "Sₙ = n/2 * (a + l)",
      "Sₙ = n/2 * (a + d)",
      "Sₙ = n/2 * (2a + nd)"
    ],
    "answer": 0
  },
  {
    "question": "The product rule for derivatives is used to find the derivative of a product of two functions. What is the formula for the product rule?",
    "options": [
      "u'v + uv'",
      "u'v - uv'",
      "uv' + u'v'",
      "uv - u'v'"
    ],
    "answer": 0
  },
  {
    "question": "The quotient rule for derivatives is used to find the derivative of a quotient of two functions. What is the formula for the quotient rule?",
    "options": [
      "(u'v - uv') / v²",
      "(u'v + uv') / v²",
      "(uv' - u'v) / v²",
      "(u'v + uv) / v²"
    ],
    "answer": 0
  },
  {
    "question": "The chain rule for derivatives is used to find the derivative of a composite function. What is the formula for the chain rule?",
    "options": [
      "f'(x) * g'(x)",
      "f'(g(x)) * g'(x)",
      "f(x) * g(x)",
      "f'(x) * g(x)"
    ],
    "answer": 1
  },
  {
    "question": "The Fundamental Theorem of Calculus connects the concept of differentiation with the concept of integration. What does the first part of the theorem state?",
    "options": [
      "The integral of a function is the derivative of its antiderivative.",
      "The derivative of a function is the integral of its antiderivative.",
      "The derivative of the definite integral of a function is the original function.",
      "The definite integral of a function is its antiderivative."
    ],
    "answer": 2
  },
  {
    "question": "The second part of the Fundamental Theorem of Calculus provides a method for evaluating definite integrals. What does the second part state?",
    "options": [
      "The definite integral of a function is the difference between the values of its antiderivative at the upper and lower limits of integration.",
      "The definite integral of a function is the sum of the values of its antiderivative at the upper and lower limits of integration.",
      "The definite integral of a function is the derivative of its antiderivative.",
      "The definite integral of a function is the value of its antiderivative at the upper limit of integration."
    ],
    "answer": 0
  },
  {
    "question": "The shell method and the disk/washer method are techniques for finding the volume of a solid of revolution. The shell method is often preferred when:",
    "options": [
      "The axis of revolution is parallel to the axis of integration.",
      "The axis of revolution is perpendicular to the axis of integration.",
      "The region is rotated about the x-axis.",
      "The region is rotated about the y-axis."
    ],
    "answer": 0
  },
  {
    "question": "L'Hopital's rule is a method for evaluating limits of indeterminate forms, such as 0/0 or ∞/∞. What does the rule state?",
    "options": [
      "The limit of a quotient of two functions is equal to the limit of the quotient of their derivatives.",
      "The limit of a sum of two functions is equal to the sum of their limits.",
      "The limit of a product of two functions is equal to the product of their limits.",
      "The limit of a quotient of two functions is equal to the quotient of their limits."
    ],
    "answer": 0
  },
  {
    "question": "The concept of 'inflection point' relates to the second derivative of a function. An inflection point is a point on a curve where the:",
    "options": [
      "First derivative is zero.",
      "Second derivative is zero or undefined and the concavity changes.",
      "First derivative is a maximum or minimum.",
      "Second derivative is always positive."
    ],
    "answer": 1
  },
  {
    "question": "The derivative of a function represents the slope of the tangent line to the graph of the function. What does a positive first derivative indicate?",
    "options": [
      "The function is decreasing.",
      "The function is increasing.",
      "The function has a local maximum.",
      "The function has a local minimum."
    ],
    "answer": 1
  },
  {
    "question": "The derivative of a function represents the slope of the tangent line to the graph of the function. What does a negative first derivative indicate?",
    "options": [
      "The function is decreasing.",
      "The function is increasing.",
      "The function has a local maximum.",
      "The function has a local minimum."
    ],
    "answer": 0
  },
  {
    "question": "A local maximum or minimum of a function is a point where the first derivative is zero or undefined. Such points are called:",
    "options": [
      "Inflection points",
      "Critical points",
      "Saddle points",
      "Extrema"
    ],
    "answer": 1
  },
  {
    "question": "A second derivative test is a method used to determine whether a critical point corresponds to a local maximum or minimum. If the second derivative at a critical point 'c' is positive (f''(c) > 0), the point is a:",
    "options": [
      "Local maximum",
      "Local minimum",
      "Inflection point",
      "Saddle point"
    ],
    "answer": 1
  },
  {
    "question": "A second derivative test is a method used to determine whether a critical point corresponds to a local maximum or minimum. If the second derivative at a critical point 'c' is negative (f''(c) < 0), the point is a:",
    "options": [
      "Local maximum",
      "Local minimum",
      "Inflection point",
      "Saddle point"
    ],
    "answer": 0
  },
  {
    "question": "The average value of a function f(x) on the interval [a, b] is given by the formula:",
    "options": [
      "(1/(b-a)) * ∫[a,b] f(x) dx",
      "(b-a) * ∫[a,b] f(x) dx",
      "∫[a,b] f(x) dx",
      "(1/(b+a)) * ∫[a,b] f(x) dx"
    ],
    "answer": 0
  },
  {
    "question": "Integration by parts is a technique for integrating a product of two functions. The formula for integration by parts is:",
    "options": [
      "∫u dv = uv - ∫v du",
      "∫u dv = uv + ∫v du",
      "∫u dv = uv - ∫u dv",
      "∫u dv = uv + ∫u dv"
    ],
    "answer": 0
  },
  {
    "question": "The method of partial fractions is a technique used in integration to decompose a rational function into a sum of simpler rational functions. This method is used when the degree of the numerator is:",
    "options": [
      "Greater than the degree of the denominator.",
      "Less than the degree of the denominator.",
      "Equal to the degree of the denominator.",
      "Any of the above."
    ],
    "answer": 1
  },
  {
    "question": "The surface area of a cone with radius r and slant height s is:",
    "options": [
      "πr²",
      "πr(r + s)",
      "2πr",
      "πrs"
    ],
    "answer": 1
  },
  {
    "question": "The arc length of a curve defined by a function y = f(x) from x = a to x = b is given by the integral formula:",
    "options": [
      "∫[a,b] √(1 + (f'(x))²) dx",
      "∫[a,b] √(1 - (f'(x))²) dx",
      "∫[a,b] (1 + f'(x)) dx",
      "∫[a,b] (1 - f'(x)) dx"
    ],
    "answer": 0
  },
  {
    "question": "The surface area of a solid of revolution is the area of the surface generated by rotating a curve about an axis. The formula for the surface area generated by rotating a curve y = f(x) from x = a to x = b about the x-axis is:",
    "options": [
      "∫[a,b] 2πy √(1 + (f'(x))²) dx",
      "∫[a,b] 2πy (1 + f'(x)) dx",
      "∫[a,b] 2πx √(1 + (f'(x))²) dx",
      "∫[a,b] 2πx (1 + f'(x)) dx"
    ],
    "answer": 0
  },
  {
    "question": "The polar form of a complex number z = x + iy is given by z = r(cos θ + i sin θ). The relationship between the Cartesian coordinates (x, y) and the polar coordinates (r, θ) is:",
    "options": [
      "x = r sin θ, y = r cos θ",
      "x = r cos θ, y = r sin θ",
      "r = x + y, θ = x/y",
      "r = xy, θ = tan(x/y)"
    ],
    "answer": 1
  },
  {
    "question": "The De Moivre's theorem is used to find the powers and roots of complex numbers in polar form. What does the theorem state?",
    "options": [
      "(cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ)",
      "(cos θ + i sin θ)ⁿ = cos(nθ) - i sin(nθ)",
      "(cos θ + i sin θ)ⁿ = n cos θ + n i sin θ",
      "(cos θ + i sin θ)ⁿ = cos θ + i sin(nθ)"
    ],
    "answer": 0
  },
  {
    "question": "A limit exists if the left-hand limit and the right-hand limit are equal and finite. What does the left-hand limit of a function f(x) as x approaches 'c' from the left mean?",
    "options": [
      "The value the function approaches as x gets closer to 'c' from values less than 'c'.",
      "The value the function approaches as x gets closer to 'c' from values greater than 'c'.",
      "The value of the function at 'c'.",
      "The derivative of the function at 'c'."
    ],
    "answer": 0
  },
  {
    "question": "The derivative of a function at a point gives the instantaneous rate of change of the function at that point. What does the derivative of a function represent in terms of the graph?",
    "options": [
      "The area under the curve.",
      "The volume of the curve.",
      "The slope of the tangent line to the curve at that point.",
      "The intercept of the curve."
    ],
    "answer": 2
  },
  {
    "question": "A definite integral represents the signed area of the region bounded by the graph of a function, the x-axis, and two vertical lines. What does the definite integral of a function f(x) from x = a to x = b represent?",
    "options": [
      "The instantaneous rate of change of the function.",
      "The total accumulated change of the function over the interval [a, b].",
      "The slope of the tangent line to the curve.",
      "The average value of the function."
    ],
    "answer": 1
  },
  {
    "question": "The Maclaurin series for eˣ is a series expansion of the function eˣ about x = 0. What is the Maclaurin series for eˣ?",
    "options": [
      "1 + x + x²/2! + x³/3! + ...",
      "x - x³/3! + x⁵/5! - ...",
      "1 - x²/2! + x⁴/4! - ...",
      "1 + x - x²/2! - x³/3! + ..."
    ],
    "answer": 0
  },
  {
    "question": "The law of sines is a relationship between the sides and angles of a triangle. What is the law of sines for a triangle with angles A, B, C and opposite sides a, b, c?",
    "options": [
      "a/sin A = b/sin B = c/sin C",
      "a² = b² + c² - 2bc cos A",
      "a/cos A = b/cos B = c/cos C",
      "sin A / a = sin B / b = sin C / c"
    ],
    "answer": 0
  },
  {
    "question": "The law of cosines is a generalization of the Pythagorean theorem. What is the law of cosines for a triangle with sides a, b, c and opposite angle A?",
    "options": [
      "a² = b² + c² - 2bc sin A",
      "a² = b² + c² - 2bc cos A",
      "a² = b² + c² + 2bc cos A",
      "sin A / a = sin B / b = sin C / c"
    ],
    "answer": 1
  },
  {
    "question": "The equation of a parabola with vertex at the origin and focus at (0, a) is:",
    "options": [
      "x² = 4ay",
      "y² = 4ax",
      "x² = -4ay",
      "y² = -4ax"
    ],
    "answer": 0
  },
  {
    "question": "The equation of an ellipse with center at the origin and foci on the x-axis is:",
    "options": [
      "x²/a² + y²/b² = 1",
      "x²/a² - y²/b² = 1",
      "x² + y² = 1",
      "y² / a² + x² / b² = 1"
    ],
    "answer": 0
  },
  {
    "question": "The equation of a hyperbola with center at the origin and foci on the x-axis is:",
    "options": [
      "x²/a² + y²/b² = 1",
      "x²/a² - y²/b² = 1",
      "x² + y² = 1",
      "y² / a² + x² / b² = 1"
    ],
    "answer": 1
  },
  {
    "question": "The distance between two points P₁(x₁, y₁) and P₂(x₂, y₂) is given by the distance formula. What is the formula?",
    "options": [
      "√((x₂ - x₁)² + (y₂ - y₁)²) ",
      "(x₂ - x₁) + (y₂ - y₁)",
      "√((x₂ + x₁)² + (y₂ + y₁)²) ",
      "(x₂ - x₁)² + (y₂ - y₁)²"
    ],
    "answer": 0
  },
  {
    "question": "The coordinates of the midpoint of the line segment joining points (x₁, y₁) and (x₂, y₂) are given by the midpoint formula. What is the formula?",
    "options": [
      "((x₁ + x₂)/2, (y₁ + y₂)/2)",
      "(x₁ + x₂, y₁ + y₂)",
      "((x₂ - x₁)/2, (y₂ - y₁)/2)",
      "(x₂ - x₁, y₂ - y₁)"
    ],
    "answer": 0
  },
  {
    "question": "A vector is a quantity that has magnitude and direction. What is the dot product of two vectors, A and B, defined as?",
    "options": [
      "|A||B|sinθ",
      "|A||B|cosθ",
      "|A||B|tanθ",
      "|A||B|secθ"
    ],
    "answer": 1
  },
  {
    "question": "The cross product of two vectors A and B is a vector that is perpendicular to both A and B. What is the magnitude of the cross product of two vectors, A and B, defined as?",
    "options": [
      "|A||B|cosθ",
      "|A||B|sinθ",
      "|A||B|tanθ",
      "|A||B|secθ"
    ],
    "answer": 1
  },
  {
    "question": "The equation of a plane in three-dimensional space is given by Ax + By + Cz + D = 0. The vector <A, B, C> is a:",
    "options": [
      "Tangent vector to the plane.",
      "Normal vector to the plane.",
      "Parallel vector to the plane.",
      "Direction vector of the plane."
    ],
    "answer": 1
  },
  {
    "question": "The distance from a point (x₀, y₀, z₀) to a plane Ax + By + Cz + D = 0 is given by the formula:",
    "options": [
      "|Ax₀ + By₀ + Cz₀ + D| / √(A² + B² + C²)",
      "|Ax₀ + By₀ + Cz₀| / √(A² + B² + C²)",
      "|Ax₀ + By₀ + Cz₀ + D|",
      "|D| / √(A² + B² + C²)"
    ],
    "answer": 0
  },
  {
    "question": "A matrix is a rectangular array of numbers, symbols, or expressions arranged in rows and columns. What is the determinant of a 2x2 matrix [[a, b], [c, d]]?",
    "options": [
      "ad - bc",
      "ac - bd",
      "ab - cd",
      "ad + bc"
    ],
    "answer": 0
  },
  {
    "question": "The inverse of a matrix A, denoted as A⁻¹, is a matrix such that when multiplied by A, it yields the identity matrix. What is the condition that must be met for a matrix A to have an inverse?",
    "options": [
      "Its determinant must be zero.",
      "Its determinant must be non-zero.",
      "It must be a square matrix.",
      "It must be a rectangular matrix."
    ],
    "answer": 1
  },
  {
    "question": "The transpose of a matrix A is a new matrix whose rows are the columns of A. How is the transpose of a matrix obtained?",
    "options": [
      "By interchanging its rows and columns.",
      "By multiplying it by a scalar.",
      "By adding a matrix to it.",
      "By finding its determinant."
    ],
    "answer": 0
  },
  {
    "question": "A homogeneous system of linear equations is a system where all the constant terms are equal to zero. Such a system always has at least one solution. What is this solution called?",
    "options": [
      "Trivial solution",
      "Non-trivial solution",
      "Unique solution",
      "Infinite solution"
    ],
    "answer": 0
  },
  {
    "question": "A system of linear equations has a unique solution if the determinant of the coefficient matrix is:",
    "options": [
      "Zero",
      "One",
      "Non-zero",
      "-1"
    ],
    "answer": 2
  },
  {
    "question": "A system of linear equations has infinitely many solutions if the determinant of the coefficient matrix is:",
    "options": [
      "Non-zero",
      "Zero",
      "One",
      "-1"
    ],
    "answer": 1
  },
  {
    "question": "The law of sines is used to solve triangles where you know either two angles and a side, or two sides and a non-included angle. What is the law of sines?",
    "options": [
      "a/sin A = b/sin B = c/sin C",
      "a² = b² + c² - 2bc cos A",
      "a/cos A = b/cos B = c/cos C",
      "sin A / a = sin B / b = sin C / c"
    ],
    "answer": 0
  },
  {
    "question": "The law of cosines is used to solve triangles where you know either all three sides or two sides and the included angle. What is the law of cosines?",
    "options": [
      "a² = b² + c² - 2bc sin A",
      "a² = b² + c² - 2bc cos A",
      "a² = b² + c² + 2bc cos A",
      "sin A / a = sin B / b = sin C / c"
    ],
    "answer": 1
  },
  {
    "question": "The area of a triangle can be found using the formula A = (1/2)ab sin C. This formula requires you to know:",
    "options": [
      "Two angles and one side.",
      "All three sides.",
      "Two sides and the included angle.",
      "Two sides and a non-included angle."
    ],
    "answer": 2
  },
  {
    "question": "The term 'radix' refers to the base of a number system. What is the base of the binary number system?",
    "options": [
      "2",
      "8",
      "10",
      "16"
    ],
    "answer": 0
  },
  {
    "question": "The base of the hexadecimal number system is:",
    "options": [
      "2",
      "8",
      "10",
      "16"
    ],
    "answer": 3
  },
  {
    "question": "To convert a binary number to a decimal number, you use powers of:",
    "options": [
      "10",
      "8",
      "2",
      "16"
    ],
    "answer": 2
  },
  {
    "question": "To convert a decimal number to a binary number, you can use the method of successive division by:",
    "options": [
      "10",
      "8",
      "2",
      "16"
    ],
    "answer": 2
  },
  {
    "question": "The number system with base 8 is called:",
    "options": [
      "Binary",
      "Decimal",
      "Octal",
      "Hexadecimal"
    ],
    "answer": 2
  },
  {
    "question": "The number system with base 16 is called:",
    "options": [
      "Binary",
      "Decimal",
      "Octal",
      "Hexadecimal"
    ],
    "answer": 3
  },
  {
    "question": "In a linear programming problem, the objective function is the function to be:",
    "options": [
      "Maximized or minimized",
      "Set to zero",
      "Ignored",
      "Multiplied by a constant"
    ],
    "answer": 0
  },
  {
    "question": "The constraints in a linear programming problem are typically expressed as:",
    "options": [
      "Equations",
      "Inequalities",
      "Functions",
      "Derivatives"
    ],
    "answer": 1
  },
  {
    "question": "A feasible region in a linear programming problem is the set of all points that satisfy:",
    "options": [
      "The objective function",
      "The constraints",
      "The derivatives",
      "The integrals"
    ],
    "answer": 1
  },
  {
    "question": "The optimal solution to a linear programming problem occurs at a:",
    "options": [
      "Point inside the feasible region",
      "Vertex of the feasible region",
      "Point on the boundary of the feasible region",
      "Point outside the feasible region"
    ],
    "answer": 1
  },
  {
    "question": "The Simplex method is an algorithm for solving linear programming problems. It works by moving from one vertex of the feasible region to another until an optimal solution is reached. This method is used for problems with:",
    "options": [
      "Two variables only",
      "Three variables only",
      "Any number of variables",
      "No variables"
    ],
    "answer": 2
  },
  {
    "question": "In a statistical study, the population is:",
    "options": [
      "A subset of the sample",
      "The entire group of individuals, objects, or measurements that you want to study",
      "A small group from which data is collected",
      "The average value of the data"
    ],
    "answer": 1
  },
  {
    "question": "In a statistical study, the sample is:",
    "options": [
      "The entire group of individuals",
      "A subset of the population from which data is collected",
      "The average value of the data",
      "The standard deviation of the data"
    ],
    "answer": 1
  },
  {
    "question": "The mean of a data set is calculated by:",
    "options": [
      "Finding the middle value.",
      "Finding the most frequent value.",
      "Summing all the values and dividing by the number of values.",
      "Finding the square root of the variance."
    ],
    "answer": 2
  },
  {
    "question": "The median of a data set is the middle value when the data is ordered. If there is an even number of values, the median is:",
    "options": [
      "The average of the two middle values.",
      "The smaller of the two middle values.",
      "The larger of the two middle values.",
      "Undefined."
    ],
    "answer": 0
  },
  {
    "question": "The standard deviation measures the:",
    "options": [
      "Central tendency of the data.",
      "Spread or dispersion of the data.",
      "Median of the data.",
      "Mode of the data."
    ],
    "answer": 1
  },
  {
    "question": "A z-score is a measure of how many standard deviations a data point is from the mean. A z-score of 0 indicates that the data point is:",
    "options": [
      "One standard deviation above the mean.",
      "One standard deviation below the mean.",
      "Equal to the mean.",
      "Undefined."
    ],
    "answer": 2
  },
  {
    "question": "The derivative of a function f(x) with respect to x, denoted as f'(x) or dy/dx, measures the instantaneous rate of change of f(x) with respect to x. Which of the following is NOT a correct interpretation of the derivative?",
    "options": [
      "The slope of the tangent line to the graph of f(x).",
      "The instantaneous velocity of a moving object.",
      "The total accumulated change of f(x).",
      "The marginal cost or marginal revenue in economics."
    ],
    "answer": 2
  },
  {
    "question": "The second derivative of a function, denoted as f''(x), measures the rate of change of the first derivative. The sign of the second derivative tells us about the concavity of the function. If f''(x) > 0, the function is:",
    "options": [
      "Concave up.",
      "Concave down.",
      "Linear.",
      "Undefined."
    ],
    "answer": 0
  },
  {
    "question": "If f''(x) < 0, the function is:",
    "options": [
      "Concave up.",
      "Concave down.",
      "Linear.",
      "Undefined."
    ],
    "answer": 1
  },
  {
    "question": "The area under a curve is represented by the definite integral. If a region is bounded by a curve y = f(x), the x-axis, and the vertical lines x=a and x=b, the area is given by:",
    "options": [
      "∫[a,b] f(x) dx",
      "∫[a,b] f'(x) dx",
      "∫[a,b] f''(x) dx",
      "∫[a,b] (1/f(x)) dx"
    ],
    "answer": 0
  },
  {
    "question": "The volume of a solid of revolution can be calculated using the disk/washer method. The formula for the volume of the solid generated by rotating the region under a curve y = f(x) from x = a to x = b about the x-axis is:",
    "options": [
      "∫[a,b] π(f(x))² dx",
      "∫[a,b] π(f'(x))² dx",
      "∫[a,b] 2πx f(x) dx",
      "∫[a,b] f(x) dx"
    ],
    "answer": 0
  },
  {
    "question": "The arc length of a curve defined by y = f(x) from x = a to x = b is given by the integral formula:",
    "options": [
      "∫[a,b] √(1 + (f'(x))²) dx",
      "∫[a,b] √(1 + (f(x))²) dx",
      "∫[a,b] (1 + f'(x)) dx",
      "∫[a,b] (1 + f(x)) dx"
    ],
    "answer": 0
  },
  {
    "question": "The surface area of a solid of revolution generated by rotating a curve y = f(x) from x = a to x = b about the x-axis is given by the integral formula:",
    "options": [
      "∫[a,b] 2πy √(1 + (f'(x))²) dx",
      "∫[a,b] 2πy (1 + f'(x)) dx",
      "∫[a,b] 2πx √(1 + (f'(x))²) dx",
      "∫[a,b] 2πx (1 + f(x)) dx"
    ],
    "answer": 0
  },
  {
    "question": "The Laplace transform is an integral transform that is often used to solve differential equations. The Laplace transform of a function f(t) is defined as:",
    "options": [
      "∫[0,∞] e^(-st) * f(t) dt",
      "∫[0,∞] e^(st) * f(t) dt",
      "∫[0,∞] e^(t) * f(t) dt",
      "∫[0,∞] e^(-t) * f(t) dt"
    ],
    "answer": 0
  },
  {
    "question": "The inverse Laplace transform is the operation that converts a function in the 's-domain' back to a function in the 't-domain'. The inverse Laplace transform of F(s) is:",
    "options": [
      "L⁻¹{F(s)}",
      "L{F(s)}",
      "F(s)",
      "s * F(s)"
    ],
    "answer": 0
  },
  {
    "question": "The convolution of two functions, f(t) and g(t), is a mathematical operation that produces a third function expressing how the shape of one is modified by the other. The convolution of f(t) and g(t) is given by:",
    "options": [
      "(f * g)(t) = ∫[0,t] f(τ) * g(t-τ) dτ",
      "(f * g)(t) = ∫[0,t] f(τ) * g(τ) dτ",
      "(f * g)(t) = ∫[0,∞] f(τ) * g(t-τ) dτ",
      "(f * g)(t) = ∫[0,∞] f(τ) * g(τ) dτ"
    ],
    "answer": 0
  },
  {
    "question": "The Fourier series is an expansion of a periodic function in terms of an infinite sum of sines and cosines. This representation is useful for analyzing periodic phenomena. The Fourier series of a function f(x) with period 2L is given by:",
    "options": [
      "f(x) = a₀/2 + Σ[n=1,∞] (aₙ cos(nπx/L) + bₙ sin(nπx/L))",
      "f(x) = Σ[n=1,∞] (aₙ cos(nπx/L) + bₙ sin(nπx/L))",
      "f(x) = a₀/2 + Σ[n=1,∞] (aₙ sin(nπx/L) + bₙ cos(nπx/L))",
      "f(x) = a₀ + Σ[n=1,∞] (aₙ cos(nπx/L) + bₙ sin(nπx/L))"
    ],
    "answer": 0
  },
  {
    "question": "The complex Fourier series of a function f(x) with period 2L is given by:",
    "options": [
      "f(x) = Σ[n=-∞,∞] cₙ e^(inπx/L)",
      "f(x) = Σ[n=0,∞] cₙ e^(inπx/L)",
      "f(x) = Σ[n=-∞,∞] cₙ e^(-inπx/L)",
      "f(x) = Σ[n=0,∞] cₙ e^(-inπx/L)"
    ],
    "answer": 0
  },
  {
    "question": "In a Fourier series, the coefficients aₙ and bₙ are calculated using integrals. The formula for the coefficient a₀ is:",
    "options": [
      "a₀ = (1/L) ∫[-L,L] f(x) dx",
      "a₀ = (1/2L) ∫[-L,L] f(x) dx",
      "a₀ = ∫[-L,L] f(x) dx",
      "a₀ = (2/L) ∫[-L,L] f(x) dx"
    ],
    "answer": 0
  },
  {
    "question": "The formula for the coefficient aₙ is:",
    "options": [
      "aₙ = (1/L) ∫[-L,L] f(x) cos(nπx/L) dx",
      "aₙ = (2/L) ∫[-L,L] f(x) cos(nπx/L) dx",
      "aₙ = (1/L) ∫[-L,L] f(x) sin(nπx/L) dx",
      "aₙ = (2/L) ∫[-L,L] f(x) sin(nπx/L) dx"
    ],
    "answer": 1
  },
  {
    "question": "The formula for the coefficient bₙ is:",
    "options": [
      "bₙ = (1/L) ∫[-L,L] f(x) cos(nπx/L) dx",
      "bₙ = (2/L) ∫[-L,L] f(x) cos(nπx/L) dx",
      "bₙ = (1/L) ∫[-L,L] f(x) sin(nπx/L) dx",
      "bₙ = (2/L) ∫[-L,L] f(x) sin(nπx/L) dx"
    ],
    "answer": 3
  },
  {
    "question": "A vector field is a function that assigns a vector to each point in a subset of space. A vector field F is a conservative vector field if there exists a scalar function φ such that F = ∇φ. The scalar function φ is called the:",
    "options": [
      "Curl of the vector field.",
      "Divergence of the vector field.",
      "Potential function.",
      "Gradient of the vector field."
    ],
    "answer": 2
  },
  {
    "question": "The curl of a vector field measures the rotational tendency of the field. The curl of a vector field F = <P, Q, R> is given by:",
    "options": [
      "∇ × F",
      "∇ ⋅ F",
      "∇ F",
      "∇ + F"
    ],
    "answer": 0
  },
  {
    "question": "The divergence of a vector field measures the magnitude of a source or sink at a given point. The divergence of a vector field F = <P, Q, R> is given by:",
    "options": [
      "∇ × F",
      "∇ ⋅ F",
      "∇ F",
      "∇ + F"
    ],
    "answer": 1
  },
  {
    "question": "The Green's theorem relates a line integral around a simple closed curve C to a double integral over the plane region D bounded by C. The theorem states that:",
    "options": [
      "∫[C] P dx + Q dy = ∫∫[D] (∂Q/∂x - ∂P/∂y) dA",
      "∫[C] P dx + Q dy = ∫∫[D] (∂Q/∂y - ∂P/∂x) dA",
      "∫[C] P dx + Q dy = ∫∫[D] (∂Q/∂x + ∂P/∂y) dA",
      "∫[C] P dx + Q dy = ∫∫[D] (∂Q/∂y + ∂P/∂x) dA"
    ],
    "answer": 0
  },
  {
    "question": "The Stokes' theorem relates a surface integral to a line integral. The theorem states that the integral of the curl of a vector field over a surface is equal to the line integral of the vector field over the boundary of the surface. This theorem generalizes:",
    "options": [
      "The Fundamental Theorem of Calculus.",
      "The Divergence Theorem.",
      "The Green's Theorem.",
      "The Mean Value Theorem."
    ],
    "answer": 2
  },
  {
    "question": "The Divergence theorem relates the flux of a vector field through a closed surface to the integral of the divergence of the field over the volume enclosed by the surface. The theorem states that:",
    "options": [
      "∫∫[S] F ⋅ dS = ∫∫∫[V] ∇ ⋅ F dV",
      "∫∫[S] F ⋅ dS = ∫∫∫[V] ∇ × F dV",
      "∫∫[S] F ⋅ dS = ∫∫[S] ∇ ⋅ F dS",
      "∫∫[S] F ⋅ dS = ∫∫[S] ∇ × F dS"
    ],
    "answer": 0
  },
  {
    "question": "A series is a sum of the terms of a sequence. A series is said to converge if the sequence of its partial sums approaches a finite limit. The geometric series a + ar + ar² + ... converges if:",
    "options": [
      "|r| > 1",
      "|r| = 1",
      "|r| < 1",
      "r = 0"
    ],
    "answer": 2
  },
  {
    "question": "The p-series Σ(1/nᵖ) converges if:",
    "options": [
      "p ≤ 1",
      "p > 1",
      "p < 1",
      "p = 1"
    ],
    "answer": 1
  },
  {
    "question": "The ratio test is a test for the convergence of a series. The test states that if lim |aₙ₊₁/aₙ| = L, and L < 1, the series:",
    "options": [
      "Diverges",
      "Converges absolutely",
      "Converges conditionally",
      "Is inconclusive"
    ],
    "answer": 1
  },
  {
    "question": "If lim |aₙ₊₁/aₙ| = L, and L > 1, the series:",
    "options": [
      "Diverges",
      "Converges absolutely",
      "Converges conditionally",
      "Is inconclusive"
    ],
    "answer": 0
  },
  {
    "question": "The root test is another test for the convergence of a series. The test states that if lim |aₙ|¹/ⁿ = L, and L < 1, the series:",
    "options": [
      "Diverges",
      "Converges absolutely",
      "Converges conditionally",
      "Is inconclusive"
    ],
    "answer": 1
  },
  {
    "question": "If lim |aₙ|¹/ⁿ = L, and L > 1, the series:",
    "options": [
      "Diverges",
      "Converges absolutely",
      "Converges conditionally",
      "Is inconclusive"
    ],
    "answer": 0
  },
  {
    "question": "The area of a parallelogram with vectors u and v as adjacent sides is the magnitude of the cross product of the vectors. What is the area of the parallelogram?",
    "options": [
      "|u × v|",
      "u ⋅ v",
      "|u| + |v|",
      "|u| - |v|"
    ],
    "answer": 0
  },
  {
    "question": "The volume of a parallelepiped with adjacent edges given by vectors a, b, and c is the absolute value of the scalar triple product. What is the volume of the parallelepiped?",
    "options": [
      "|a ⋅ (b × c)|",
      "a ⋅ (b ⋅ c)",
      "a × (b × c)",
      "a ⋅ (b + c)"
    ],
    "answer": 0
  },
  {
    "question": "The equation of a line in three-dimensional space passing through a point (x₀, y₀, z₀) and parallel to a vector <a, b, c> is given by:",
    "options": [
      "(x - x₀)/a = (y - y₀)/b = (z - z₀)/c",
      "(x + x₀)/a = (y + y₀)/b = (z + z₀)/c",
      "x - x₀ = a, y - y₀ = b, z - z₀ = c",
      "x + x₀ = a, y + y₀ = b, z + z₀ = c"
    ],
    "answer": 0
  },
  {
    "question": "The equation of a sphere with center (h, k, l) and radius r is:",
    "options": [
      "(x - h)² + (y - k)² + (z - l)² = r",
      "(x - h)² + (y - k)² + (z - l)² = r²",
      "(x + h)² + (y + k)² + (z + l)² = r²",
      "x² + y² + z² = r²"
    ],
    "answer": 1
  },
  {
    "question": "The work done by a constant force F over a displacement d is given by the dot product of the force and displacement vectors. What is the formula for the work done?",
    "options": "W = F ⋅ d", "W = |F| |d|", "W = F × d", "W = F + d"
  },
  {
    "question": "The equation of a straight line in point-slope form is:",
    "options": [
      "y = mx + c",
      "y - y₁ = m(x - x₁)",
      "Ax + By + C = 0",
      "y - c = m(x - x)"
    ],
    "answer": 1
  },
  {
    "question": "The equation of a straight line in two-point form is:",
    "options": [
      "y - y₁ = m(x - x₁)",
      "(y - y₁) / (x - x₁) = (y₂ - y₁) / (x₂ - x₁)",
      "y = mx + c",
      "Ax + By + C = 0"
    ],
    "answer": 1
  },
  {
    "question": "The slope of a line passing through points (x₁, y₁) and (x₂, y₂) is given by:",
    "options": [
      "m = (y₂ - y₁) / (x₂ - x₁)",
      "m = (x₂ - x₁) / (y₂ - y₁)",
      "m = (y₂ + y₁) / (x₂ + x₁)",
      "m = (x₂ + x₁) / (y₂ + y₁)"
    ],
    "answer": 0
  },
  {
    "question": "The sine rule for a triangle is: a/sin A = b/sin B = c/sin C. This rule can be used to solve a triangle when you are given:",
    "options": [
      "Three sides.",
      "Two sides and the included angle.",
      "Two angles and a side.",
      "The area of the triangle."
    ],
    "answer": 2
  },
  {
    "question": "The cosine rule for a triangle is: a² = b² + c² - 2bc cos A. This rule can be used to solve a triangle when you are given:",
    "options": [
      "Two angles and a side.",
      "Two sides and the included angle.",
      "One side and two angles.",
      "The area of the triangle."
    ],
    "answer": 1
  },
  {
    "question": "A definite integral represents the net area between the function's graph and the x-axis. What does a negative value of a definite integral indicate?",
    "options": [
      "The area is below the x-axis.",
      "The area is above the x-axis.",
      "The function is increasing.",
      "The function is decreasing."
    ],
    "answer": 0
  },
  {
    "question": "An indefinite integral represents the family of all antiderivatives of a function. Why is the constant of integration 'C' added to the result of an indefinite integral?",
    "options": [
      "Because the derivative of a constant is zero.",
      "Because the integral of a constant is zero.",
      "Because the constant is a variable.",
      "Because the constant is an arbitrary number."
    ],
    "answer": 0
  },
  {
    "question": "The equation of a sine wave is y = A sin(Bx + C) + D. The 'A' in the equation represents the:",
    "options": [
      "Period",
      "Phase shift",
      "Amplitude",
      "Vertical shift"
    ],
    "answer": 2
  },
  {
    "question": "The 'B' in the equation y = A sin(Bx + C) + D is related to the period by the formula:",
    "options": [
      "Period = 2π / B",
      "Period = B / 2π",
      "Period = B",
      "Period = 2πB"
    ],
    "answer": 0
  },
  {
    "question": "The 'C' in the equation y = A sin(Bx + C) + D represents the:",
    "options": [
      "Amplitude",
      "Period",
      "Phase shift",
      "Vertical shift"
    ],
    "answer": 2
  },
  {
    "question": "The 'D' in the equation y = A sin(Bx + C) + D represents the:",
    "options": [
      "Amplitude",
      "Period",
      "Phase shift",
      "Vertical shift"
    ],
    "answer": 3
  },
  {
    "question": "The factorial of a non-negative integer 'n' is the product of all positive integers less than or equal to 'n'. What is the value of 5!?",
    "options": [
      "120",
      "5",
      "1",
      "25"
    ],
    "answer": 0
  },
  {
    "question": "A permutation is an arrangement of objects where the order matters. The number of permutations of 'n' objects taken 'r' at a time is given by the formula:",
    "options": [
      "P(n, r) = n! / (n - r)!",
      "C(n, r) = n! / (r! * (n - r)!)",
      "n!",
      "r!"
    ],
    "answer": 0
  },
  {
    "question": "A combination is a selection of objects where the order does not matter. The number of combinations of 'n' objects taken 'r' at a time is given by the formula:",
    "options": [
      "P(n, r) = n! / (n - r)!",
      "C(n, r) = n! / (r! * (n - r)!)",
      "n!",
      "r!"
    ],
    "answer": 1
  },
  {
    "question": "The binomial theorem provides a formula for expanding binomials raised to a power. The formula for the expansion of (a + b)ⁿ is:",
    "options": [
      "Σ[k=0,n] C(n, k) * aⁿ⁻ᵏ * bᵏ",
      "Σ[k=0,n] P(n, k) * aⁿ⁻ᵏ * bᵏ",
      "Σ[k=0,n] C(n, k) * aᵏ * bⁿ⁻ᵏ",
      "Σ[k=0,n] P(n, k) * aᵏ * bⁿ⁻ᵏ"
    ],
    "answer": 0
  },
  {
    "question": "A polynomial is an expression of the form aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀. The degree of the polynomial is the highest power of the variable. What is the degree of the polynomial 3x⁵ - 2x² + 7x - 1?",
    "options": [
      "5",
      "3",
      "2",
      "1"
    ],
    "answer": 0
  },
  {
    "question": "The roots of a polynomial are the values of the variable for which the polynomial is equal to zero. According to the Fundamental Theorem of Algebra, a polynomial of degree 'n' has:",
    "options": [
      "Exactly 'n' real roots.",
      "At most 'n' complex roots.",
      "Exactly 'n' complex roots (counting multiplicity).",
      "Exactly 'n' integer roots."
    ],
    "answer": 2
  },
  {
    "question": "The division algorithm for polynomials states that for any two polynomials A(x) and B(x), with B(x) ≠ 0, there exist unique polynomials Q(x) and R(x) such that A(x) = B(x)Q(x) + R(x). The polynomial R(x) is called the:",
    "options": [
      "Quotient",
      "Dividend",
      "Divisor",
      "Remainder"
    ],
    "answer": 3
  },
  {
    "question": "The remainder theorem states that when a polynomial P(x) is divided by a linear factor (x - a), the remainder is:",
    "options": [
      "P(a)",
      "P(-a)",
      "P(x) - a",
      "P(x) + a"
    ],
    "answer": 0
  },
  {
    "question": "The factor theorem is a special case of the remainder theorem. It states that (x - a) is a factor of a polynomial P(x) if and only if:",
    "options": [
      "P(a) = 1",
      "P(a) = 0",
      "P(-a) = 1",
      "P(-a) = 0"
    ],
    "answer": 1
  },
  {
    "question": "In a statistical distribution, the skewness measures the asymmetry of the probability distribution. A distribution with a long tail on the right side is:",
    "options": [
      "Positively skewed (right-skewed).",
      "Negatively skewed (left-skewed).",
      "Symmetric.",
      "Normal."
    ],
    "answer": 0
  },
  {
    "question": "A distribution with a long tail on the left side is:",
    "options": [
      "Positively skewed (right-skewed).",
      "Negatively skewed (left-skewed).",
      "Symmetric.",
      "Normal."
    ],
    "answer": 1
  },
  {
    "question": "A symmetric distribution has a skewness of:",
    "options": [
      "Greater than 0.",
      "Less than 0.",
      "Equal to 0.",
      "Undefined."
    ],
    "answer": 2
  },
  {
    "question": "Kurtosis is a measure of the 'tailedness' of a probability distribution. A distribution with a high kurtosis has a high peak and heavy tails. This is called:",
    "options": [
      "Mesokurtic",
      "Leptokurtic",
      "Platykurtic",
      "Normal"
    ],
    "answer": 1
  },
  {
    "question": "A distribution with a low kurtosis has a broad peak and light tails. This is called:",
    "options": [
      "Mesokurtic",
      "Leptokurtic",
      "Platykurtic",
      "Normal"
    ],
    "answer": 2
  },
  {
    "question": "A normal distribution has a kurtosis of:",
    "options": [
      "Greater than 0.",
      "Less than 0.",
      "Equal to 0 (or 3, depending on the definition).",
      "Undefined."
    ],
    "answer": 2
  },
  {
    "question": "The central limit theorem states that the sampling distribution of the sample mean approaches a normal distribution as the sample size:",
    "options": [
      "Decreases.",
      "Increases.",
      "Stays the same.",
      "Is zero."
    ],
    "answer": 1
  },
  {
    "question": "The law of large numbers states that as the number of trials increases, the sample mean will approach the:",
    "options": [
      "Sample standard deviation.",
      "Population mean.",
      "Sample median.",
      "Population variance."
    ],
    "answer": 1
  },
  {
    "question": "A confidence interval is a type of interval estimate of a population parameter. A 95% confidence interval means that:",
    "options": [
      "There is a 95% probability that the interval contains the population parameter.",
      "If we were to repeat the sampling process many times, 95% of the confidence intervals constructed would contain the population parameter.",
      "The probability that the population parameter is in the interval is 0.95.",
      "The probability that the sample mean is in the interval is 0.95."
    ],
    "answer": 1
  },
  {
    "question": "A null hypothesis (H₀) is a statement of 'no effect' or 'no difference.' The alternative hypothesis (H₁) is what you want to prove. In a hypothesis test, we either:",
    "options": [
      "Reject the null hypothesis or fail to reject the null hypothesis.",
      "Accept the null hypothesis or reject the alternative hypothesis.",
      "Accept both hypotheses.",
      "Reject both hypotheses."
    ],
    "answer": 0
  },
  {
    "question": "A Type I error in a hypothesis test occurs when you:",
    "options": [
      "Fail to reject a false null hypothesis.",
      "Reject a true null hypothesis.",
      "Fail to reject a true null hypothesis.",
      "Reject a false null hypothesis."
    ],
    "answer": 1
  },
  {
    "question": "A Type II error in a hypothesis test occurs when you:",
    "options": [
      "Reject a true null hypothesis.",
      "Fail to reject a false null hypothesis.",
      "Fail to reject a true null hypothesis.",
      "Reject a false null hypothesis."
    ],
    "answer": 1
  },
  {
    "question": "The p-value is the probability of obtaining test results at least as extreme as the observed results, assuming that the null hypothesis is true. A small p-value (typically < 0.05) provides evidence to:",
    "options": [
      "Fail to reject the null hypothesis.",
      "Reject the null hypothesis.",
      "Accept the null hypothesis.",
      "Accept the alternative hypothesis."
    ],
    "answer": 1
  },
  {
    "question": "The equation of a line parallel to the x-axis is of the form:",
    "options": [
      "x = c",
      "y = c",
      "y = mx + c",
      "Ax + By + C = 0"
    ],
    "answer": 1
  },
  {
    "question": "The equation of a line parallel to the y-axis is of the form:",
    "options": [
      "x = c",
      "y = c",
      "y = mx + c",
      "Ax + By + C = 0"
    ],
    "answer": 0
  },
  {
    "question": "The slope of a line perpendicular to a line with slope 'm' is:",
    "options": [
      "m",
      "-m",
      "1/m",
      "-1/m"
    ],
    "answer": 3
  },
  {
    "question": "The distance between a point (x₀, y₀) and a line Ax + By + C = 0 is:",
    "options": [
      "|Ax₀ + By₀ + C| / √(A² + B²)",
      "|Ax₀ + By₀ - C| / √(A² + B²)",
      "|Ax₀ + By₀ + C| / (A + B)",
      "|Ax₀ + By₀ - C| / (A + B)"
    ],
    "answer": 0
  },
  {
    "question": "The sum of the interior angles of a polygon with 'n' sides is given by the formula:",
    "options": [
      "(n - 2) * 180°",
      "(n + 2) * 180°",
      "n * 180°",
      "360°"
    ],
    "answer": 0
  },
  {
    "question": "The number of diagonals in a polygon with 'n' sides is given by the formula:",
    "options": [
      "n(n - 3) / 2",
      "n(n - 2) / 2",
      "n(n - 1) / 2",
      "n(n + 1) / 2"
    ],
    "answer": 0
  },
  {
    "question": "The sum of the exterior angles of any convex polygon is:",
    "options": [
      "90°",
      "180°",
      "270°",
      "360°"
    ],
    "answer": 3
  },
  {
    "question": "A regular polygon is a polygon that is both equilateral and equiangular. The measure of each interior angle of a regular 'n'-sided polygon is:",
    "options": [
      "((n - 2) * 180°) / n",
      "((n + 2) * 180°) / n",
      "(n * 180°) / n",
      "360° / n"
    ],
    "answer": 0
  },
  {
    "question": "The area of a regular polygon is given by the formula A = (1/2) * a * p, where 'a' is the apothem and 'p' is the perimeter. The apothem is the distance from the center of the polygon to the:",
    "options": [
      "Vertex",
      "Midpoint of a side",
      "Opposite vertex",
      "Opposite side"
    ],
    "answer": 1
  },
  {
    "question": "A vector is a quantity that has both magnitude and direction. The vector from point A to point B is denoted as:",
    "options": [
      "AB",
      "BA",
      "|AB|",
      "AB"
    ],
    "answer": 0
  },
  {
    "question": "The magnitude of a vector V = <x, y, z> is the length of the vector. The magnitude is given by:",
    "options": [
      "√(x² + y² + z²)",
      "x + y + z",
      "√(x + y + z)",
      "x² + y² + z²"
    ],
    "answer": 0
  },
  {
    "question": "A unit vector is a vector with a magnitude of:",
    "options": [
      "0",
      "1",
      "-1",
      "Infinity"
    ],
    "answer": 1
  },
  {
    "question": "To find the unit vector in the direction of a vector V, you must divide the vector by its:",
    "options": [
      "Direction",
      "Magnitude",
      "Scalar component",
      "Cross product"
    ],
    "answer": 1
  },
  {
    "question": "The angle between two vectors A and B can be found using the dot product. The formula is:",
    "options": [
      "cosθ = (A ⋅ B) / (|A||B|)",
      "sinθ = (A ⋅ B) / (|A||B|)",
      "tanθ = (A ⋅ B) / (|A||B|)",
      "secθ = (A ⋅ B) / (|A||B|)"
    ],
    "answer": 0
  },
  {
    "question": "The cross product of two vectors A and B results in a new vector that is perpendicular to both A and B. The direction of the resulting vector is determined by the:",
    "options": [
      "Left-hand rule",
      "Right-hand rule",
      "Pythagorean theorem",
      "Distance formula"
    ],
    "answer": 1
  },
  {
    "question": "The volume of a sphere is given by the formula V = (4/3)πr³, where 'r' is the radius. The surface area of a sphere is given by:",
    "options": [
      "A = πr²",
      "A = 4πr²",
      "A = (4/3)πr³",
      "A = 2πr"
    ],
    "answer": 1
  },
  {
    "question": "The volume of a cube with side length 's' is given by V = s³. The surface area of a cube is given by:",
    "options": [
      "A = 6s",
      "A = 6s²",
      "A = s²",
      "A = s³"
    ],
    "answer": 1
  },
  {
    "question": "The volume of a cylinder with radius 'r' and height 'h' is V = πr²h. The lateral surface area of a cylinder is given by:",
    "options": [
      "A = 2πr",
      "A = 2πrh",
      "A = πr²",
      "A = 2πr²"
    ],
    "answer": 1
  },
  {
    "question": "The total surface area of a cylinder with radius 'r' and height 'h' is given by:",
    "options": [
      "A = 2πrh",
      "A = 2πr²",
      "A = 2πr(r + h)",
      "A = πr²h"
    ],
    "answer": 2
  },
  {
    "question": "The volume of a cone with radius 'r' and height 'h' is V = (1/3)πr²h. The lateral surface area of a cone is given by:",
    "options": [
      "A = πr",
      "A = πrs",
      "A = πr²",
      "A = 2πrh"
    ],
    "answer": 1
  },
  {
    "question": "The sum of the first 'n' positive integers is given by the formula:",
    "options": [
      "n(n + 1)",
      "n(n + 1) / 2",
      "n²",
      "n(n - 1) / 2"
    ],
    "answer": 1
  },
  {
    "question": "The sum of the first 'n' squares is given by the formula:",
    "options": [
      "n(n + 1)(2n + 1) / 6",
      "n(n + 1) / 2",
      "n²",
      "n³"
    ],
    "answer": 0
  },
  {
    "question": "The sum of the first 'n' cubes is given by the formula:",
    "options": [
      "(n(n + 1) / 2)²",
      "n(n + 1)(2n + 1) / 6",
      "n³",
      "n²(n + 1)² / 4"
    ],
    "answer": 0
  }
];

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
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Quiz variables
const TOTAL_QUESTIONS = 45;
const TIME_LIMIT = 45 * 60; // in seconds
let selectedQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timer;
let timeRemaining = TIME_LIMIT;

// Initialize quiz
startQuizBtn.addEventListener('click', () => {
  startScreen.style.display = 'none';
  app.style.display = 'flex';
  initQuiz();
});

function initQuiz() {
  // Shuffle and pick questions
  const shuffled = shuffleArray([...questions]);
  selectedQuestions = shuffled.slice(0, Math.min(TOTAL_QUESTIONS, questions.length));

  currentQuestionIndex = 0;
  userAnswers = new Array(selectedQuestions.length).fill(null);

  timeRemaining = TIME_LIMIT;
  updateTimerDisplay();

  showQuestion();

  prevBtn.disabled = true;
  nextBtn.disabled = false;
  submitBtn.disabled = true;

  quizContainer.style.display = 'flex';
  resultContainer.style.display = 'none';

  startTimer();
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
  questionTextEl.textContent = q.question;

  optionsContainer.innerHTML = '';

  q.options.forEach((optionText, i) => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';
    optionDiv.textContent = String.fromCharCode(65 + i) + ". " + optionText;
    
    // Add keyboard shortcut badge
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

function finishQuiz() {
  clearInterval(timer);
  quizContainer.style.display = 'none';
  resultContainer.style.display = 'flex';

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
    div.innerHTML = `
      <div><strong>Q${idx + 1}:</strong> ${q.question}</div>
      <div>Your answer: <span class="${isCorrect ? 'correct' : 'wrong'}">${userAnswerText}</span></div>
      ${isCorrect ? '' : `<div>Correct answer: <span class="correct">${correctAnswerText}</span></div>`}
    `;
    resultsList.appendChild(div);
  });

  scoreEl.textContent = `You answered ${correctCount} out of ${selectedQuestions.length} questions correctly.`;
  
  // Add performance comment
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

// Dark Mode Toggle
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
  // Ignore if focus is on input elements
  if (['INPUT', 'TEXTAREA', 'BUTTON'].includes(document.activeElement.tagName)) {
    return;
  }
  
  const key = e.key.toUpperCase();
  
  // Option selection
  if (key >= 'A' && key <= 'E') {
    const optionIndex = key.charCodeAt(0) - 65;
    const currentOptions = selectedQuestions[currentQuestionIndex]?.options || [];
    
    if (optionIndex < currentOptions.length) {
      selectOption(optionIndex);
    }
  }
  
  // Navigation
  switch(key) {
    case 'P':
      if (!prevBtn.disabled) prevBtn.click();
      break;
    case 'N':
      if (!nextBtn.disabled) nextBtn.click();
      break;
  }
});
