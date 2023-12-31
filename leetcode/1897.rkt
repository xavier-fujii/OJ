; https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/description/
#lang racket

(define/contract (make-equal words)
  (-> (listof string?) boolean?)
  (define words-length (length words))
  (define sorted-chars
    (sort (flatten (map (lambda (word) (string->list word)) words)) char<?))

  (define chars-frequencies (map
                             (λ (a) (cdr a))

                             (foldl
                              (λ (a result) (cond
                                              [(empty? result) (append result (list (cons a 1)))]
                                              [(eq? (car (last result)) a) (append (drop-right result 1) (list (cons a (+ (cdr (last result)) 1))))]
                                              [else (append result (list (cons a 1)))]
                                              ))
                              (list)
                              sorted-chars
                              )))

  (define k (findf (λ (fre) (not (eq? (remainder fre words-length) 0))) chars-frequencies))

  (boolean? k))


(display (make-equal (list "abc" "aabc" "bc")))
(display (make-equal (list "abc" "aabc" "c")))
(display (make-equal (list "ab" "a")))
(display (make-equal (list "abbab")))