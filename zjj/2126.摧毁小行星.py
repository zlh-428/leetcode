from itertools import accumulate


class Solution:
    def asteroidsDestroyed(self, mass: int, asteroids: list[int]) -> bool:
        asteroids.sort()
        for i in asteroids:
            if mass - i < 0:
                return False
            else:
                mass += i
        return True


class Solution:
    def asteroidsDestroyed(self, mass: int, asteroids: list[int]) -> bool:
        asteroids.sort()
        lst = accumulate(asteroids, initial=mass)
        return all(x <= y for x, y in zip(asteroids, lst))
