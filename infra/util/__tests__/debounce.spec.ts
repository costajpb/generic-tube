import debounce from "@/infra/util/debounce"

describe('util/debounce', () => {
    beforeEach(() => {
        vi.useFakeTimers()
    })

    afterEach(() => {
        vi.useRealTimers()
        vi.restoreAllMocks()
    })

    const action = vi.fn()

    it('should not call the action immediately', () => {
        debounce(action)

        expect(action).not.toHaveBeenCalled()
    })

    it('should call the action once after a 500ms timeout', () => {
        debounce(action)
        vi.advanceTimersByTime(500)
        expect(action).toHaveBeenCalledOnce()
    })

    describe('a new attempt comes along', () => {
        const newAttempt = vi.fn()
        
        beforeEach(() => {
            debounce(action)
            vi.advanceTimersByTime(100)
        })

        it('should not call any actions after the original timeout', () => {
            debounce(newAttempt)

            vi.advanceTimersByTime(400)

            expect(action).not.toHaveBeenCalled()
            expect(newAttempt).not.toHaveBeenCalled()
        })

        it('should call only the last action a timeout after the attempt', () => {
            debounce(newAttempt)

            vi.advanceTimersByTime(500)

            expect(action).not.toHaveBeenCalled()
            expect(newAttempt).toHaveBeenCalled()
        })
    })
})