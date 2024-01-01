;  https://leetcode.com/problems/assign-cookies
#lang racket

(define (run g s content-count)
  (cond [(or (empty? g) (empty? s)) content-count]
        [(<= (first g) (first s)) (run (cdr g) (cdr s) (+ content-count 1))]
        [else (run  g (cdr s) content-count)]))

(define/contract (find-content-children g s)
  (-> (listof exact-integer?) (listof exact-integer?) exact-integer?)
  (define g1 (sort g <))
  (define s1 (sort s <))
  (run g1 s1 0))
